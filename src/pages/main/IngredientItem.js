import { useState, useRef } from "react"
import UpdatedNumber from "../../utils/UpdatedNumber"
import DeleteIngredientButton from "../../components/DeleteIngredientButton"
import { BsChevronUp } from "react-icons/bs"
import { BsChevronDown } from "react-icons/bs"
import SubRecipeCreateButton from "../../components/SubRecipeCreateButton"
import SubRecipe from "../../components/SubRecipe"

const IngredientItem = ({ familyKey, index, arrayLocationSettings, selectModal, deleteIngredient, ingredient, familyRecipe, recipeIndex, selectedRecipe }) => {
    const ingredientRef = useRef()

    const [ingredientDropdown, setIngredientDropdown] = useState(false)

    const handleClickOnChevron = () => {
        setIngredientDropdown(!ingredientDropdown)
    }

    return (
        <li
            ref={ingredientRef}
            key={recipeIndex}
            className="ingredient"
        >
            <>
                <div className="ingredientInfoLine">
                    <UpdatedNumber
                        multiplier={(familyRecipe !== undefined) ? (familyRecipe.multiplier ? familyRecipe.multiplier : 1) : (selectedRecipe.multiplier !== undefined) ? (selectedRecipe.multiplier) : 1}
                        ingredient={ingredient}
                        selectedRecipe={selectedRecipe}
                    />
                    <span className="ingredientRight">
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
                        
                    </span>
                    
                </div>

                {(ingredientDropdown) && (
                    (ingredient.hasSubRecipe) ?
                        <SubRecipe
                            ingredient={ingredient}
                            familyRecipe={familyRecipe}
                            recipeIndex={recipeIndex}
                            selectedRecipe={selectedRecipe}
                        />
                        :
                        <div className="buttonContainer">
                            <SubRecipeCreateButton
                                familyKey={familyKey}
                                index={index}
                                arrayLocationSettings={arrayLocationSettings}
                                selectModal={selectModal}
                                ingredient={ingredient}
                                familyRecipe={familyRecipe}
                                recipeIndex={recipeIndex}
                                selectedRecipe={selectedRecipe}
                            />
                            <DeleteIngredientButton
                                deleteIngredient={deleteIngredient}
                                recipeKey={selectedRecipe.key}
                                ingredientKey={ingredient.key}
                                familyKey={(familyRecipe !== undefined) ? familyRecipe.key : undefined}
                            />
                        </div>
                )
                }</>

        </li>
    )
}

export default IngredientItem