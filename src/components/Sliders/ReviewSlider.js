import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Review from "./ReviewItem/ReviewItem"
import * as styles from "./_Sliders.module.scss"


const ReviewSlider = () => {
    
    const query = useStaticQuery(graphql`
    query GetReviews {
        allFile(
          filter: {sourceInstanceName: {eq: "reviews"}}
          sort: {childMdx: {frontmatter: {date: DESC}}}
        ) {
          nodes {
            childMdx {
              frontmatter {
                date
                name
              }
              body
              id
            }
          }
        }
      }
  `)

  const[leftValue, setLeftValue] = useState(0)
  const reviews = query.allFile.nodes

  useEffect(() => {

    const moveLeft = setInterval(() => {
      if (leftValue >= 0 && leftValue < reviews.length - 1) {
        setLeftValue(leftValue => leftValue + 1)
      }
      if (leftValue >= reviews.length - 1) {
        setLeftValue(0)
      }      
    }, 5000)

    return () => {
      clearInterval(moveLeft)
    }
  }, [leftValue, reviews.length])

    return (
        <div className={styles.reviewSlider} style={{left: `${leftValue * -100}%`}}>
            {reviews.map(review => {
                return <Review key={review.childMdx.id} review={review} />
            })}
            
        </div>
    )
}

export default ReviewSlider