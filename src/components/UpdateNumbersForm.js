import { useState } from "react"


const UpdateNumbersForm = ({ recipeKey, setMultiplier }) => {
  const [multiplierInput, setMultiplierInput] = useState("")

  const handleChange = event => {
    const value = event.target.value
    setMultiplierInput(value)
  }

  return (
    <div>
        <p>Update Number of Orders:</p>
        <div className="inputBoxBackground">
            <input 
              value={multiplierInput || ""}
              autoFocus autoComplete="off"
              id="updateNumbersInput"
              placeholder="#"
              type="tel"
              onChange={handleChange}
            />
            <p> </p>
            <p> </p>
            <div className="cancelCreate updateCancel">
                <span onClick={() => {
                  setMultiplier(recipeKey, multiplierInput)
                  document.querySelector(".modal").style.display = "none"
                  }}
                  id="updateNumbersButton"
                  className="createText">
                  Update
                </span>
                <span onClick={() => {document.querySelector(".modal").style.display = "none"}} className="cancelText">Cancel</span>
            </div>
        </div>
    </div>
  )
}

export default UpdateNumbersForm