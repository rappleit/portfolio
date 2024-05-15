/** @jsxImportSource @emotion/react */

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import styles from "../../styles/main/Explore.module.css"
import { Suspense, useEffect, useRef } from "react";
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Model } from "./Model";
import { Animator, FrameSVGLines, FrameSVGNefrex, FrameSVGUnderline, GridLines } from "@arwes/react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoDocumentTextSharp } from "react-icons/io5";
const Explore = () => {
    const RotatingGroup = () => {
        const groupRef = useRef();

        useFrame(() => {
            if (groupRef.current) {
                groupRef.current.rotation.y += 0.001; // Adjust the rotation speed
            }
        });

        return (
            <group ref={groupRef}>
                <PerspectiveCamera
                    makeDefault={true}
                    far={100}
                    near={0.1}
                    fov={38}
                    position={[5.219, 4.035, 12.839]}
                    rotation={[-0.018, 0.39, 0.007]}

                />
            </group>
        );
    };

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <h2>Explore More</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.viewer}>
                    <Animator duration={{ enter: 0.5, exit: 0.5 }}>
                        <GridLines
                            lineColor='hsla(180, 100%, 75%, 0.1)'
                            style={{ zIndex: -30 }}
                        />
                    </Animator>
                    <Canvas >
                        <Suspense fallback={null}>
                            <RotatingGroup />
                            <Model />
                            <OrbitControls />
                            <Environment preset="sunset" />
                        </Suspense>

                    </Canvas>
                </div>
                <div className={styles.cardContainer}>
                    <Link className={styles.cardItemLink} to={"mailto:rachel.limre03@gmail.com"}>
                        <button className={styles.cardItem}>
                            <FrameSVGUnderline
                                css={{
                                    '[data-name=bg]': {
                                        color: 'hsl(180, 75%, 10%)'
                                    },
                                    '[data-name=line]': {
                                        color: 'rgb(256, 256, 256, 0.8)'
                                    }
                                }}
                            />
                            <FaEnvelope size={24} />
                            <div className={styles.cardItemText}>
                                <h2>Get In Touch</h2>
                                <p>rachel.limre03@gmail.com</p>
                            </div>
                        </button>
                    </Link>
                    <Link className={styles.cardItemLink} to={"https://www.linkedin.com/in/rachellimruien/"}>
                        <button className={styles.cardItem}>
                            <FrameSVGUnderline
                                css={{
                                    '[data-name=bg]': {
                                        color: 'hsl(180, 75%, 10%)'
                                    },
                                    '[data-name=line]': {
                                        color: 'rgb(256, 256, 256, 0.8)'
                                    }
                                }}
                            />
                            <FaLinkedin size={24} />
                            <div className={styles.cardItemText}>
                                <h2>Connect on Linkedin</h2>
                                <p>https://www.linkedin.com/in/rachellimruien/</p>
                            </div>
                        </button>
                    </Link>
                    <Link className={styles.cardItemLink} to={"./resume_may24.pdf"} target="_blank" type="application/pdf">
                        <button className={styles.cardItem}>
                            <FrameSVGUnderline
                                css={{
                                    '[data-name=bg]': {
                                        color: 'hsl(180, 75%, 10%)'
                                    },
                                    '[data-name=line]': {
                                        color: 'rgb(256, 256, 256, 0.8)'
                                    }
                                }}
                            />
                            <IoDocumentTextSharp size={24} />
                            <div className={styles.cardItemText}>
                                <h2>View my resume</h2>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default Explore;


