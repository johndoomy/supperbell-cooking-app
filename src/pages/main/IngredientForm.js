import { useState } from "react"


const IngredientForm = ({ familyKey, index, updateRecipe, selectedRecipe, handleClose1 }) => {
    const [inputs, setInputs] = useState({unit: "each"})

    const handleChange = event => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = event => {
        event.preventDefault()
        inputs.key = new Date().valueOf()
        updateRecipe((familyKey || selectedRecipe.key), inputs, index)
        setInputs(() => ({unit: "each"}))
        (window.innerWidth > 620) && document.querySelectorAll(".ingredientInputText")[0].focus()
    }

  return (
    <div className="formContainer ingredientForm">
        <form className="ingredientFormContent" onSubmit={handleSubmit}>
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
                required={(inputs.unit === "garnish" || inputs.unit === "to taste") ? false : true}
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
                <option value="fl oz">fl oz (volume)</option>
                <option value="tbsp">tablespoons</option>
                <option value="tsp">teapoons</option>
                <option value="oz">oz (weight)</option>
                <option value="lb">pounds</option>
                <option value="pt">pints</option>
                <option value="gal">gallons</option>
                <option value="g">grams</option>
                <option value="kg">kilograms</option>
                <option value="ml">milliliters</option>
                <option value="l">liters</option>
                <option value="garnish">garnish</option>
                <option value="to taste">to taste</option>
            </select>


            {/* <input className="addIngredientButton" type="submit" value="Add" /> */}
            <div className="cancelCreate cancelCreateIngredient">
            <input className="createText" id="createRecipeButton" type="submit" value="Add" />
            <input type="button" onClick={() => {handleClose1()}} value="Cancel" id="cancelRecipeButton" className="cancelText" />
            </div>
        </form>
    </div>
  )
}

export default IngredientForm