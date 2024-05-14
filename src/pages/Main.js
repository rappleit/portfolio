/** @jsxImportSource @emotion/react */

import { Illuminator } from "@arwes/react";
import Banner from "../components/main/Banner";
import Experience from "../components/main/Experience";
import Profile from "../components/main/Profile";
import Projects from "../components/main/Projects";
import Tools from "../components/main/Tools";
import styles from "../styles/main/Main.module.css"
import Explore from "../components/main/Explore";

const Main = () => {
    return (
        <div className={styles.page}>
            <Illuminator
                color='hsl(180 50% 50% / 10%)'
                size={300}
                className={styles.illuminator}
            />
            <Banner />
            <Profile />
            <Tools />
            <Projects />
            <Experience />
            <Explore />
        </div>
    );
}

export default Main;