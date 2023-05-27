import { useState } from "react"
import { Helmet } from "react-helmet"

// Import pages
import Header from "./pages/header/Header"
import Sidebar from "./pages/sidebar/Sidebar"

// Impoirt utils
import { saveToLocal } from "./utils/LocalStorage"
import { MealContext, RecipeContext } from "./utils/Contexts"

function App() {
  // Get pre-existing recipes from local storage
  let recipes = JSON.parse(localStorage.getItem("recipes")) || []
  // Get pre-existing meals from local storage
  let meals = JSON.parse(localStorage.getItem("meals")) || []

  // Set sidebar to be expanded by default for certain screen size
  const [isExpanded, setIsExpanded] = useState((window.innerWidth > 620))
  const toggleSidebar = () => { // If toggled, reverse boolean isExpanded value
    setIsExpanded(!isExpanded)
    console.log("Sidebar shown:", !isExpanded)
  }

  // Function that resets all batch multipliers to 1x
  const resetMultipliers = () => {
    let newRecipes = recipes.map(recipe => {
      recipe.setBatch(1)
      return recipe
    })
    recipes = newRecipes
    saveToLocal(newRecipes)
  }

  // Reset all multipliers every time the page is reloaded
  window.addEventListener("onload", resetMultipliers)

  return (
    <div className="App">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Helmet>
      <Header toggleSidebar={toggleSidebar} />
      <RecipeContext.Provider value={recipes}>
        <MealContext.Provider value={meals}>
          <Sidebar show={isExpanded} />
          {/* <Content meals={meals} recipes={recipes} /> */}
        </MealContext.Provider>
      </RecipeContext.Provider>

    </div>
  )
}

export default App;
