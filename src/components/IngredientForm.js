import { useState } from "react"


const IngredientForm = ({ familyKey, index, updateRecipe, selectedRecipe }) => {
    const [inputs, setInputs] = useState({unit: "each"})

    const handleChange = event => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = event => {
        event.preventDefault()
        inputs.key = new Date().valueOf()
        updateRecipe(((familyKey !== undefined) ? familyKey : selectedRecipe.key), inputs, index)
        setInputs({unit: "each"})
        (window.innerWidth > 620) && document.querySelectorAll(".ingredientInputText")[0].focus()
    }

  return (
    <div className="formContainer ingredientForm">
        <form onSubmit={handleSubmit}>
            <input
                autoFocus={(window.innerWidth > 620) && true}
                autoComplete="off"
                className="ingredientInputText"
                size={(window.innerWidth <= 620) ? 12 : 18}
                placeholder="Add ingredient"
                type="text"
                name="name"
                required
                value={inputs.name || ""}
                onChange={handleChange}
            />
            <input
                autoComplete="off"
                required
                value={inputs.amount || ""}
                onChange={handleChange}
                type="tel"
                name="amount"
                className="amountInputText"
                size={3}
                placeholder="#"
            />
            <select value={inputs.unit || "each"} name="unit" onChange={handleChange} className="unitInput">
                <option value="each">each</option>
                <option value="c">cups</option>
                <option value="qt">quarts</option>
                <option value="lb">pounds</option>
                <option value="fl oz">fl oz (volume)</option>
                <option value="oz">oz (weight)</option>
                <option value="tbsp">tablespoons</option>
            </select>


            <input className="addIngredientButton" type="submit" value="Add" />

        </form>
    </div>
  )
}

export default IngredientForm