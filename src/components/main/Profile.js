/** @jsxImportSource @emotion/react */

import styles from "../../styles/main/Profile.module.css";
import picture from "../../assets/main/profile_pic.png";
import { MdOutlineWeb, MdDesignServices } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FrameSVGNefrex } from "@arwes/react-frames";
import { Animator, GridLines } from "@arwes/react";

const Profile = () => {
  return (
    <div className={styles.main}>
      <Animator duration={{ enter: 0.5, exit: 0.5 }}>
        <GridLines
          lineColor="hsla(180, 100%, 75%, 0.1)"
          style={{ zIndex: -30 }}
        />
      </Animator>
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
                "[data-name=bg]": {
                  color: "hsl(180, 75%, 10%)",
                },
                "[data-name=line]": {
                  color: "hsl(180, 75%, 50%)",
                },
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
                "[data-name=bg]": {
                  color: "hsl(180, 75%, 10%)",
                },
                "[data-name=line]": {
                  color: "hsl(180, 75%, 50%)",
                },
              }}
            />
            <div className={styles.subheader}>
              <h3>About</h3>
            </div>
            <div className={styles.aboutText}>
              <p>
                I'm Rachel, a 22-year-old Singaporean developer with 3 years of
                experience in designing and building web and mobile
                applications. I love creating an impact through meaningful,
                user-centric design across the digital products I build.
              </p>
              <p>
                I am currently a Computer Science and Design undergraduate and
                Technology Entrepreneur Scholar at the{" "}
                <a href="https://sutd.edu.sg/" target="_blank">
                  Singapore University of Technology and Design (SUTD)
                </a>
                .
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
