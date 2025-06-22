import React from "react"
import "./footer.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"

export default () => {
  // const info = (
  //   <FontAwesomeIcon
  //     icon={faInfoCircle}
  //     style={{ verticalAlign: "middle", paddingRight: "10px" }}
  //   />
  // )

  return (
    <div className="footer">
      <div className="aboutSection">
        ©Bill Feng 2025
      </div>
    </div>
  )
}
