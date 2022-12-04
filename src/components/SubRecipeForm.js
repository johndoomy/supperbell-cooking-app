import { useState } from "react"

const SubRecipeForm = ({ arrayLocation, updateRecipe }) => {
    const [inputs, setInputs] = useState({hasSubRecipe: true})

    const handleChange = event => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = event => {
        event.preventDefault()
        inputs.key = new Date().valueOf()
        inputs.ingredients = ingredientsArray
        inputs.subIndex = arrayLocation.subIngredientIndex
        updateRecipe(arrayLocation.recipeKey, inputs, arrayLocation.ingredientIndex)
    }

    const [arrayLength, setArrayLength] = useState(1)

    const handleClick = () => {
        let newLength = arrayLength + 1
        setArrayLength(newLength)
        
    }

    let array = [...Array(arrayLength)].map((_, i) => i)

    let ingredientsArray = array.map((item, index) => {
        let itemName = ""
        let itemAmount = ""
        let itemUnit = ""
        if (document.getElementById(`ingredientName${index}`) !== null) {itemName = document.getElementById(`ingredientName${index}`).value}
        if (document.getElementById(`ingredientAmount${index}`) !== null) {itemAmount = document.getElementById(`ingredientAmount${index}`).value}
        if (document.getElementById(`ingredientUnit${index}`) !== null) {itemUnit = document.getElementById(`ingredientUnit${index}`).value}
        item = {
            name: itemName,
            amount: itemAmount,
            unit: itemUnit
        }
        return item
    })
    
  return (
    <div className="formContainer subRecipeForm">
        <form onSubmit={handleSubmit}>
            <p>Sub Recipe Ingredients:</p>
            <div className="yieldContainer">
                <div>Yield:
                    <input
                        onChange={handleChange}
                        name="yieldNumber"
                        type="text"
                        placeholder="#"
                        autoComplete="off"
                        required
                        size={3}
                    />
                </div>
                <div>
                    Portion Size:
                    <input
                        onChange={handleChange}
                        name="portionNumber"
                        type="text"
                        placeholder="#"
                        autoComplete="off"
                        required
                        size={3}
                        value={inputs.portionNumber || ""}
                    />
                    <select value={inputs.portionUnit || "each"} onChange={handleChange} name="portionUnit">
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
                </div>
                

            </div>

            {array.map((item, index) => 
                <div key={"subrecipeInput" + index}>
                    <input 
                        key={index}
                        className="subRecipeIngredientInput" 
                        type="text"
                        name={`ingredientName${index}`}
                        id={`ingredientName${index}`}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                    <input
                        onChange={handleChange}
                        name={`ingredientAmount${index}`}
                        id={`ingredientAmount${index}`}
                        size={3}
                        type="tel"
                        placeholder="#"
                        autoComplete="off"
                    />
                    <select onChange={handleChange} name={`ingredientUnit${index}`} id={`ingredientUnit${index}`} >
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
                </div>
            )}

            <input onClick={handleClick} type="button" value="Add Ingredient" />

            <div>
                <p>Directions:</p>
                <textarea 
                    required
                    onChange={handleChange}
                    name="directions"
                    id="directions"
                    cols="46"
                    rows="10">
                </textarea>
            </div>
            
            <input type="submit" value="Create Sub Recipe" />
        </form>
    </div>
  )
}

export default SubRecipeForm