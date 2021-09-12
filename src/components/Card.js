import React from "react"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import { getImage } from "gatsby-plugin-image"

const Card = ({ heading, stack, thumbnail, projectLink, btnText, github }) => {
  const image = getImage(thumbnail)

  // Use like this:
  const bgImage = convertToBgImage(image)
  const projectUrls = projectLink.split(",")
  const repoUrls = github.split(",")

  return (
    <BackgroundImage
      className="card"
      Tag="div"
      {...bgImage}
      preserveStackingContext
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">
          <strong>Tech stack: </strong>
          {stack}
        </p>
        {projectUrls.map((url, index) => (
          <a
            href={url ? url : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            key={index}
          >
            {btnText ||
              (projectUrls.length > 1 ? `Live Demo ${index + 1}` : "Live Demo")}
          </a>
        ))}
        <div className="text link">
          Repo Path:
          {repoUrls.map((url, index) => (
            <>
              <a
                href={url ? url : "#"}
                target="_blank"
                className="text"
                rel="noopener noreferrer"
                key={index}
              >
                {" " + url}
              </a>
              {repoUrls.length > 1 && repoUrls.length - 1 > index && (
                <strong>|</strong>
              )}
            </>
          ))}
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Card
