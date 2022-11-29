import { useState } from "react"
import Main from "./Main"
import Sidebar from "./Sidebar"
import JModal from "./JModal"

const Content = ({ save, isExpanded, deleteIngredient, setMultiplier, updateRecipe, addRecipe, deleteRecipe, selectRecipe, selectedRecipe, recipes, toggleNav }) => {
  const [modalState, setModal] = useState("recipe")
  const selectModal = modalType => {
    setModal(modalType)
  }

  return (
    <div id="content">
        <Sidebar save={save} isExpanded={isExpanded} selectModal={selectModal} selectRecipe={selectRecipe} selectedRecipe={selectedRecipe} toggleNav={toggleNav} recipes={recipes} />
        <Main isExpanded={isExpanded} deleteIngredient={deleteIngredient} updateRecipe={updateRecipe} selectModal={selectModal} deleteRecipe={deleteRecipe} selectedRecipe={selectedRecipe} />
        <JModal recipeKey={selectedRecipe && selectedRecipe.key} setMultiplier={setMultiplier} modalState={modalState} addRecipe={addRecipe} />
    </div>
  )
}

export default Content