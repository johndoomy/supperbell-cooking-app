import FamilyMeal from "./FamilyMeal"
import EntreesSaladsSides from "./EntreesSaladsSides"
import TitleRight from "./TitleRight"
import CheckListImage from "./CheckListImage"
import { useEffect } from "react"

const Main = ({ isExpanded, deleteIngredient, updateRecipe, deleteRecipe, selectedRecipe, selectModal }) => {
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // })
  return (
    <div className={isExpanded ? "move" : undefined} id="main">
      {(!selectedRecipe) ?
        <div className="startRecipe">
          <CheckListImage />
          <p id="noRecipesText">No available recipes</p>
          <input onClick={() => {document.querySelector(".modal").style.display = "block"; document.querySelector('#recipeInputText').focus()}} className="startButton" type="button" value="Click here to start" />
        </div>      
      : 
      <div className="titleContainer">
        <div className="titleLeft">
          <h2 className="recipeTitle">{selectedRecipe && selectedRecipe.name}<span className="typeSpan">{selectedRecipe ? (`(${selectedRecipe.type})`) : ""}</span></h2>
        </div>
        <TitleRight selectModal={selectModal} recipeKey={selectedRecipe && selectedRecipe.key} deleteRecipe={deleteRecipe} />
      </div>}
      {selectedRecipe && (selectedRecipe.type === "family meal" ? <FamilyMeal deleteIngredient={deleteIngredient} updateRecipe={updateRecipe} selectedRecipe={selectedRecipe} /> : <EntreesSaladsSides deleteIngredient={deleteIngredient} updateRecipe={updateRecipe} selectedRecipe={selectedRecipe} />)}   
    </div>
  )
}

export default Main