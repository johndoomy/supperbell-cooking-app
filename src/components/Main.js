import "../styling/Main.css"
import FamilyMeal from "./FamilyMeal"
import EntreesSaladsSides from "./EntreesSaladsSides"
import TitleRight from "./TitleRight"
import CheckListImage from "./CheckListImage"

const Main = ({ arrayLocationSettings, isExpanded, deleteIngredient, updateRecipe, deleteRecipe, selectedRecipe, selectModal }) => {
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // })
  return (
    <div className={isExpanded ? "move" : undefined} id="main">
      {(!selectedRecipe) ?
        <div className="startRecipe">
          <CheckListImage />
          <p id="noRecipesText">No available recipes</p>
          <input
            onClick={() => { document.querySelector(".modal").style.display = "block"; document.querySelector('#recipeInputText').focus() }}
            className="startButton"
            type="button"
            value="Click here to start"
          />
        </div>
        :
        <div className="titleContainer">
          <div className="titleLeft">
            <h2
              className="recipeTitle">{selectedRecipe && selectedRecipe.name}
              <span className="typeSpan">{selectedRecipe ? (`(${selectedRecipe.type})`) : ""}</span>
            </h2>
          </div>
          <TitleRight
            selectModal={selectModal}
            recipeKey={selectedRecipe && selectedRecipe.key}
            deleteRecipe={deleteRecipe}
          />
        </div>}
      {selectedRecipe && (selectedRecipe.type === "family meal" ?
        <FamilyMeal
          arrayLocationSettings={arrayLocationSettings}
          selectModal={selectModal}
          deleteIngredient={deleteIngredient}
          updateRecipe={updateRecipe}
          selectedRecipe={selectedRecipe}
        />
        :
        <EntreesSaladsSides
          arrayLocationSettings={arrayLocationSettings}
          selectModal={selectModal}
          deleteIngredient={deleteIngredient}
          updateRecipe={updateRecipe}
          selectedRecipe={selectedRecipe}
        />
      )}
      <input type="button" value="Add Ingredient" onClick={() => { selectModal("addIngredient"); document.querySelector(".modal").style.display = "block" }} />
    </div>
  )
}

export default Main