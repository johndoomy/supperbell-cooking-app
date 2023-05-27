import { useContext } from "react"
import { MealContext } from "../../utils/Contexts"
import { Meal } from "../../utils/Recipes"

const MealForm = ({ handleClose }) => {
  // Context for meal data passed down from App.js
  const meals = useContext(MealContext)

  // Where the newly created meal will be stored
  let newMeal = new Meal()
  newMeal.type = "entree"

  return (
    <div>
        <p>New Recipe</p>
        <div className="formContainer recipeForm">
            <form onSubmit={(e) => {e.preventDefault(); meals.push(newMeal); handleClose()}}>
                <div className="inputBoxBackground">
                    <input
                        required
                        autoFocus
                        autoComplete="off"
                        type="text"
                        name="name"
                        id="recipeInputText"
                        placeholder="Recipe Name"
                        onChange={(e) => {
                            let name = e.target.value.split(' ')
                            name = name.map(word => {return word.charAt(0).toUpperCase() + word.slice(1)})
                            newMeal.name = name.join(' ');
                        }}
                    />
                </div>
  
                <div id="typeContainer">
                    <span>Type: </span>
                    <select name="type" id="typeInput" onChange={(e) => {newMeal.type = e.target.value}}>
                        <option value="entree">Entree</option>
                        <option value="family meal">Family Meal</option>
                        <option value="salad">Salad</option>
                        <option value="side">Side</option> 
                    </select>
                </div>

                <div className="cancelCreate">
                    <input className="createText" id="createRecipeButton" type="submit" value="Create" />
                    <input type="button" onClick={() => {handleClose()}} value="Cancel" id="cancelRecipeButton" className="cancelText" />
                </div>
            </form>
        </div>
    </div>

  )
}

export default MealForm