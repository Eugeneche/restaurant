import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./_MainMenu.module.scss"
import LanguagesSwitcher from "./LanguagesSwitcher"
import LocalizedLink from "../localizedLink"
import useTranslations from "../useTranslations"
import close from "../../images/close.svg"
import hamburgerMenu from "../../images/hamb_menu.svg"


const MainMenu = () => {

    const { home,
            menu,
            about,
            contacts
            } = useTranslations()

    const [isShow, setIsShow] = useState(false)

    const styleMainMenuMobileOn = {
        right: "0vw",
        left: "0vw",
        transition: "all .1s ease"
    }

    const styleMainMenuMobileOff = {
        right: "-100vw",
        left: "100vw",
        transition: "all .2s ease"
    }

    const styleMainMenuContainerOn = {
        position: "fixed",
        height: "100vh",
        right: "0",
        top: "0",
        bottom: "0",
        transition: "right .5s ease"
    }

    const styleMainMenuContainerOff = {
        right: "-300px",
        transition: "right .5s ease"
    }

    return (
        <>
            <nav className={styles.mainMenuFull}>
                <div className={styles.mainMenuContainer}>
                    <div className={styles.logo}>
                        <LocalizedLink to="/">
                            <StaticImage src="../../images/logo_rect.png" alt="restaurace logo" />
                        </LocalizedLink>
                    </div>
                    <div className={styles.pages}>
                        <LocalizedLink to="/o-nas">{about}</LocalizedLink>
                        <LocalizedLink to="/jidelni-listek">{menu}</LocalizedLink>
                        <LocalizedLink to="/kontakt">{contacts}</LocalizedLink>
                    </div>
                    <LanguagesSwitcher />
                </div>
            </nav>

            <img className={styles.hamburgerMenu} src={hamburgerMenu} alt="close icon" onClick={() => setIsShow(true)}></img>

            <nav className={styles.mainMenuMobile} style={isShow ? styleMainMenuMobileOn : styleMainMenuMobileOff}>
                <div className={styles.mainMenuContainer} style={isShow ? styleMainMenuContainerOn : styleMainMenuContainerOff}>
                    <img className={styles.close} src={close} alt="close icon" onClick={() => setIsShow(false)}></img>
                    <div className={styles.logo}>
                        <LocalizedLink to="/">
                            <StaticImage src="../../images/logo.png" alt="restaurace logo" />
                        </LocalizedLink>
                    </div>
                    <LanguagesSwitcher />
                    <div className={styles.pages}>
                        <LocalizedLink to="/">{home}</LocalizedLink>
                        <LocalizedLink to="/o-nas">{about}</LocalizedLink>
                        <LocalizedLink to="/jidelni-listek">{menu}</LocalizedLink>
                        <LocalizedLink to="/kontakt">{contacts}</LocalizedLink>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default MainMenu