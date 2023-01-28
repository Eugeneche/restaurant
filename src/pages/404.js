import * as React from "react"
import { Link } from "gatsby"
//import Layout from "../components/layout"
import Seo from "../components/seo"

import * as styles from "../style/_style.module.scss"

const NotFoundPage = ({pageContext}) => (

    <div className={styles.container}>
      <h1>404: Tato stránka neexistuje</h1>
      <Link to="/">Home</Link>
      <p>Je nám líto, ale nemůžeme najít stránku, kterou hledáte.</p>
    </div>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
