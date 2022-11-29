import { useRef, useEffect } from "react"
import { BsThreeDotsVertical } from "react-icons/bs"

const TitleRight = ({ selectModal, recipeKey, deleteRecipe }) => {
  const dropdownRef = useRef()

  useEffect(() => {
    const handler = event => {
      if (!dropdownRef.current.contains(event.target)) {
        document.getElementById("titleKebabDropDown").classList.remove("show")
        document.getElementById("titleKebab").classList.remove("showingDropdown")
      }
    }
    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  const toggleDropdown = () => {
    document.getElementById("titleKebabDropDown").classList.toggle("show")
    document.getElementById("titleKebab").classList.toggle("showingDropdown")
  }

  return (
    <div ref={dropdownRef} id="titleRight">
        <BsThreeDotsVertical className="kebab" onClick={() => toggleDropdown()} id="titleKebab" />
        <div  id="titleKebabDropDown"  className="dropdownContent">
            <div onClick={() => {toggleDropdown(); selectModal("updateNumbers"); document.querySelector(".modal").style.display = "block"; (document.querySelector('#updateNumbersInput') !== null) && document.querySelector('#updateNumbersInput').focus()}} id="updateNumbers" className="dropdownItem">Update Numbers</div>
            <div onClick={() => {toggleDropdown(); deleteRecipe(recipeKey)}} id="deleteRecipeButton" className="dropdownItem"><span id="deleteRecipeText"> Delete Recipe</span></div>
        </div>
    </div>
  )
}

export default TitleRight