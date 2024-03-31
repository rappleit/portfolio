import styles from "../../styles/main/FeaturedProjects.module.css"
import routourist from "../../assets/featured_projects/routouristThumbnail.png"
import nf from "../../assets/featured_projects/nfThumbnail.png"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState } from "react";

const FeaturedProjects = () => {
   

    const [selected, setSelected] = useState("Routourist");
    const [selectedImg, setSelectedImg] = useState(routourist)
    const [selectedNotes, setSelectedNotes] = useState("Next.js | Firebase | Google Maps API")
    const [selectedDesc, setSelectedDesc] = useState("Routourist is a route builder web application that aims to promote sustainable tourism by providing users with information of their route's environmental impact, as well as recommending sustainable attractions to visit along their route. Selected for the Google Solutions Challenge 2023 Top Global 100.")
    const [selectedDemo, setSelectedDemo] = useState("https://www.youtube.com/watch?v=CohbHAdULBE")

    const selectProject = (project) => {
        switch (project) {
            case "routourist":
                setSelected("Routourist")
                setSelectedImg(routourist)
                setSelectedNotes("Next.js | Firebase | Google Maps API")
                setSelectedDesc("Routourist is a route builder web application that aims to promote sustainable tourism by providing users with information of their route's environmental impact, as well as recommending sustainable attractions to visit along their route. Selected for the Google Solutions Challenge 2023 Top Global 100.")
                setSelectedDemo("https://www.youtube.com/watch?v=CohbHAdULBE")
                break;
            case "nf":
                setSelected("Night Fiesta 2024 Website")
                setSelectedNotes("React.js")
                setSelectedImg(nf)
                setSelectedDesc("Publicity website for my university's Night Fiesta 2024 event with a character personality quiz and a leaderboard.")
                setSelectedDemo("https://nightfiesta.sutdroot.com/")
                break;
            default:
                setSelected("Routourist")
                setSelectedImg(routourist)
                setSelectedNotes("Next.js | Firebase | Google Maps API")
                setSelectedDesc("Routourist is a route builder web application that aims to promote sustainable tourism by providing users with information of their route's environmental impact, as well as recommending sustainable attractions to visit along their route. Selected for the Google Solutions Challenge 2023 Top Global 100.")
                setSelectedDemo("https://www.youtube.com/watch?v=CohbHAdULBE")

                break;

        }
    }

    return (
        <div className={styles.featured_main}>
            <div className={styles.featured_bg}>
                <img src={selectedImg} alt="" />
            </div>
            <div className={styles.featured_content}>
                <img src={selectedImg} alt="" className={styles.featured_thumbnail} />
                <h3 className={styles.featured_title}>{selected}</h3>
                <h4 className={styles.featured_notes}>{selectedNotes}</h4>
                <p className={styles.featured_desc}>{selectedDesc}</p>
                <a href={selectedDemo} target="_blank" rel="noreferrer"><button className={styles.featured_button}>Demo</button></a>
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
                        <button onClick={() => selectProject("nf")}><img src={nf} alt="" /></button>
                    </div>
                    <div className={styles.featured_card}>
                        <button onClick={() => selectProject("routourist")}><img src={routourist} alt="" /></button>
                    </div>

                </Carousel>

            </div>

        </div>
    );
}

export default FeaturedProjects;