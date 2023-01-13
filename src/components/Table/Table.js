import React from "react"
//import { useStaticQuery, graphql } from "gatsby"
import * as styles from "./_Table.module.scss"

const Table = () => {

/*     const data = useStaticQuery(
        graphql`
        query {
          allAppetizersXlsxAppetizers {
            nodes {
              cs
              price
            }
          }
        }
        `
    ) */
console.log(data)
    return (
        <div className={styles.table}>
        </div>
    )

}

export default Table