import styles from "../../styles/main/FeaturedProjects.module.css"
import routourist from "../../assets/featured_projects/routouristThumbnail.png"
import nf from "../../assets/featured_projects/nfThumbnail.png"
import wth23 from "../../assets/featured_projects/wth23Thumbnail.png"
import tiktok23 from "../../assets/featured_projects/tiktok23Thumbnail.png"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState } from "react";

const FeaturedProjects = () => {


    const [selected, setSelected] = useState("routourist");

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
        nf24: {
            name: "Night Fiesta 2024 Website",
            note: "React.js",
            desc:
                `
            Publicity website for my university's Night Fiesta 2024 event with a character personality quiz and a leaderboard.
            `,
            video: null,
            demo: "https://nightfiesta.sutdroot.com/",
            thumbnail: nf,
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
        tiktok23: {
            name: "Tiktok Shop",
            note: "Flutter",
            desc:
                `
            Our team's reimagination of the Tiktok Shop Tab, complete with community features and gamification. Selected for the Tiktok Hackathon 2023 Top 12 Finalists.
            `,
            video: "https://youtu.be/xfWP2s8OpVU",
            demo: "https://github.com/rappleit/tiktok_shop",
            thumbnail: tiktok23
        },
    }



    const selectProject = (project) => {
        switch (project) {
            case "routourist":
                setSelected("routourist")
                break;
            case "nf24":
                setSelected("nf24")
                break;
            case "wth23":
                setSelected("wth23")
                break;
            case "tiktok23":
                setSelected("tiktok23")
                break;
            default:
                setSelected("routourist")
                break;

        }
    }

    return (
        <div className={styles.featured_main}>
            <div className={styles.featured_bg}>
                <img src={featuredProjectsList[selected].thumbnail} alt="" />
            </div>
            <div className={styles.featured_content}>
                <img src={featuredProjectsList[selected].thumbnail} alt="" className={styles.featured_thumbnail} />
                <h3 className={styles.featured_title}>{featuredProjectsList[selected].name}</h3>
                <h4 className={styles.featured_notes}>{featuredProjectsList[selected].note}</h4>
                <p className={styles.featured_desc}>{featuredProjectsList[selected].desc}</p>
                <div className={styles.featured_button_container}>
                {(featuredProjectsList[selected].video != null) ? <a href={featuredProjectsList[selected].video} target="_blank" rel="noreferrer"><button className={styles.featured_button}>Watch Video</button></a> : <></>}            
                {(featuredProjectsList[selected].demo != null) ? <a href={featuredProjectsList[selected].demo} target="_blank" rel="noreferrer"><button className={styles.featured_button}>View</button></a> : <></>}            
                </div>
              
            </div>

            <div className={styles.featured_carousel}>
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    className={styles.featured_carouselComponent}
                    centerMode
                    containerClass="featured_carousel"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass="featured_card"
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={true}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 1,
                            partialVisibilityGutter: 10
                        },
                        mobile: {
                            breakpoint: {
                                max: 720,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 10
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 720
                            },
                            items: 3,
                            partialVisibilityGutter: 40
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={true}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >
                    <div className={styles.featured_card}>
                        <button onClick={() => selectProject("routourist")}><img src={routourist} alt="" /></button>
                    </div>
                    <div className={styles.featured_card}>
                        <button onClick={() => selectProject("nf24")}><img src={nf} alt="" /></button>
                    </div>
                    <div className={styles.featured_card}>
                        <button onClick={() => selectProject("wth23")}><img src={wth23} alt="" /></button>
                    </div>
                    <div className={styles.featured_card}>
                        <button onClick={() => selectProject("tiktok23")}><img src={tiktok23} alt="" /></button>
                    </div>

                </Carousel>

            </div>

        </div>
    );
}

export default FeaturedProjects;