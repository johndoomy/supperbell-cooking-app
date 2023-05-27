import "./Header.css"

import { BsList } from "react-icons/bs"

const Header = ({ toggleSidebar }) => {
  return (
    <header className="mainHeader">
      <BsList onClick={toggleSidebar} className="hamburgerButton toggleNav" />
      <span id="appTitle">SupperBell Cooking App</span>
    </header>
  )
}

export default Header