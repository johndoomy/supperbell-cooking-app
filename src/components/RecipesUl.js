const RecipesUl = ({ filteredRecipes }) => {
  return (
    <ul className="recipesUl">
        {filteredRecipes.map((recipe, index) => (
            // <li id={recipe.name} key={index} className={(recipe.name === selectedRecipe.name) ? "recipeItem selectedRecipe" : "recipeItem"} onClick={(event) => {
            <li id={recipe.name} key={index} className={"recipeItem"} onClick={(event) => {
              if (document.querySelector(".selectedRecipe") !== null) {
                  document.querySelector(".selectedRecipe").classList.toggle("selectedRecipe");
              }
              event.target.classList.add("selectedRecipe")
              selectRecipe(recipe.key)
              // if (window.innerWidth <= 620) {
              //     toggleNav()
              // }
            }}>{recipe.name}</li>))}
    </ul>
  )
}

export default RecipesUl