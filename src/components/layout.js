/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

import "./layout.css"
import Footer from "./Footer/Footer"

const Layout = ({ children }) => {

  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
