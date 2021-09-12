import React from "react"
import Card from "./Card"
import Fade from "react-reveal/Fade"

const Work = ({ projectData }) => {
  console.log(`projectData`, projectData)
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Work</h1>
          </Fade>

          <div className="grid">
            <Fade bottom cascade>
              {projectData.map(({ frontmatter: obj }, index) => (
                <Card
                  key={index}
                  heading={obj.title}
                  stack={obj.stack}
                  thumbnail={obj.thumbnail}
                  projectLink={obj.url}
                  btnText={obj.btnText}
                  github={obj.github}
                ></Card>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
