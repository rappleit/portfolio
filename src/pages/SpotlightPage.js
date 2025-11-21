import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import styles from "../styles/projects/SpotlightPage.module.css";
import { FaArrowLeft } from "react-icons/fa";

const SpotlightPage = () => {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className={styles.spotlight_page}>
            <div className={styles.spotlight_nav}>
                <Link to="/" className={styles.spotlight_back}>
                    <FaArrowLeft /> Back to Home
                </Link>
            </div>
            
            <div className={styles.spotlight_container}>
                <div className={styles.spotlight_header}>
                    <h1 className={styles.spotlight_title}>Project Title</h1>
                    <p className={styles.spotlight_subtitle}>Placeholder subtitle or tagline</p>
                </div>

                <div className={styles.spotlight_content}>
                    <section className={styles.spotlight_section}>
                        <h2>Overview</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </section>

                    <section className={styles.spotlight_section}>
                        <h2>Challenge</h2>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                            culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </section>

                    <section className={styles.spotlight_section}>
                        <h2>Solution</h2>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                            architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </section>

                    <section className={styles.spotlight_section}>
                        <h2>Results</h2>
                        <p>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default SpotlightPage;

