const RecipeForm = ({ inputs, handleChange, handleSubmit, handleClose1, toggleExtended, addRecipe }) => {

  return (
    <div>
        <p>New Recipe</p>
        <div className="formContainer recipeForm">
            <form onSubmit={handleSubmit}>
                <div className="inputBoxBackground">
                    <input
                        required
                        autoFocus
                        autoComplete="off"
                        type="text"
                        name="name"
                        id="recipeInputText"
                        placeholder="Recipe Name"
                        value={inputs.name || ""}
                        onChange={handleChange}
                    />
                </div>
  
                <div id="typeContainer">
                    <span>Type: </span>
                    <select value={inputs.type || "entree"} name="type" id="typeInput" onChange={handleChange}>
                        <option value="entree">Entree</option>
                        <option value="family meal">Family Meal</option>
                        <option value="salad">Salad</option>
                        <option value="side">Side</option> 
                    </select>
                </div>

                {inputs.type === "family meal" && 
                    <div className="familyMealComponents">
                        <span id="componentText">Components:</span>
                        <div>1:
                            <input
                                required
                                placeholder="Name"
                                className="recipeComponentInputText"
                                autoComplete="off"
                                onChange={handleChange}
                                type="text"
                                name="component1Name"
                                id=""
                            />
                            <select onChange={handleChange} value={inputs.amount1} name="amount1" className="selectContainer">
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                            </select>
                            
                        </div>

                        <div>2: 
                            <input
                                required
                                placeholder="Name"
                                className="recipeComponentInputText"
                                autoComplete="off"
                                onChange={handleChange}
                                type="text"
                                name="component2Name"
                                id=""
                            />
                            <select value={inputs.amount2} name="amount2" onChange={handleChange} className="selectContainer">
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                            </select>      
                        </div>

                        {!(inputs.amount1 === "2" || inputs.amount2 === "2") ?
                            <div>3: 
                                <input
                                    required
                                    placeholder="Name"
                                    className="recipeComponentInputText"
                                    autoComplete="off"
                                    onChange={handleChange}
                                    type="text"
                                    name="component3Name"
                                    id=""
                                />
                                <select onChange={handleChange} className="selectContainer">
                                    <option value={1}>1</option>
                                    <option value={0}>0</option>
                                </select>
                            </div>
                            : delete inputs.amount3}
                    </div>
                }

                <div className={(inputs.type === "family meal") ? "cancelCreate extendedCancelCreate" : "cancelCreate"}>
                    <input className="createText" id="createRecipeButton" type="submit" value="Create" /><input type="button" onClick={() => {handleClose1()}} value="Cancel" id="cancelRecipeButton" className="cancelText" />
                </div>

                

            </form>
        </div>
    </div>

  )
}

export default RecipeForm