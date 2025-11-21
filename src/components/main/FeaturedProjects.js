import styles from "../../styles/main/FeaturedProjects.module.css"
import routourist from "../../assets/featured_projects/routouristThumbnail.png"
import wth23 from "../../assets/featured_projects/wth23Thumbnail.png"
import tiktok23 from "../../assets/featured_projects/tiktok23Thumbnail.png"
import tiktok232 from "../../assets/featured_projects/tiktokshopthumbnail2.jpg"
import amazonalcove1 from "../../assets/featured_projects/amazonalcoveThumbnail1.png"
import amazonalcove2 from "../../assets/featured_projects/amazonalcoveThumbnail2.jpg"
import moomoolegends1 from "../../assets/featured_projects/moomoolegendsthumbnail1.png"
import moomoolegends2 from "../../assets/featured_projects/moomoolegendsthumbnail2.jpg"
import dbsbiz1 from "../../assets/featured_projects/dbsbizthumbnail1.png"
import dbsbiz2 from "../../assets/featured_projects/dbisbizthumbnail2.jpg"
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom"
import portential from "../../assets/projects/portentialThumbnail.png"
import echoclass from "../../assets/projects/echoclassThumbnail.png"


const FeaturedProjects = () => {


    const [selected, setSelected] = useState(0);

    const featuredProjectsList = {
        amazonalcove: {
            name: "Amazon Alcove",
            note: "Design at Berkeley x Amazon Music Spring 2025 Designathon 1st Place Winner",
            desc:
                `A shareable 3D fan-expression concept created for Amazon Music during a 7-hour design sprint. Paired with explorations that imagine new creator–listener interactions through digital collectibles.

            `,
            thumbnail: amazonalcove1,
            hoverThumbnail: amazonalcove2,
            link: "https://www.canva.com/design/DAG5S1ZC7sk/hOiqbCN2T-k1sIaM9DcKqg/view?utm_content=DAG5S1ZC7sk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h75931a7685",
            isExternal: true
        },
        dbsbiz: {
            name: "DBS Biz - The Ultimate Hawker Everyday App",
            note: "Coursework Collaboration with DBS Singapore",
            desc:
                `A 13-week design project tackling digital-payment fraud at hawker stalls through a system built on QR codes, refund flows, and earnings transparency. Paired with agile iterations and user-centered research to streamline payments and build trust between hawkers and customers.

            `,
            thumbnail: dbsbiz1,
            hoverThumbnail: dbsbiz2,
            link: "https://sites.google.com/view/byteballers/design-journey",
            isExternal: true
        },
        moomoolegends: {
            name: "MooMooLegends",
            note: "DSTA CODE_EXP Brain Hack 2024 First Place for the Best Human-Centric Design Award",
            desc:
                `A Multiplayer mobile game that reimagines carbon-footprint tracking as a playful competition between friends. With image-based meal analysis, weekly insights, and collectible cows, players develop sustainable eating habits while expanding their virtual farm..

            `,
            thumbnail: moomoolegends1,
            hoverThumbnail: moomoolegends2,
            link: "https://www.canva.com/design/DAGHEptpU5A/9WBjpMhTHlaozlJREVdukA/view?utm_content=DAGHEptpU5A&utm_campaign=designshare&utm_medium=link&utm_source=editor#1",
            isExternal: true
        },
        tiktok23: {
            name: "Tiktok Shop",
            note: "Tiktok Hackathon 2023 Top 12 Finalist",
            desc:
                `
            Our team's reimagination of the Tiktok Shop Tab, complete with community features and gamification.
            `,
            thumbnail: tiktok23,
            hoverThumbnail: tiktok232,
            link: "https://devpost.com/software/tiktok-shop",
            isExternal: true
        }
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
            </div>
            <div className={styles.featured_control}>
                <button onClick={() => handleBack()}><FaChevronLeft /></button>
                <p>{selected+1}/{Object.keys(featuredProjectsList).length}</p>
                <button onClick={() => handleNext()}><FaChevronRight /></button>
            </div>
            <div className={styles.featured_content}>
                <div className={styles.featured_imageContainer}>
                    <img 
                        className={styles.featured_image}
                        src={featuredProjectsList[Object.keys(featuredProjectsList)[selected]].thumbnail} 
                        alt="" 
                    />
                    {featuredProjectsList[Object.keys(featuredProjectsList)[selected]].hoverThumbnail && (
                        <img 
                            className={styles.featured_imageHover}
                            src={featuredProjectsList[Object.keys(featuredProjectsList)[selected]].hoverThumbnail} 
                            alt="" 
                        />
                    )}
                </div>
                <div className={styles.featured_text}>
                    <h3 className={styles.featured_title}>{featuredProjectsList[Object.keys(featuredProjectsList)[selected]].name}</h3>
                    <p className={styles.featured_note}>{featuredProjectsList[Object.keys(featuredProjectsList)[selected]].note}</p>

                    <p className={styles.featured_desc}>{featuredProjectsList[Object.keys(featuredProjectsList)[selected]].desc}</p>
                    <div className={styles.featured_buttonContainer}>
                        {featuredProjectsList[Object.keys(featuredProjectsList)[selected]].isExternal ? (
                            <Link 
                                className={styles.featured_link} 
                                to={featuredProjectsList[Object.keys(featuredProjectsList)[selected]].link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className={styles.featured_spotlightbutton}>View Project</button>
                            </Link>
                        ) : (
                            <Link 
                                className={styles.featured_link} 
                                to={featuredProjectsList[Object.keys(featuredProjectsList)[selected]].link}
                            >
                                <button className={styles.featured_spotlightbutton}>View Project</button>
                            </Link>
                        )}
                    </div>
                </div>

            </div>

        </div>
    );
}

export default FeaturedProjects;