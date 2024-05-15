/** @jsxImportSource @emotion/react */

import { Illuminator } from "@arwes/react";
import Banner from "../components/main/Banner";
import Experience from "../components/main/Experience";
import Profile from "../components/main/Profile";
import Projects from "../components/main/Projects";
import Tools from "../components/main/Tools";
import styles from "../styles/main/Main.module.css"
import Explore from "../components/main/Explore";
import Footer from "../components/main/Footer";
import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import Navbar from "../components/main/Navbar";

const Main = () => {
    const [activeSection, setActiveSection] = useState('');
    const { ref: homeSection, inView: inViewSectionHome } = useInView({
        threshold: 0.5,  // Adjust this value based on when you want to trigger the change
    });
    const { ref: profileSection, inView: inViewSectionProfile } = useInView({
        threshold: 0.5,
    });
    const { ref: projectsSection, inView: inViewSectionProjects } = useInView({
        threshold: 0.2,
    });
    const { ref: experienceSection, inView: inViewSectionExperience } = useInView({
        threshold: 0.5,
    });
    const { ref: exploreSection, inView: inViewSectionExplore } = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        if (inViewSectionHome) {
            setActiveSection('Home');
            console.log("Home")
        } else if (inViewSectionProfile) {
            setActiveSection('Profile');
            console.log("Profile")
        } else if (inViewSectionProjects) {
            setActiveSection('Projects');
            console.log("Projects")
        } else if (inViewSectionExperience) {
            setActiveSection('Experience');
            console.log("Experience")
        } else if (inViewSectionExplore) {
            setActiveSection('Explore');
            console.log("Explore")
        }
    }, [inViewSectionHome, inViewSectionProfile, inViewSectionProjects, inViewSectionExperience, inViewSectionExplore]);
    
    const scrollToSection = (section) => {
        setActiveSection(section);  
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className={styles.page}>
            <Navbar {...{activeSection, setActiveSection, scrollToSection}}/>
            <Illuminator
                color='hsl(180 50% 50% / 10%)'
                size={300}
                className={styles.illuminator}
            />
            <div id="Home" ref={homeSection}>
                <Banner />
            </div>
            <div id="Profile" ref={profileSection} >
                <Profile />
                <Tools />
            </div>
            <div id="Projects" ref={projectsSection} >
                <Projects />
            </div>
            <div id="Experience" ref={experienceSection} >
                <Experience />
            </div>
            <div id="Explore" ref={exploreSection} >
                <Explore />
            </div>

            <Footer />
        </div>
    );
}

export default Main;