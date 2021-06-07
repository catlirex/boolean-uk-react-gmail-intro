import '../style/Header.css'

import HeaderLeftMenu from "./HeaderComponents/HeaderLeftMenu"
import Search from "./HeaderComponents/Search"

function Header(){
    return(
        <header className="header">
       <HeaderLeftMenu/>
        <Search/>
      </header>
    )
}

export default Header