const DeleteIngredientButton = ({ deleteIngredient, recipeKey, ingredientKey, familyKey }) => {

  return (
    <div className="deleteIngredient" onClick={() => deleteIngredient(recipeKey, ingredientKey, familyKey)}>
        Delete
    </div>
  )
}

export default DeleteIngredientButton