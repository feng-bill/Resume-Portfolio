import React from "react"

import pwc from "./pwc.png"
import resume from "./Bill_Feng_Resume.pdf"
import "./Card.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilePdf, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Card = () => {
  const mail = (
    <FontAwesomeIcon icon={faEnvelope} size="lg" pull="left" className="icon" />
  )
  const pdf = (
    <FontAwesomeIcon icon={faFilePdf} size="lg" pull="left" className="icon" />
  )
  const linkedin = (
    <FontAwesomeIcon icon={faLinkedin} size="lg" pull="left" className="icon" />
  )

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
              Enterprise GRC Enablement
              <br />{" "}
            </span>
            <span className="subTitle">San Francisco</span>
            <div>
              <a href="https://www.pwc.com/us/en/services/risk-assurance/digital-risk-solutions/integrated-digital-governance-risk-compliance.html">
                <img src={pwc} className="pwcLogo" alt="PwC Logo" />
              </a>
            </div>
          </div>
          <div className="column right">
            <div>
              I am a Governance Risk and Compliance consultant. I am driven to
              help organizations to reliably achieve their strategic goals,
              address uncertainties, and act with integrities.
            </div>
            <p>
              Enabling you through a system of{" "}
              <a
                className="link"
                href="https://cio-wiki.org/wiki/Leavitt%27s_Alignment_Model"
              >
                People, Process, and Technology
              </a>
              . Providing greater risk transparency and visibility for a
              better-governed organization.
            </p>
            <div className="contact">
              <h5>
                <u>
                  <a
                    className="link"
                    href="https://hbswk.hbs.edu/item/the-business-case-for-becoming-a-jack-of-all-trades"
                  >
                    Bringing the whole stacks to the table
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
