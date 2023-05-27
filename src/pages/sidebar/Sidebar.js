import "./Sidebar.css"
import { useRef, useEffect, useState, useContext } from "react"

// Component Imports
import RecipesUl from "../../components/RecipesUl"
import CreateMealModal from "../../components/modals/CreateMealModal"

// Utility imports
import { RecipeContext, MealContext } from "../../utils/Contexts"

const Sidebar = ({ show }) => {
  // Get the data from recipe and meal contexts created in App.js
  const recipes = useContext(RecipeContext)
  const meals = useContext(MealContext)

  const sidebarRef = useRef()

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const handler = event => {
      if (!sidebarRef.current.contains(event.target) && show && window.innerWidth <= 620 && (event.target !== document.querySelector(".hamburgerButton"))) {
        Array.from(document.getElementsByClassName("ingredient")).forEach(element => { element.classList.toggle("darken") })
      }
    }
    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  const entrees = meals.filter(meal => meal.type === "entree") //these are filtered lists to be passed and sorted to correct categories
  const salads = meals.filter(meal => meal.type === "salad")
  const familyMeals = meals.filter(meal => meal.type === "family meal")
  const sides = meals.filter(meal => meal.type === "side")

  return (
    <div ref={sidebarRef} className={"sidebar" + (show ? " is-open" : "")}>
      <div onClick={() => { setShowModal(true) }} className="showRecipeModal">
        <span>+ New Meal</span>
      </div>
      <div>
        <p className="sidebarHeading">Meals</p>

        {entrees[0] &&
          <>
            <p className="listTitle">Entrees</p>
            <RecipesUl filteredRecipes={entrees} />
            {/* <RecipesUl selectedRecipe={selectedRecipe} selectRecipe={selectRecipe} filteredRecipes={entrees} /> */}

            <div className="sidebarUnderline"></div>
          </>}

        {familyMeals[0] &&
          <>
            <p className="listTitle">Family Meals</p>
            <RecipesUl filteredRecipes={familyMeals} />
            {/* <RecipesUl selectedRecipe={selectedRecipe} selectRecipe={selectRecipe} filteredRecipes={familyMeals} /> */}

            <div className="sidebarUnderline"></div>
          </>}

        {salads[0] &&
          <>
            <p className="listTitle">Salads</p>
            <RecipesUl filteredRecipes={salads} />
            {/* <RecipesUl selectedRecipe={selectedRecipe} selectRecipe={selectRecipe} filteredRecipes={salads} /> */}

            <div className="sidebarUnderline"></div>
          </>}

        {sides[0] &&
          <>
            <p className="listTitle">Sides</p>
            <RecipesUl filteredRecipes={sides} />
            {/* <RecipesUl selectedRecipe={selectedRecipe} selectRecipe={selectRecipe} filteredRecipes={sides} /> */}

            <div className="sidebarUnderline"></div>
          </>}

        <p className="sidebarHeading">Recipes</p>

        {recipes[0] &&
          <>
            {/* <RecipesUl selectRecipe={selectedRecipe} selectRecipe={selectRecipe} filteredRecipes={recipes} /> */}

            <div className="sidebarUnderline"></div>
          </>}
      </div>

      {showModal ?
        <CreateMealModal handleClose={setShowModal} />
        : null}
    </div>
  )
}

export default Sidebar