const DeleteIngredientButton = ({ deleteIngredient, recipeKey, ingredientKey, familyKey }) => {

  return (
    <span className="deleteIngredient" onClick={() => deleteIngredient(recipeKey, ingredientKey, familyKey)}>
        Delete
    </span>
  )
}

export default DeleteIngredientButton