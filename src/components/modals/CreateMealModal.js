import Modal from "./Modal"
import CreateMealForm from "../forms/CreateMealForm"

const CreateMealModal = ({ handleClose }) => {
	return (
		<Modal content={
			<CreateMealForm handleClose={() => { handleClose(false) }} />
		} handleClose={() => { handleClose(false) }} />
	)
}

export default CreateMealModal