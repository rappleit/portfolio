/** @jsxImportSource @emotion/react */

import styles from "../../styles/main/Profile.module.css"
import picture from "../../assets/main/profile_pic.jpg"
import { MdOutlineWeb, MdDesignServices } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FrameSVGNefrex } from '@arwes/react-frames';

const Profile = () => {
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <h2>Profile</h2>
            </div>
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <img src={picture} alt="" />
                </div>
                <div className={styles.content}>
                    <div className={styles.wrapper1}>
                        <FrameSVGNefrex
                            css={{
                                '[data-name=bg]': {
                                    color: 'hsl(180, 75%, 10%)'
                                },
                                '[data-name=line]': {
                                    color: 'hsl(180, 75%, 50%)'
                                }
                            }}
                        />
                        <div className={styles.subheader}>
                            <h3>What I Do</h3>
                        </div>
                        <div className={styles.list}>
                            <div className={styles.card}>
                                <div className={styles.icon}>
                                    <MdOutlineWeb />
                                </div>
                                <h4>Full-stack Web Development</h4>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.icon}>
                                    <IoMdPhonePortrait />
                                </div>
                                <h4>Mobile App Development</h4>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.icon}>
                                    <MdDesignServices />
                                </div>
                                <h4>UI/UX Design</h4>
                            </div>
                        </div>
                    </div>
                    <div className={styles.wrapper2}>
                    <FrameSVGNefrex
                            css={{
                                '[data-name=bg]': {
                                    color: 'hsl(180, 75%, 10%)'
                                },
                                '[data-name=line]': {
                                    color: 'hsl(180, 75%, 50%)'
                                }
                            }}
                        />
                        <div className={styles.subheader}>
                            <h3>About</h3>
                        </div>
                        <div className={styles.aboutText}>
                            <p>
                                I'm Rachel, a 21-year-old Singaporean avid developer with 2 years of experience
                                in designing and building full-stack web and mobile applications for a
                                diverse range of professional, academic, and personal projects.
                                I am deeply passionate in building software projects,
                                especially those that can create a positive impact to those around me!
                            </p>
                            <p>
                                I am currently a Computer Science and Design undergraduate and Technology Entrepreneur Scholar at
                                the <a href="https://sutd.edu.sg/" target="_blank">Singapore University of Technology and Design (SUTD)</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;