import { useRef, useEffect } from "react"
import ReactDOM from "react-dom"

const Modal = ({ content, handleClose }) => {
  const modalRef = useRef()

  // Use effect to close modal if the user clicks outside of it
  useEffect(() => {
		const handler = event => {
		  if (!modalRef.current.contains(event.target)) {
			handleClose()
		  }
		}
		document.addEventListener("mousedown", handler)
	
		return () => {
		  document.removeEventListener("mousedown", handler)
		}
	})

	// Render to portal instead of root to modal to not be nested inside the component it is being called from
	// (See index.html)
	return ReactDOM.createPortal(
		<div className="modal">
			<div ref={modalRef} className="modal-content">
				<button onClick={handleClose}>x</button>
				{content}
			</div>
		</div>
		, document.getElementById("portal")
	)
}

export default Modal