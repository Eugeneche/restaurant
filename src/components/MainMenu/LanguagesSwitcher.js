import React from "react"
import { Link } from "gatsby"
import * as styles from "./_MainMenu.module.scss"
import { LocaleContext } from "../layout"

const isBrowser = typeof window !== "undefined"

const LanguagesSwitcher = () => {

  const locale = React.useContext(LocaleContext)

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
