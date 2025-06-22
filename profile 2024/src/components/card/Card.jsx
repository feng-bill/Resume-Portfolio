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
    <section className="cardSection">
      <span></span>
      <div className="card">
        <div className="row">
          <div className="column left">
            <div>
              <span className="name">
                Bill Feng <br />
              </span>
              <span className="subTitle">
                Integrated GRC Enablement | <br />
                Aspiring Partner Engineer In Product | <br />
                San Francisco
              </span>
            </div>
            <div className="certifications">
              <span className="name">
                Certifications:
              </span> <br />
              <span className="subTitle">
                ServiceNow CIS Implementor, OneTrust Privacy Professional, Associate Project Manager
              </span>
            </div>


          </div>
          <div className="column right">
            <div>
              Bill has over four years of professional experience focused on enabling enterprise integrated risk program.
              He has extensive industry experience working with cross-functional teams to
              define product roadmap, translate technical design, demo proof-of-concept,
              implement solution, and program manage.
              <br />
              Bill vision for delivering quality products and solutions aims to balance complex
              regulatory requirements, business needs, technical capabilities and end-user adoptions.
              He is driven to help organizations to reliably achieve their strategic goals,
              address uncertainties, and act with integrities.
            </div>
            <br />
            <div className="contact">
              <a href="mailto:bill21223@gmail.com">{mail}</a>
              <a href="https://www.linkedin.com/in/billwfeng/">{linkedin}</a>
              <a className="tooltip" href={resume}>
                {pdf}
                <span class="tooltiptext">Resume</span>
              </a>
              <span className="subTitle">
                Built for people, guided by process, and enable by technology
              </span>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Card
