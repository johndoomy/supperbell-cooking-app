import { useState } from "react"

const SubRecipeForm = () => {
    const [inputs, setInputs] = useState({type: "subRecipe"})

    const handleChange = event => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
        console.log(inputs)
    }

    // const handleSubmit = event => {
    //     event.preventDefault()
    //     inputs.key = new Date().valueOf()
    // }

    const [arrayLength, setArrayLength] = useState(1)

    const handleClick = () => {
        let newLength = arrayLength + 1
        setArrayLength(newLength)
    }

    let array = [...Array(arrayLength)].map((_, i) => i)
    
  return (
    <div className="formContainer subRecipeForm">
        <form action="">
            <p>Sub Recipe:</p>
            {array.map((item, index) => 
                <div>
                    <input 
                        key={index}
                        className="subRecipeIngredientInput" 
                        type="text"
                        name={`ingredientName${index}`}
                        onChange={handleChange}
                    />
                </div>
            )}

            <input onClick={handleClick} type="button" value="Add" />

            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            
            
        </form>
    </div>
  )
}

export default SubRecipeForm