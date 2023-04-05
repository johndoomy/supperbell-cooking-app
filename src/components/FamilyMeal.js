import "../styling/FamilyMeal.css"
import EntreesSaladsSides from "./EntreesSaladsSides"

const FamilyMeal = ({ arrayLocationSettings, selectModal, deleteIngredient, updateRecipe, selectedRecipe }) => {
  return (
    <div className="familyMealCard">
      {selectedRecipe.ingredients.map((ingredient, index) => (
        <div key={index} className="recipeComponent">
          <div className="componentTitleContainer">
            <h3 key={index} className="recipeComponentName">{ingredient.name}</h3>
            <span className="componentCount">{ingredient.amount} per order</span>
          </div>
          <EntreesSaladsSides
            arrayLocationSettings={arrayLocationSettings}
            selectModal={selectModal}
            familyRecipe={selectedRecipe}
            deleteIngredient={deleteIngredient}
            index={index}
            updateRecipe={updateRecipe}
            selectedRecipe={ingredient}
          />
        </div>
      ))}
    </div>
  )
}

export default FamilyMeal