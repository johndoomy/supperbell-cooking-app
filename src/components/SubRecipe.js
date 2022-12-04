const SubRecipe = ({ ingredient, familyRecipe, recipeIndex, selectedRecipe }) => {
  return (
    <div className="subRecipe">
        <ul>
          {ingredient.ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.name} {ingredient.amount} {ingredient.unit}
            </li>
          ))}
        </ul>
        <div>
          Directions: {ingredient.directions}
        </div>
    </div>
  )
}

export default SubRecipe