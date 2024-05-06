import styles from "../../styles/main/Projects.module.css"
import { CgWebsite } from "react-icons/cg";
import { FaMobileScreen } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { IoExtensionPuzzle } from "react-icons/io5";
import FeaturedProjects from "./FeaturedProjects";
import { useEffect, useState } from "react";
import archive from "../../assets/main/archive.png"
import TextTransition, { presets } from 'react-text-transition';
import { Link } from "react-router-dom";
const Projects = () => {


    const TEXTS = ['A medical report assistant', 'An upskilling roadmap generator', 'A social todo list app', 'A React Simon Says Game'];
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        3000, // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <h2>My Projects</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.statsContainer}>
                    <div className={styles.statsCard}>
                        <div className={styles.statsIcon}>
                            <CgWebsite />
                        </div>
                        <div className={styles.statsContent}>
                            <h2>03</h2>
                            <p>Static Websites</p>
                        </div>
                    </div>
                    <div className={styles.statsCard}>
                        <div className={styles.statsIcon}>
                            <FaLaptopCode />
                        </div>
                        <div className={styles.statsContent}>
                            <h2>03</h2>
                            <p>Web Applications</p>
                        </div>
                    </div>
                    <div className={styles.statsCard}>
                        <div className={styles.statsIcon}>
                            <FaMobileScreen />
                        </div>
                        <div className={styles.statsContent}>
                            <h2>02</h2>
                            <p>Mobile Apps</p>
                        </div>
                    </div>
                    <div className={styles.statsCard}>
                        <div className={styles.statsIcon}>
                            <IoExtensionPuzzle />
                        </div>
                        <div className={styles.statsContent}>
                            <h2>01</h2>
                            <p>Browser Extension</p>
                        </div>
                    </div>
                </div>
                <div className={styles.featuredContainer}>
                    <h2>Featured Projects</h2>
                    <FeaturedProjects />
                </div>
                <div className={styles.archiveContainer}>
                    <img src={archive} alt="" />
                    <div className={styles.archiveContent}>
                        <h2>View all my projects <Link to="https://github.com/rappleit" target="_blank" rel="noopener noreferrer" className={styles.archiveLink}>here</Link></h2>
                        <div className={styles.archivePlayer}>
                            <p>{'>'} </p>
                        <TextTransition  inline>{TEXTS[index % TEXTS.length]}</TextTransition>
                        </div>
                        <p className={styles.archiveNote}>Hi-fidelity mockups, hackathon prototypes, professional projects and more...</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Projects;