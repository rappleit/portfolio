/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import styles from "../styles/projects/ProjectsPage.module.css"
import { FrameSVGNefrex } from '@arwes/react-frames';
import { FaGithub } from "react-icons/fa";
import ProjectsListMin from "../components/projects/ProjectsListMin";
import ProjectsList from "../components/projects/ProjectsList";
const ProjectsPage = () => {
    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <h2>Projects</h2>
                <Link to="/">
                    <button>{'<'} Back</button>
                </Link>

            </div>

            <Link to="https://github.com/rappleit" className={styles.bannerLink}>
                <div
                    className={styles.banner}

                    style={{
                        position: 'relative',
                        width: "85vw",
                    }}>
                    <FrameSVGNefrex
                        css={{
                            '[data-name=bg]': {
                                color: 'rgb(161, 37, 113, 0.2)'
                            },
                            '[data-name=line]': {
                                color: 'rgb(161, 37, 113)'
                            },

                        }}
                    />
                    <FaGithub />
                    <p>Check out my Github</p>
                </div>
            </Link>
            <div className={styles.mobileContent}>
                <ProjectsListMin/>
            </div>
            <div className={styles.nonMobileContent}>
                <ProjectsList/>
            </div>
        </div>
    );
}

export default ProjectsPage;