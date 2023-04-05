import "../styling/Header.css"
import { BsList } from "react-icons/bs"

const Header = ({ toggleNav }) => {
  return (
    <header className="mainHeader">
      <BsList onClick={toggleNav} className="hamburgerButton toggleNav" />
      <span id="appTitle">SupperBell Cooking App</span>
    </header>
  )
}

export default Header