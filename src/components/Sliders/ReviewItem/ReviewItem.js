import React from "react"
import { LocaleContext } from "../../layout"
import * as styles from "./_ReviewItem.module.scss"

const ReviewItem = ({review}) => {
    const locale = React.useContext(LocaleContext)

    console.log(review)

    return (
        <div className={styles.reviewItem}>
            <h4 className={styles.reviewName}>{review.childMdx.frontmatter.name}</h4>
            <p className={styles.reviewText}>{review.childMdx.frontmatter[locale]}</p>
        </div>
    )
}

export default ReviewItem