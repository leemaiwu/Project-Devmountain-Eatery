import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to='/' style={{color: 'white', textDecoration: 'none'}}>
        <h2>Devmountain Eatery</h2>
      </Link>
      <nav>
        <div className="center-header-btn" >
          <Link to='/'>
            <button className="header-btn" >Home</button>
          </Link>
          <Link to='/recipe'>
            <button className="header-btn" >Add Recipe</button>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
