import React from "react"

import Layout from "../components/layout"
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/About"
import Skills from "../components/skills"
import Footer from "../components/Footer"
import "../styles/main.scss"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <Header />
    <Work projectData={data.allMarkdownRemark.nodes} />
    <About />
    <Skills />
    <Footer />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { fields: frontmatter___order, order: ASC }) {
      nodes {
        frontmatter {
          slug
          stack
          title
          url
          github
          btnText
          thumbnail {
            childImageSharp {
              gatsbyImageData(
                width: 200
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`
