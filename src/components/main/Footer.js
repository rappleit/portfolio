import { Animator, Dots, GridLines, MovingLines } from "@arwes/react";
import styles from "../../styles/main/Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.main}>
            <Animator duration={{ interval: 10 }}>
                <div style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    backgroundColor: '#080b13',
                    backgroundImage: 'radial-gradient(85% 85% at 50% 50%, hsla(185, 100%, 25%, 0.16) 0%, hsla(185, 100%, 25%, 0.08) 30%, hsla(185, 100%, 25%, 0) 60%)'
                }}>

                    <Dots
                        color='hsla(180, 100%, 75%, 0.05)'
                        distance={40}
                    />
                    <MovingLines
                        lineColor='hsla(180, 100%, 75%, 0.07)'
                        distance={40}
                        sets={20}
                    />
                    <GridLines
                        lineColor='hsla(180, 100%, 75%, 0.02)'
                        distance={40}
                    />
                </div>
            </Animator>
            <div className={styles.footerContent}>
                <p>Designed and developed in React.js with 3D assets made in Blender by yours truly.</p>
                <p className={styles.footerHighlight}>© 2024 Rachel Lim</p>
            </div>
        </div>
    );
}

export default Footer;