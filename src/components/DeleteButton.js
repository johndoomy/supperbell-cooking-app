import { FaRegTrashAlt } from "react-icons/fa"

const DeleteButton = ({ recipeKey, deleteRecipe }) => {
  return (
    <span><FaRegTrashAlt onClick={() => deleteRecipe(recipeKey)}/></span>
  )
}

export default DeleteButton