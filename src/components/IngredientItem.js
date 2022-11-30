import { useState, useRef, useEffect } from "react"
import UpdatedNumber from "./UpdatedNumber"
import DeleteIngredientButton from "./DeleteIngredientButton"
import { BsChevronLeft } from "react-icons/bs"
import { BsChevronDown } from "react-icons/bs"

const IngredientItem = ({ deleteIngredient, ingredient, familyRecipe, recipeIndex, selectedRecipe }) => {
    const ingredientRef = useRef()

    const [isHovering, setIsHovering] = useState(false)
    
    const handleMouseOver = () => {
        setIsHovering(true)
    }

    const handleMouseOut = () => {
        setIsHovering(false)
    }

    const [ingredientDropdown, setIngredientDropdown] = useState(false)

    const handleClickOnChevron = () => {
        setIngredientDropdown(!ingredientDropdown)
    }

    // useEffect(() => {
    //     const handler = event => {
    //         if(!ingredientRef.current.contains(event.target)) {
    //             setShowChild(false)
    //         } 
    //     }
    //     document.addEventListener("mousedown", handler)

    //     return () => {
    //         document.removeEventListener("mousedown", handler)
    //     }
    // })

  return (
    <li
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        ref={ingredientRef}
        // onClick={() => toggleChild()}
        key={recipeIndex}
        className="ingredient">
        <span>{ingredient.name}</span>
        {!ingredientDropdown ?
            <BsChevronLeft onClick={handleClickOnChevron} style={isHovering && { color: "black"}} className="ingredientChevronLeft" />
            :
            <BsChevronDown style={isHovering && { color: "black"}} className="ingredientChevronDown" onClick={handleClickOnChevron} />            
        }
        
        
        <div className="ingredientRight">
            <UpdatedNumber multiplier={(familyRecipe !== undefined) ? (familyRecipe.multiplier ? familyRecipe.multiplier : 1) : (selectedRecipe.multiplier !== undefined) ? (selectedRecipe.multiplier) : 1} ingredient={ingredient} selectedRecipe={selectedRecipe}/> 
            {/* {showChild && <DeleteIngredientButton deleteIngredient={deleteIngredient} recipeKey={selectedRecipe.key} ingredientKey={ingredient.key} familyKey={(familyRecipe !== undefined) ? familyRecipe.key : undefined} />} */}

        </div>
        

        {ingredientDropdown &&
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