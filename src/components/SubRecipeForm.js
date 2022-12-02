import { useState, useEffect } from "react"

const SubRecipeForm = () => {
    const [arrayLength, setArrayLength] = useState(1)
    const handleClick = () => {
        let newLength = arrayLength + 1
        setArrayLength(newLength)
        console.log(newLength)
    }
    let array = [...Array(arrayLength)].map((_, i) => i)
    console.log(array)
  return (
    <div className="formContainer subRecipeForm">
        <form action="">
            <p>Sub Recipe:</p>
            {array.map((item, index) => <input key={index} className="subRecipeIngredientInput" type="text" name="" id="" />)} 
            
            <input onClick={handleClick} type="button" value="Add" />
            
        </form>
    </div>
  )
}

export default SubRecipeForm