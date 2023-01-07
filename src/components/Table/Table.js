
/* import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import remarkGfm from 'remark-gfm'
import * as styles from "./_Table.module.scss"

const Table = () => {

    const data = useStaticQuery(
        graphql`
          query {
            file(sourceInstanceName: {eq: "menu"}) {
                childMdx {
                  frontmatter {
                    order
                    type
                  }
                  body
                }
              }
          }
        `
    )
console.log(data)
    return (
        <div className={styles.table}>
        </div>
    )

}

export default Table */