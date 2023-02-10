import IngredientForm from "./IngredientForm"
import IngredientItem from "./IngredientItem"


const EntreesSaladsSides = ({ arrayLocationSettings, selectModal, deleteIngredient, familyRecipe, index, updateRecipe, selectedRecipe }) => {

  return (
    <div className="recipeCard">
      {JSON.stringify(selectedRecipe.ingredients) !== JSON.stringify(["none"]) &&
        <ul className="listOfIngredients">
          {selectedRecipe.ingredients && selectedRecipe.ingredients.map((ingredient, recipeIndex) => (
            <IngredientItem familyKey={familyRecipe && familyRecipe.key} index={index} arrayLocationSettings={arrayLocationSettings} selectModal={selectModal} deleteIngredient={deleteIngredient} key={recipeIndex} selectedRecipe={selectedRecipe} familyRecipe={familyRecipe} ingredient={ingredient} recipeIndex={recipeIndex} />))}
        </ul>
      }
      {selectedRecipe.type !== "example" && <IngredientForm familyKey={familyRecipe && familyRecipe.key} index={index} updateRecipe={updateRecipe} selectedRecipe={selectedRecipe} />}
    </div>
  )
}

export default EntreesSaladsSides