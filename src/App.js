import { useState, useEffect } from "react"
import Header from "./components/Header"
import Content from "./components/Content"
import { Helmet } from "react-helmet"

function App() {

  class Recipe {
    constructor(name, key, ingredients, type, amount, unit, directions) {
      this.name = name
      this.key = key
      this.ingredients = ingredients
      this.type = type
      this.amount = amount
      this.unit = unit
      this.directions = directions
    }
  }

  // Get pre-existing recipes from local storage and load them to state
  const [recipes, setRecipes] = useState(localStorage.getItem("recipes") ? JSON.parse(localStorage.getItem("recipes")) : []) //this is local storage state

  // Function to store a new recipe into local storage
  const save = (newRecipes) => {
    console.log("saving")
    localStorage.setItem("recipes", JSON.stringify(newRecipes))
    console.log(newRecipes)
  }

  // const [recipes, setRecipes] = useState([ //eventually switch to API to get array from server/localstorage
  //   {
  //     name: "Caesar Salad",
  //     key: 1254878754512,
  //     ingredients: [{key: 111111111, name: "Romaine", amount: 8, unit: "fl oz"}, {key: 111111112121211, name: "Caesar Dressing", amount: 8, unit: "fl oz"}, {key: 111118787871111, name: "Croutons", amount: 8, unit: "fl oz"}, {key: 11111111999991, name: "Parmesan Cheese", amount: 8, unit: "fl oz"}],
  //     type: "salad",
  //     amount: 1,
  //     unit: "each",
  //     directions: "N/A"
  //   },
  //   {
  //     name: "Chicken Parm",
  //     key: 132654987956321,
  //     ingredients: [{key: 22222, name: "Chicken Parmesan", amount: 8, unit: "fl oz"}, {key: 22223, name: "Marinara", amount: 8, unit: "fl oz"}, {key: 2228, name: "Spaghetti", amount: 8, unit: "fl oz"}, {key: 2298898922, name: "Parmesan Cheese", amount: 8, unit: "fl oz"}, {key: 2287878787878722, name: "Parsley", amount: 8, unit: "fl oz"}],
  //     type: "entree",
  //     amount: 1,
  //     unit: "each",
  //     directions: "N/A"
  //   },
  //   {
  //     name: "Chicken Parm Family Meal",
  //     key: 6006,
  //     ingredients: [{
  //       name: "Chicken Parm",
  //       key: 8787845454,
  //       ingredients: [{key: 333333333, name: "Chicken Parmesan", amount: 8, unit: "fl oz"}, {key: 3333878733333, name: "Marinara", amount: 8, unit: "fl oz"}, {key: 3333333399993, name: "Spaghetti", amount: 8, unit: "fl oz"}, {key: 3333833333, name: "Parmesan Cheese", amount: 8, unit: "fl oz"}, {key: 333388888777413, name: "Parsley", amount: 8, unit: "fl oz"}],
  //       type: "entree",
  //       amount: 2,
  //       unit: "each",
  //       directions: "N/A"
  //     },
  //     {
  //       name: "Caesar Salad",
  //       key: 8888888,
  //       ingredients: [{key: 4444, name: "Romaine", amount: 8, unit: "fl oz"}, {key: 44424, name: "Caesar Dressing", amount: 8, unit: "fl oz"}, {key: 448844, name: "Croutons", amount: 8, unit: "fl oz"}, {key: 449898944, name: "Parmesan Cheese", amount: 8, unit: "fl oz"}],
  //       type: "salad",
  //       amount: 1,
  //       unit: "each",
  //       directions: "N/A"
  //     }],
  //     type: "family meal",
  //     amount: 1,
  //     unit: "each",
  //     directions: "N/A"
  //   }
  // ])

  // Currently selected key of state. Set to first recipe in state
  const [selectedKey, setSelectedKey] = useState(0)

  // Find the currently selected recipe
  const selectedRecipe = recipes.find(recipe => recipe.key === selectedKey)

  // Function to select a recipe by its key
  const selectRecipe = key => {
    setSelectedKey(key)
  }

  // Function to set recipe batch multiplier
  const setMultiplier = (recipeKey, newMultiplier) => {
    let newRecipes = recipes.map(recipe => {
      if (recipe.key === recipeKey) {
        recipe.multiplier = newMultiplier // Set recipe multiplier
      }
	  return recipe
    })
    setRecipes(newRecipes) // Save changed recipe to state
  }

  // Function to delete a recipe
  const deleteRecipe = key => {
    let newRecipes = recipes.filter(recipe => recipe.key !== key)
    setRecipes(newRecipes) // Save new recipe list to state
    setSelectedKey(0)
    save(newRecipes) // Save new recipe list to local storage
  }

  // Function to delete an ingredient in a recipe
  const deleteIngredient = (recipeKey, ingredientKey, familyKey) => {
    let newRecipes
    if (familyKey) { // ??????????????????
      newRecipes = recipes.map(recipe => { // New list of recipes
        if (familyKey === recipe.key) { // Find family recipe?
          recipe.ingredients.map(recipeIngredient => {
            if (recipeIngredient.key === recipeKey) { // If the recipe is an ingredient/sub-recipe of family?
              let newRecipeIngredients = recipeIngredient.ingredients.filter(ingredient => ingredient.key !== ingredientKey)
              recipeIngredient.ingredients = newRecipeIngredients
            }
			      return recipeIngredient
		      })
        }
		    return recipe
      })
    } else {
      newRecipes = recipes.map(recipe => { // New list of recipes
        if (recipeKey === recipe.key) { // Find recipe
          let newRecipeIngredients = recipe.ingredients.filter(ingredient => ingredient.key !== ingredientKey) // Remove ingredient from list
          recipe.ingredients = newRecipeIngredients
        }
        return recipe
      })
    }
    // Save updated recipe list to local storage and state
    setRecipes(newRecipes)
    save(newRecipes)
  }

  const updateRecipe = (recipeKey, ingredientObj, ingredientIndex) => {
    if (ingredientObj.hasSubRecipe) {
      console.log("adding sub-recipe")
      addSubRecipe(recipeKey, ingredientObj, ingredientIndex)
    } else if (ingredientIndex !== undefined) {
      let newRecipes = recipes.map(recipe => {
        if (recipe.key === recipeKey) {
          console.log(recipe)
          recipe.ingredients[ingredientIndex].ingredients.push(ingredientObj)
          return recipe
        } else {
          return recipe
        }
      })
      setRecipes(newRecipes)
      save(newRecipes)
    } else {
      let newRecipes = recipes.map(recipe => {
        if (recipe.key === recipeKey) {
          recipe.ingredients.push(ingredientObj)
          return recipe
        } else { return recipe }
      })
      setRecipes(newRecipes)
      save(newRecipes)
    }
  }

  const addSubRecipe = (recipeKey, ingredientObj, ingredientIndex) => {
    if (ingredientIndex !== undefined) {
      let newRecipes = recipes.map(recipe => {
        if (recipe.key === recipeKey) {
          recipe.ingredients[ingredientIndex].ingredients[ingredientObj.subIndex].ingredients = ingredientObj.ingredients
          recipe.ingredients[ingredientIndex].ingredients[ingredientObj.subIndex].hasSubRecipe = true
          recipe.ingredients[ingredientIndex].ingredients[ingredientObj.subIndex].directions = ingredientObj.directions
          recipe.ingredients[ingredientIndex].ingredients[ingredientObj.subIndex].yieldNumber = ingredientObj.yieldNumber
          recipe.ingredients[ingredientIndex].ingredients[ingredientObj.subIndex].portionNumber = ingredientObj.portionNumber
          recipe.ingredients[ingredientIndex].ingredients[ingredientObj.subIndex].portionUnit = ingredientObj.portionUnit
          console.log(recipe)
          return recipe
        } else {
          return recipe
        }
      })
      setRecipes(newRecipes)
      save(newRecipes)
    } else {
      let newRecipes = recipes.map(recipe => {
        if (recipe.key === recipeKey) {
          recipe.ingredients[ingredientObj.subIndex].ingredients = ingredientObj.ingredients
          recipe.ingredients[ingredientObj.subIndex].hasSubRecipe = true
          recipe.ingredients[ingredientObj.subIndex].directions = ingredientObj.directions
          recipe.ingredients[ingredientObj.subIndex].yieldNumber = ingredientObj.yieldNumber
          recipe.ingredients[ingredientObj.subIndex].portionNumber = ingredientObj.portionNumber
          recipe.ingredients[ingredientObj.subIndex].portionUnit = ingredientObj.portionUnit
          return recipe
        } else {
          return recipe
        }
      })
      setRecipes(newRecipes)
      save(newRecipes)
    }
  }

  const addRecipe = (recipeInputs) => {
    const recipeName = recipeInputs.name
    const key = new Date().valueOf()
    const recipeType = recipeInputs.type
    let ingredients = []
    if (recipeInputs.type === "family meal") {
      console.log("family meal")
      const compKey1 = key + 1
      const ingredient1 = { name: recipeInputs.component1Name, key: compKey1, type: "component", ingredients: [], amount: recipeInputs.amount1, unit: "each" }
      const compKey2 = key + 2
      const ingredient2 = { name: recipeInputs.component2Name, key: compKey2, type: "component", ingredients: [], amount: recipeInputs.amount2, unit: "each" }
      ingredients.push(ingredient1, ingredient2)
      if (recipeInputs.amount3 === 1) {
        const compKey3 = key + 3
        const ingredient3 = { name: recipeInputs.component3Name, key: compKey3, type: "component", ingredients: [], amount: recipeInputs.amount3, unit: "each" }
        ingredients.push(ingredient3)
      }
    }
    let recipeAmount = 1
    let recipeUnit = "each"
    let recipeDirections = ""
    let recipeObj = new Recipe(recipeName, key, ingredients, recipeType, recipeAmount, recipeUnit, recipeDirections)
    console.log(recipeObj)
    let newRecipes = [...recipes, recipeObj]
    setRecipes(newRecipes)
    selectRecipe(recipeObj.key)
    if (document.querySelectorAll(`.${recipeObj.name}`).classList) {
      document.querySelectorAll(`.${recipeObj.name}`)[0].classList.toggle("selectedRecipe")
    }
    save(newRecipes)
  }

  const [isExpanded, setIsExpanded] = useState((window.innerWidth <= 620) ? false : true)

  useEffect(() => {
    const resetMultipler = () => {
      let newRecipes = recipes.map(recipe => {
        if (recipe.multiplier) {
          recipe.multiplier = 1
          return recipe
        } else {
          return recipe
        }
      })
      setRecipes(newRecipes)
      save(newRecipes)
    }

    window.addEventListener("onload", resetMultipler)
    return () => {
      window.removeEventListener("onload", resetMultipler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleNav = () => {
    setIsExpanded(!isExpanded)
    Array.from(document.getElementsByClassName("ingredient")).forEach(element => { element.classList.toggle("darken") })
  }

  return (
    <div className="App">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Helmet>
      <Header toggleNav={toggleNav} />
      <Content isExpanded={isExpanded} deleteIngredient={deleteIngredient} setMultiplier={setMultiplier} updateRecipe={updateRecipe} addRecipe={addRecipe} deleteRecipe={deleteRecipe} selectRecipe={selectRecipe} selectedRecipe={selectedRecipe} toggleNav={toggleNav} recipes={recipes} />
    </div>
  )
}

export default App;
