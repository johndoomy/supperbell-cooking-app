const SubRecipeCreateButton = ({ selectModal, ingredient, familyRecipe, recipeIndex, selectedRecipe }) => {
  return (
    <div className="addSubRecipeButtonContainer">
        <input 
            className="addSubRecipeButton" 
            onClick={() => {
                selectModal("subRecipe") 
                document.querySelector(".modal").style.display = "block"
            }} 
            type="button" 
            value="Add Sub Recipe" 
        />
    </div>
    
  )
}

export default SubRecipeCreateButton