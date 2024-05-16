import styles from "../../styles/main/FeaturedProjects.module.css"
import routourist from "../../assets/featured_projects/routouristThumbnail.png"
import wth23 from "../../assets/featured_projects/wth23Thumbnail.png"
import tiktok23 from "../../assets/featured_projects/tiktok23Thumbnail.png"
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom"
import portential from "../../assets/projects/portentialThumbnail.png"
import echoclass from "../../assets/projects/echoclassThumbnail.png"


const FeaturedProjects = () => {


    const [selected, setSelected] = useState(0);

    const featuredProjectsList = {
        routourist: {
            name: "Routourist",
            note: "Next.js | Firebase | Google Maps API",
            desc:
                `
            Routourist is a route builder web application that aims to promote sustainable tourism by providing users with information of their route's environmental impact, as well as recommending sustainable attractions to visit along their route. Selected for the Google Solutions Challenge 2023 Top Global 100.
            `,
            video: "https://www.youtube.com/watch?v=CohbHAdULBE",
            demo: null,
            thumbnail: routourist
        },
        tiktok23: {
            name: "Tiktok Shop",
            note: "Flutter App",
            desc:
                `
            [Tiktok Hackathon 2023 Top 12 Finalist] Our team's reimagination of the Tiktok Shop Tab, complete with community features and gamification.
            `,
            video: "https://youtu.be/xfWP2s8OpVU",
            demo: "https://github.com/rappleit/tiktok_shop",
            thumbnail: tiktok23
        },
        portential: {
            name: "Portential",
            note: "ReactJS, React Flow, Python",
            desc:
                `
                [PSA Codesprint 2023 Top 15 Finalist] An AI powered HR tool to recommend suitable online courses and tailor personalised learning paths for employees to upskill with ease based on employer feedback.
            `,
            video: "https://youtu.be/Xw7mnYUVE5g?t=208",
            demo: "https://github.com/rappleit/Portential",
            thumbnail: portential
        },
        echoclass: {
            name: "Echoclass",
            note: "Next.js, Figma",
            desc:
                `
                Learning management system for teachers to track student progress. Worked on frontend and revamped the UI design during my internship in Tinkertanker.
            `,
            video: null,
            demo: "https://www.echoclass.com/",
            thumbnail: echoclass

        },
        wth23: {
            name: "What The Hack Hackathon 2023 Website",
            note: "React.js",
            desc:
                `
            Publicity website for my university's flagship hackathon, What The Hack (2023).
            `,
            video: null,
            demo: "https://www.sutdwth.com/",
            thumbnail: wth23

        },
    }

    const handleNext = () => {
        let maxCount = Object.keys(featuredProjectsList).length;
        if (selected === maxCount - 1) {
            setSelected(0);
        } else {
            setSelected(selected+1);
        }
    }

    const handleBack = () => {
        let maxCount = Object.keys(featuredProjectsList).length;
        if (selected === 0) {
            setSelected(maxCount-1);
        } else {
            setSelected(selected-1);
        }
    }

    return (
        <div className={styles.featured_main}>
            <div className={styles.featured_bg}>
                <img src={featuredProjectsList[Object.keys(featuredProjectsList)[selected]].thumbnail} alt="" />
            </div>
            <div className={styles.featured_control}>
                <button onClick={() => handleBack()}><FaChevronLeft /></button>
                <p>{selected+1}/{Object.keys(featuredProjectsList).length}</p>
                <button onClick={() => handleNext()}><FaChevronRight /></button>
            </div>
            <div className={styles.featured_content}>
                <img src={featuredProjectsList[Object.keys(featuredProjectsList)[selected]].thumbnail} alt="" />
                <div className={styles.featured_text}>
                    <h3 className={styles.featured_title}>{featuredProjectsList[Object.keys(featuredProjectsList)[selected]].name}</h3>
                    <p className={styles.featured_note}>{featuredProjectsList[Object.keys(featuredProjectsList)[selected]].note}</p>

                    <p className={styles.featured_desc}>{featuredProjectsList[Object.keys(featuredProjectsList)[selected]].desc}</p>
                    <div className={styles.featured_buttonContainer}>
                        {(featuredProjectsList[Object.keys(featuredProjectsList)[selected]].demo) ? <Link className={styles.featured_link} to={featuredProjectsList[Object.keys(featuredProjectsList)[selected]].demo} target="_blank" rel="noopener noreferrer"><button className={styles.featured_demobutton} >Link</button></Link> : <></>}
                        {(featuredProjectsList[Object.keys(featuredProjectsList)[selected]].video) ? <Link className={styles.featured_link} to={featuredProjectsList[Object.keys(featuredProjectsList)[selected]].video} target="_blank" rel="noopener noreferrer"><button className={styles.featured_videobutton}>Watch Video</button></Link> : <></>}
                    </div>
                </div>

            </div>

        </div>
    );
}

export default FeaturedProjects;