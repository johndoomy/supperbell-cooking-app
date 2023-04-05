import "../styling/Sidebar.css"
import { useRef, useEffect } from "react"
import RecipesUl from "./RecipesUl"

const Sidebar = ({ save, isExpanded, recipes, selectRecipe, selectedRecipe, selectModal, toggleNav }) => {

  const sidebarRef = useRef()

  useEffect(() => {
    const handler = event => {
      if (!sidebarRef.current.contains(event.target) && isExpanded && window.innerWidth <= 620 && (event.target !== document.querySelector(".hamburgerButton"))) {
        toggleNav()
      }
    }
    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  const entrees = recipes.filter(recipe => recipe.type === "entree") //these are filtered lists to be passed and sorted to correct categories
  const salads = recipes.filter(recipe => recipe.type === "salad")
  const familyMeals = recipes.filter(recipe => recipe.type === "family meal")
  const sides = recipes.filter(recipe => recipe.type === "side")

  return (
    <div ref={sidebarRef} className={isExpanded ? "sidebar is-open" : "sidebar"}>
      <div onClick={() => { (window.innerWidth <= 620 && toggleNav()); selectModal("recipe"); document.querySelector(".modal").style.display = "block"; (document.querySelector('#recipeInputText') !== null) && document.querySelector('#recipeInputText').focus() }} className="showRecipeModal">
        <span>+ New Recipe</span>
      </div>

      {entrees[0] &&
        <>
          <p className="listTitle">Entrees</p>
          <RecipesUl selectedRecipe={selectedRecipe} toggleNav={toggleNav} selectRecipe={selectRecipe} filteredRecipes={entrees} />

          <div className="sideBarUnderline"></div>
        </>}

      {familyMeals[0] &&
        <>
          <p className="listTitle">Family Meals</p>
          <RecipesUl selectedRecipe={selectedRecipe} toggleNav={toggleNav} selectRecipe={selectRecipe} filteredRecipes={familyMeals} />

          <div className="sideBarUnderline"></div>
        </>}

      {salads[0] &&
        <>
          <p className="listTitle">Salads</p>
          <RecipesUl selectedRecipe={selectedRecipe} toggleNav={toggleNav} selectRecipe={selectRecipe} filteredRecipes={salads} />

          <div className="sideBarUnderline"></div>
        </>}

      {sides[0] &&
        <>
          <p className="listTitle">Sides</p>
          <RecipesUl selectedRecipe={selectedRecipe} toggleNav={toggleNav} selectRecipe={selectRecipe} filteredRecipes={sides} />

          <div className="sideBarUnderline"></div>
        </>}
    </div>
  )
}

export default Sidebar