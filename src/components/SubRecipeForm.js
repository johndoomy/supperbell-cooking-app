import { useState } from "react"

const SubRecipeForm = () => {
    const [inputs, setInputs] = useState({type: "subRecipe"})

    const handleChange = event => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = event => {
        event.preventDefault()
        inputs.key = new Date().valueOf()
        console.log(inputs)
    }

    const [arrayLength, setArrayLength] = useState(1)

    const handleClick = () => {
        let newLength = arrayLength + 1
        setArrayLength(newLength)
        
    }

    let array = [...Array(arrayLength)].map((_, i) => i)
    
  return (
    <div className="formContainer subRecipeForm">
        <form onSubmit={handleSubmit}>
            <p>Sub Recipe Ingredients:</p>
            {array.map((item, index) => 
                <div>
                    <input 
                        key={index}
                        className="subRecipeIngredientInput" 
                        type="text"
                        name={`ingredientName${index}`}
                        onChange={handleChange}
                    />
                    <input onChange={handleChange} name={`ingredientAmount${index}`} size={3} type="tel" placeholder="#" />
                    <select onChange={handleChange} name={`ingredientUnit${index}`} id="">
                        <option value="each">each</option>
                        <option value="c">cups</option>
                        <option value="qt">quarts</option>
                        <option value="lb">pounds</option>
                        <option value="fl oz">fl oz (volume)</option>
                        <option value="oz">oz (weight)</option>
                        <option value="tbsp">tablespoons</option>
                    </select>
                </div>
            )}

            <input onClick={handleClick} type="button" value="Add Ingredient" />

            <div>
                <p>Directions:</p>
                <textarea name="" id="" cols="46" rows="10"></textarea>
            </div>
            
            <input type="submit" value="Create Sub Recipe" />
        </form>
    </div>
  )
}

export default SubRecipeForm