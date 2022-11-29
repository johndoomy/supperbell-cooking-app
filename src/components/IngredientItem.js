import { useState, useRef, useEffect } from "react"
import UpdatedNumber from "./UpdatedNumber"
import DeleteIngredientButton from "./DeleteIngredientButton"

const IngredientItem = ({ deleteIngredient, ingredient, familyRecipe, recipeIndex, selectedRecipe }) => {
    const ingredientRef = useRef()

    useEffect(() => {
        const handler = event => {
            if(!ingredientRef.current.contains(event.target)) {
                setShowChild(false)
            } 
        }
        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    })

    const [showChild, setShowChild] = useState(false)

    const toggleChild = () => {
      setShowChild(!showChild)
    }

  return (
    <li
        ref={ingredientRef}
        onClick={() => toggleChild()}
        key={recipeIndex}
        className="ingredient">
        <span>{ingredient.name}</span>
        
        <div className="ingredientRight">
            <UpdatedNumber multiplier={(familyRecipe !== undefined) ? (familyRecipe.multiplier ? familyRecipe.multiplier : 1) : (selectedRecipe.multiplier !== undefined) ? (selectedRecipe.multiplier) : 1} ingredient={ingredient} selectedRecipe={selectedRecipe}/> 
            {showChild && <DeleteIngredientButton deleteIngredient={deleteIngredient} recipeKey={selectedRecipe.key} ingredientKey={ingredient.key} familyKey={(familyRecipe !== undefined) ? familyRecipe.key : undefined} />}
        </div>

        {showChild &&
            <div className="subRecipe">
                <ul>
                    <li>ingredient</li>
                </ul>
                
            </div>      
        }
             
    </li>
  )
}

export default IngredientItem