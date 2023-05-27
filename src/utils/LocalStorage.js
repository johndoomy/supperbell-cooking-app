// Function to store a new recipe into local storage
export function saveToLocal(newRecipes) {
    console.log("saving")
    localStorage.setItem("recipes", JSON.stringify(newRecipes))
    console.log(newRecipes)
}