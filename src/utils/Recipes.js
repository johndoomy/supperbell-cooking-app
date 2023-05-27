/*
Class defining what a meal object should look like, along with useful functions for editing the meal
A meal contains a list of components, which can be ingredients or recipes
Each component must have an associated amount/portion size
*/
export class Meal {
  constructor(name = "", components = {}, type = "entree", description = "", key = Date.valueOf(), amount = 1) {
    this.name = name
    this.key = key
    this.components = components
    this.type = type
    this.description = description
    this.amount = amount
  }

  // Adds a recipe or ingredient to this meal
  addComponent(componentObj) {
    this.components.push(componentObj)
    return this.components
  }

  // Removes a recipe or ingredient from this meal
  deleteComponent(componentKey) {
    this.components = this.components.filter(item => item.key === componentKey)
    return this.components
  }
}

/*
Class defining what a recipe object should look like, along with useful functions for editing the recipe
A recipe contains a list of ingredients, which can be sub-recipes
Each ingredient must have an associated amount
Recipes differ mainly from meals in that they have a yield size that can be affected by the batch multiplier, in turn updating the ingredient amounts
*/
export class Recipe {
  constructor(name, ingredients, amount, unit, directions, multiplier = 1, key = new Date().valueOf()) {
    this.name = name
    this.ingredients = ingredients
    this.amount = amount
    this.unit = unit
    this.directions = directions
    this.multiplier = multiplier
    this.key = key
  }

  // Adds an ingredient to this recipe
  addIngredient(ingredientObj) {
    this.ingredients.push(ingredientObj)
    return this.ingredients
  }

  // Deletes an ingredient from this recipe
  deleteIngredient(ingredientKey) {
    this.ingredients = this.ingredients.filter(item => item.key === ingredientKey)
    return this.ingredients
  }

  // Updates an ingredient in this recipe
  updateIngredient(ingredientKey, ingredientObj) {
    this.ingredients.forEach(ingredient => {
      if (ingredient.key === ingredientKey) { // Find the correct ingredient by key
        ingredient = ingredientObj // Switch out the old ingredient for the new one
      }
    })
    return this.ingredients
  }

  // Sets the batch multiplier and updates all ingredients and yield
  setBatch(multiplier) {
    let newIngredients = this.ingredients
    /*
    Multiply expected yield by the same proportion as the new multiplier to the old multiplier
    e.g. new = 2x, old = 4x -> 2:4 = 0.5, everything should be multiplied by 0.5 to get correct amount
    */
    let proportion = multiplier / this.multiplier
    this.amount *= proportion // Set the new yield
    newIngredients.forEach(ingredient => {
      ingredient.amount *= proportion // Set each ingredient to the new amount
      return ingredient
    })
    this.multiplier = multiplier // Finally, set the recipe multiplier to the new value
    return proportion // Return the proportion value (could be useful?)
  }
}