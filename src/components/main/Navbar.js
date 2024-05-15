import { useEffect, useState } from "react";
import styles from "../../styles/main/Navbar.module.css"
const Navbar = ({
    activeSection,
    setActiveSection,
    scrollToSection
}) => {
    const [showLabel, setShowLabel] = useState(null);
    const [scrollIndicatorClass, setScrollIndicatorClass] = useState("hide");
    useEffect(() => {
        if (activeSection) {
            setShowLabel(activeSection);
            const timer = setTimeout(() => {
                setShowLabel(null);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [activeSection]);
    useEffect(() => {
        if (activeSection === "Home") {
            setScrollIndicatorClass("show");
        } else {
            setScrollIndicatorClass("hide");
        }
    }, [activeSection]);
    return (
        <div className={styles.main}>
            <ul>
                {['Home', 'Profile', 'Projects', 'Experience', 'Explore'].map((section) => (
                    <li key={section}>
                        <button onClick={() => scrollToSection(section)}>
                            <span className={`${styles.navItem} ${(activeSection === section) ? styles.navSelected : ""}`}></span>
                            <span className={`${styles.navLabel} ${(showLabel === section) ? styles.showLabel : ""}`}>{section}</span></button>
                    </li>
                ))}
            </ul>
            <p className={`${styles.scrollIndicator} ${styles[scrollIndicatorClass]}`}>SCROLL DOWN</p>
        </div>
    );
}

export default Navbar;
