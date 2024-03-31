import { useEffect, useState } from "react";
import styles from "../../styles/main/Banner.module.css"
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Descramble from 'react-scramble'

const Banner = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const updateMousePosition = ev => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, [])

    useEffect(() => {
        const bgElement = document.getElementById("bg");
        const deviationFactor = 0.015;
        const deviationX = mousePosition.x * deviationFactor;
        const deviationY = mousePosition.y * (deviationFactor / 2);
        bgElement.style.backgroundPosition = `calc(50% + ${deviationX}px) calc(50% + ${deviationY}px)`
    }, [mousePosition])

    return (
        <div className={styles.main}>
            <div className={styles.bg} id="bg"></div>
            <div className={styles.overlay}>
                <p className={styles.firstChild}>
                    <Descramble
                        autoStart
                        text="Developer"
                        steps={[
                            {
                                roll: 15,
                                action: '+',
                                type: 'all',
                            },
                            {
                                action: '-',
                                type: 'forward',
                            },
                        ]}
                    />
                </p>
                <p className={styles.secondChild}>
                <Descramble
                        autoStart
                        text="Designer"
                        steps={[
                            {
                                roll: 15,
                                action: '+',
                                type: 'all',
                            },
                            {
                                action: '-',
                                type: 'forward',
                            },
                        ]}
                    />
                </p>
                <p className={styles.thirdChild}>
                <Descramble
                        autoStart
                        text="Explorer"
                        steps={[
                            {
                                roll: 15,
                                action: '+',
                                type: 'all',
                            },
                            {
                                action: '-',
                                type: 'forward',
                            },
                        ]}
                    />
                </p>
                <p className={styles.fourthChild}>
                <Descramble
                        autoStart
                        text="Cat Lover"
                        steps={[
                            {
                                roll: 15,
                                action: '+',
                                type: 'all',
                            },
                            {
                                action: '-',
                                type: 'forward',
                            },
                        ]}
                    />
                </p>


            </div>
            <div className={styles.content}>
                <h1><Descramble
                        autoStart
                        text="Hi, I'm Rachel"
                        steps={[
                            {
                                roll: 10,
                                action: '+',
                                type: 'all',
                            },
                            {
                                action: '-',
                                type: 'forward',
                            },
                        ]}
                    /></h1>
                <div className={styles.container}>
                    <Link to="#">
                        <button className={styles.buttonLink}>
                            <FaLinkedin />
                        </button>
                    </Link>
                    <Link to="#">
                        <button className={styles.buttonLink}>
                            <FaGithub />
                        </button>
                    </Link>
                    <Link to="#">
                        <button className={styles.buttonLink}>
                            <FaEnvelope />
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Banner;