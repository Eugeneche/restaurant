import * as React from "react"

import "./layout.css"
//import Footer from "./Footer/Footer"
//import MainMenu from "./MainMenu/MainMenu"

const LocaleContext = React.createContext()

const Layout = ({ children, pageContext: { locale } }) => {

  return (
    <LocaleContext.Provider value={ locale }>
      <div className="layout">
        {/* <MainMenu /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </LocaleContext.Provider>
  )
}

export { Layout, LocaleContext }
