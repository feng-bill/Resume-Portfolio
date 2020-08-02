import React from "react"
import logo from "../images/headphone.jpeg"
import "./header.css"

class Header extends React.Component {
  state = {
    navBackground: "transparent",
    padding: "2rem 2rem"
  }

  // componentWillMount() {
  //   const padding = window.scrollY < 300 ? "2em 2em" : "0"
  //    this.setState({ navPadding: padding })
  // }

  // componentDidMount() {
  //   document.addEventListener("scroll", () => {
  //     const backgroundcolor =
  //       window.scrollY < 300 ? "transparent" : "transparent"
  //     const padding = window.scrollY < 300 ? "2em 2em " : "1em 2em 0em 2em"
  //     this.setState({ navBackground: backgroundcolor,
  //                     navPadding: padding })
  //   })
  // }

  render() {
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
  }
}

export default Header
