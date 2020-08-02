import React from "react"

import pwc from "./pwc.png"
import resume from "./Bill_Feng_Resume.pdf"
import "./Card.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilePdf, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin} from "@fortawesome/free-brands-svg-icons"

const Card = () => {

  const mail = <FontAwesomeIcon icon={faEnvelope} size="lg" pull="left" className="icon" />
  const pdf = <FontAwesomeIcon icon={faFilePdf} size="lg" pull="left" className="icon" />
  const linkedin = <FontAwesomeIcon icon={faLinkedin} size="lg" pull="left" className="icon"/>

  return (
    <section className="landing">
      <span></span>
      <div className="card">
        <div className="row">
          <div className="column left">
            <span className="name">
              Bill Feng <br />
            </span>
            <span className="subTitle">
              GRC - Risk Management
              <br />{" "}
            </span>
            <span className="subTitle">IT Aduit Assurance</span>
            <div>
              <img src={pwc} className="image" alt="PwC Logo" />
            </div>
          </div>
          <div className="column right">
            <div>
              I work as a technology consultant helping businesses to achieve
              their strategic goals through&nbsp;
              <span>
                <a href="https://www.mckinsey.com/business-functions/organization/our-insights/unlocking-success-in-digital-transformations">
                  <u>Digital Transformation</u>
                </a>
              </span>
              &nbsp;in
              <i> The Fourth Industrial Revolution</i>.<br />
            </div>
            <div className="contact">
              <h5>
                <u>
                  <a href="https://hbswk.hbs.edu/item/the-business-case-for-becoming-a-jack-of-all-trades">
                    The world needs more generalist
                  </a>
                </u>
              </h5>

              <a href="mailto:bill21223@gmail.com">{mail}</a>
              <a href="https://www.linkedin.com/in/billfengw/">{linkedin}</a>
              <a className="tooltip" href={resume}>
                {pdf}
                <span class="tooltiptext">Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Card
