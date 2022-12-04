const SubRecipeCreateButton = ({ familyKey, index, arrayLocationSettings, selectModal, ingredient, familyRecipe, recipeIndex, selectedRecipe }) => {
  return (
        <input 
            className="addSubRecipeButton" 
            onClick={() => {
                arrayLocationSettings(((familyKey !== undefined) ? familyKey : selectedRecipe.key), index, recipeIndex)
                selectModal("subRecipe") 
                document.querySelector(".modal").style.display = "block"
            }} 
            type="button" 
            value="Add Sub Recipe" 
          />
  )
}

export default SubRecipeCreateButton