import React from "react"
import "./footer.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"

export default () => {
  const info = (
    <FontAwesomeIcon
      icon={faInfoCircle}
      style={{ verticalAlign: "middle", paddingRight: "10px" }}
    />
  )

  return (
    <div className="footer">
      <div className="aboutSection">
        ©Bill Feng 2020
        {/* <h2>
          {info}
          This site and me
        </h2>
        <div className="quote">
          I build this website out of my own enjoyment and to present a platform
          to share my experience, thoughts, personal growth. 
          <br></br>
          Hopefully, I can provide some value to you.
        </div>
      </div>
      <div className="line"></div> */}
      </div>
    </div>
  )
}
