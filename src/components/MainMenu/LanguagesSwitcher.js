import React, { useState } from "react"
import { Link } from "gatsby"
import * as styles from "./_MainMenu.module.scss"
import { LocaleContext } from "../layout"
import LocalizedLink from "../localizedLink"
//import useTranslations from "./useTranslations"

const isBrowser = typeof window !== "undefined"

const LanguagesSwitcher = () => {

  const locale = React.useContext(LocaleContext)
  //console.log(window.location.pathname)
  console.log(locale)

/*   let path = ''
  if (window.location.pathname.match(`/${locale}/`)) {
    path = window.location.pathname.slice(3)
  } else path = window.location.pathname */

  if (!isBrowser) {
    return
  }

  const path = () => {
    if (window.location.pathname.match(`/${locale}/`)) {
      return window.location.pathname.slice(3)
    } else { 
      return window.location.pathname
    }
  }
  console.log(path())
  return (
    <nav className={styles.languagesSwitcher}>
      <Link to={`${path()}`} hrefLang="cs">
        Čeština
      </Link>
      {` `}|{` `}
      <Link to={`/en${path()}`} hrefLang="en">
        English
      </Link>
      {` `}|{` `}
      <Link to={`/ru${path()}`} hrefLang="ru">
        Русский
      </Link>
    </nav>
  )
}

export default LanguagesSwitcher
