import React from "react"
import * as styles from "./_ReviewItem.module.scss"

const ReviewItem = ({review}) => {

    return (
        <div className={styles.reviewItem}>
            <h4>{review.childMdx.frontmatter.name}</h4>
            <p>{review.childMdx.body}</p>
        </div>
    )
}

export default ReviewItem