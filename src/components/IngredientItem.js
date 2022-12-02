import { useState, useRef, useEffect } from "react"
import UpdatedNumber from "./UpdatedNumber"
import DeleteIngredientButton from "./DeleteIngredientButton"
import { BsChevronUp } from "react-icons/bs"
import { BsChevronDown } from "react-icons/bs"
import SubRecipeCreateButton from "./SubRecipeCreateButton"
import SubRecipe from "./SubRecipe"

const IngredientItem = ({ selectModal, deleteIngredient, ingredient, familyRecipe, recipeIndex, selectedRecipe }) => {
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
        // onClick={handleClickOnChevron} 
        key={recipeIndex}
        className="ingredient">
        <span>{ingredient.name}</span>
        {!ingredientDropdown ?
            <BsChevronDown 
                onClick={handleClickOnChevron}
                className="ingredientChevronDown" 
            /> 
            :
            <BsChevronUp 
                onClick={handleClickOnChevron} 
                className="ingredientChevronUp" 
            />   
        }
        
        
        <div className="ingredientRight">
            <UpdatedNumber multiplier={(familyRecipe !== undefined) ? (familyRecipe.multiplier ? familyRecipe.multiplier : 1) : (selectedRecipe.multiplier !== undefined) ? (selectedRecipe.multiplier) : 1} ingredient={ingredient} selectedRecipe={selectedRecipe}/> 
            {/* {showChild && <DeleteIngredientButton deleteIngredient={deleteIngredient} recipeKey={selectedRecipe.key} ingredientKey={ingredient.key} familyKey={(familyRecipe !== undefined) ? familyRecipe.key : undefined} />} */}

        </div>
        

        {(ingredientDropdown) && (
            (ingredient.hasSubRecipe) ?
                <SubRecipe />
            :
                <SubRecipeCreateButton
                    selectModal={selectModal}
                    ingredient={ingredient} 
                    familyRecipe={familyRecipe} 
                    recipeIndex={recipeIndex} 
                    selectedRecipe={selectedRecipe} 
                />
            )
            // <div className="subRecipe">
            //     <div>Yeild: 50 orders</div>
            //     <div>Portion Size: 2 fl oz</div>
            //     <ul>
            //         <li>ingredient1</li>
            //         <li>ingredient2</li>
            //         <li>ingredient3</li>
            //     </ul>
                
            // </div>
        }
             
    </li>
  )
}

export default IngredientItem