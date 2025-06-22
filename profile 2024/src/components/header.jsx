// import React from "react"
import logo from "../assets/Bill.jpeg"
import "./header.css"

function Header() {
  // state = {
  //   navBackground: "transparent",
  //   padding: "2rem 2rem"
  // }

  // render() {
    return (
      
      <nav
        className="navbar"
        style={{ backgroundColor: "transparent",
                padding: "1em 2em" }}
      >
        <div>
          <a href="/">
            <img src={logo} className="logo" alt="Bill logo" />
          </a>
        </div>
      </nav>
   
    )
  // }
}

export default Header
