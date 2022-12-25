import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./_Header.module.scss"
import b from "../../images/wood-background.jpg"

const Header = () => {

    return (
        <div className={styles.header}>
            <div>
                <StaticImage 
                    src="../../images/nostalgie_front.png" 
                    alt="restaurant Nostalgie front"
                    layout="constrained"
                    height={500} 
                />
            </div>


        </div>
    )
}

export default Header