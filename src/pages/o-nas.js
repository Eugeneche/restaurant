import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


import Seo from "../components/seo"
import * as styles from "../style/_pages.module.scss"
import MainMenu from "../components/MainMenu/MainMenu"
import useTranslations from "../components/useTranslations"

const About = () => {

  const query = useStaticQuery(graphql`
    query GetGallery {
      allFile(filter: {sourceInstanceName: {eq: "gallery"}}) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)
  //console.log(query)

  const { about, about_text_3 } = useTranslations()
  
  return (
    <div className={styles.pagesWrapper}>
      <MainMenu />
      <div className={styles.gap}></div>
      <div className={styles.container}>
        <h1>{about}</h1>
        <p className={styles.aboutText}>
          {about_text_3}
        </p>
        <div className={styles.gallery}>
          {query.allFile.nodes.map((node, i) => {
            return <GatsbyImage 
              key={i}
              image={node.childImageSharp.gatsbyImageData}
              alt="restaurant"/>
          })}
        </div>
      </div>    
    </div>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="O nas" />

export default About

/* export const query = graphql`
query GetGallery {
  allFile(filter: {sourceInstanceName: {eq: "gallery"}}) {
    nodes {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
}
` */