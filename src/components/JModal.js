import { useRef, useEffect, useState } from "react"
import RecipeForm from "./RecipeForm"
import SubRecipeForm from "./SubRecipeForm"
import UpdateNumbersForm from "./UpdateNumbersForm"

const JModal = ({ recipeKey, setMultiplier, modalState, addRecipe, handleClose }) => {
  const [inputs, setInputs] = useState({type: "entree", amount1: 1, amount2: 1, amount3: 1})

  const handleChange = event => {
      const name = event.target.name
      const value = event.target.value
      setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = event => {
      event.preventDefault()
      addRecipe(inputs)
      handleClose1()
  }

  const handleClose1 = () => {
      document.querySelector(".modal").style.display = "none"
      document.querySelector("#recipeInputText").value = ""
      inputs.type = "entree"
      inputs.name = ""
      toggleExtended("none")
      return inputs
  }

  const [isExtended, setIsExtended] = useState(false)

  const toggleExtended = (string) => {
    if (string === "family meal") {
      setIsExtended(true)
    } else {
      setIsExtended(false)
    }
  }

  const modalRef = useRef()

  useEffect(() => {
    const handler = event => {
      if (!modalRef.current.contains(event.target)) {
        handleClose1()
      }
    }
    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })
    
  return (
    <div className="modal">
        <div ref={modalRef} className={isExtended ? "modal-content extended" : "modal-content"}>
            <span onClick={() => {handleClose1()}} className="close">&times;</span>
            {(modalState === "recipe") ? 
              <RecipeForm 
                inputs={inputs}
                handleClose1={handleClose1} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
                toggleExtended={toggleExtended} 
                addRecipe={addRecipe} 
                handleClose={handleClose} 
              /> 
              :
              (modalState === "updateNumbers") ? 
                <UpdateNumbersForm 
                  recipeKey={recipeKey} 
                  setMultiplier={setMultiplier}  
                /> 
              :
              (modalState === "subRecipe") ?
                <SubRecipeForm />
              :
              console.log("modal error")
            }
        </div>  
    </div>
  )
}

export default JModal