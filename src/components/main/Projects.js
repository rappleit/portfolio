import styles from "../../styles/main/Projects.module.css"
import { CgWebsite } from "react-icons/cg";
import { FaMobileScreen } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { IoExtensionPuzzle } from "react-icons/io5";
import FeaturedProjects from "./FeaturedProjects";

const Projects = () => {
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
                            <h2>01</h2>
                            <p>Mobile App</p>
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

            </div>
        </div>
    );
}

export default Projects;