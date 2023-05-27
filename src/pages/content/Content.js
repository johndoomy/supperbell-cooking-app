import { useState } from "react"
import Main from "../../pages/main/main/Main"
import Sidebar from "../../pages/sidebar/Sidebar"
import JModal from "./jModal/JModal"

const Content = ({ state, isExpanded }) => {
  const [modalState, setModal] = useState("recipe")
  const selectModal = modalType => {
    setModal(modalType)
  }

  const [arrayLocation, setArrayLocation] = useState({})
  const arrayLocationSettings = (key, index, subIndex) => {
    setArrayLocation({recipeKey: key, ingredientIndex: index, subIngredientIndex: subIndex})
  }

  return (
    <div id="content">
        {/* <Sidebar 
          save={save} 
          isExpanded={isExpanded} 
          selectModal={selectModal} 
          selectRecipe={selectRecipe} 
          selectedRecipe={selectedRecipe} 
          toggleNav={toggleNav} 
          recipes={recipes} 
        />
        <Main
          arrayLocationSettings={arrayLocationSettings}
          isExpanded={isExpanded} 
          deleteIngredient={deleteIngredient} 
          updateRecipe={updateRecipe} 
          selectModal={selectModal} 
          deleteRecipe={deleteRecipe} 
          selectedRecipe={selectedRecipe} 
        />
        <JModal
          arrayLocation={arrayLocation}
          updateRecipe={updateRecipe}
          recipeKey={selectedRecipe && selectedRecipe.key} 
          setMultiplier={setMultiplier} 
          modalState={modalState} 
          addRecipe={addRecipe} /> */}
    </div>
  )
}

export default Content