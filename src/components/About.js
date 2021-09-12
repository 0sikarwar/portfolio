import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Fade from "react-reveal/Fade"
import data from "../developerData"

const About = () => {
  const imageData = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/gyani.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 20)
        }
      }
    }
  `)
  console.log(`imageData`, imageData)
  const image = getImage(imageData.file)
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
            </p>
          </div>
          <div className="image-wrapper">
            <GatsbyImage
              image={image}
              alt={"testimage"}
              style={{ width: "50%" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
