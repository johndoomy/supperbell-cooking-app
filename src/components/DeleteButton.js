import { FaRegTrashAlt } from "react-icons/fa"

const DeleteButton = ({ item, deleteFunc }) => {
  return (
    <span><FaRegTrashAlt onClick={() => deleteFunc(item)}/></span>
  )
}

export default DeleteButton