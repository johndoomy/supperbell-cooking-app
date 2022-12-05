import { useState } from "react"
import MultiplierButtons from "./MultiplierButtons"

const SubRecipe = ({ ingredient, familyRecipe, recipeIndex, selectedRecipe }) => {
  const [yieldMultiplier, setYieldMultiplier] = useState(1)

  const updateMultiplier = number => {
    setYieldMultiplier(number)
  }

  return (
    <div className="subRecipe">
      <div className="yieldContainer">
        <p>Yield: {ingredient.yieldNumber * yieldMultiplier}</p>
        <p>Portion Size: {ingredient.portionNumber} {ingredient.portionUnit}</p>
      </div>
      <MultiplierButtons updateMultiplier={updateMultiplier} />
        <ul>
          {ingredient.ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.name} {ingredient.amount * yieldMultiplier} {ingredient.unit}
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