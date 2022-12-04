const SubRecipe = ({ ingredient, familyRecipe, recipeIndex, selectedRecipe }) => {
  return (
    <div className="subRecipe">
      <div className="yieldContainer">
        <p>Yield: {ingredient.yieldNumber}</p>
        <p>Portion Size: {ingredient.portionNumber} {ingredient.portionUnit}</p>
      </div>
        <ul>
          {ingredient.ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.name} {ingredient.amount} {ingredient.unit}
            </li>
          ))}
        </ul>
        <div>
          <p>Directions: {ingredient.directions}</p>
        </div>
    </div>
  )
}

export default SubRecipe