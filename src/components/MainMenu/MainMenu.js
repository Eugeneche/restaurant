import React from "react"
//import { Link } from "gatsby"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./_MainMenu.module.scss"
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher"

//import logo from "../../images/logo.png"

const MainMenu = () => {

    return (
        <>
            <div className={styles.menuContainer}>
                <div className={styles.logo}>
                    <Link to="/">
                        <StaticImage src="../../images/logo.png" alt="restaurace logo" />
                    </Link>
                </div>
                <div className={styles.pages}>
                    <Link to="/o-nas">O nás</Link>
                    <Link to="/jidelni-listek">Jídelní lístek</Link>
                    <Link to="/kontakt">Kontakt</Link>
                </div>
                <LanguageSwitcher />
            </div>
        </>
    )
}

export default MainMenu