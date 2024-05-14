/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import styles from "../../styles/main/Experience.module.css"
import ExperienceCardMobile from "./ExperienceCardMobile";
import { Animator, FrameSVGKranox, Text } from "@arwes/react";

const Experience = () => {

    const [selectedCategory, setSelectedCategory] = useState("professional");
    const [expandedIndex, setExpandedIndex] = useState(null);


    const handleCategoryChange = () => {
        if (selectedCategory === "professional") {
            setSelectedCategory("extracurricular");

        } else {
            setSelectedCategory("professional")
        }
        setExpandedIndex(null);
    }

    const handleCardToggle = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const extracurricularExperienceList = [
        {
            title: "Head of ROOTech",
            team: "SUTD ROOT (Student Government)",
            duration: "Dec 2022 - Present",
            subtitle: "ROOTech Director (Dec 2022 - Feb 2024)",
            content: [
                "Currently spearheading and managing 5 web and Telegram bot projects aimed at serving the student community",
                "Leading the organizing committee of the university’s annual hackathon, What The Hack 2024",
                "Designed and developed websites for the university's events such as SUTD's annual hackathon and night festival."
            ]
        },
        {
            title: "Full-stack Developer",
            team: "SUTD Google Developer Student Club (3DC)",
            duration: "Nov 2022 - Present",
            subtitle: null,
            content: [
                "Developed web and mobile projects that achieved recognition in several hackathons",
                "Hosted 2 workshops on technologies such as repository management with Git and Github, and Object Oriented Programming with Python"
            ]
        },
        {
            title: "Developer",
            team: "SUTD campusX Builders",
            duration: "Jun 2023 - Present",
            subtitle: null,
            content: [
                "Currently designing and developing a ReactJS-based forum application within the Microsoft Teams environment, utilizing OpenAI and Question Answering AI technologies to provide automated responses to student queries on computational thinking modules"
            ]
        },
        {
            title: "Beta Ambassador",
            team: "Microsoft Student Learn Ambassadors",
            duration: "Oct 2022 – Present",
            subtitle: null,
            content: [
                "Developed a browser extension with Chrome Web APIs to promote healthy screen usage by motivating users to take breaks away from their devices through gamification and collectibles.",
                "Conducted an online workshop on web accessibility"

            ]
        },
    ]

    const professionalExperienceList = [
        {
            title: "Freelance Coding Instructor",
            team: "Tinkertanker Pte. Ltd.",
            duration: "Aug 2022 - Present",
            subtitle: null,
            content: [
                "Instructed students across more than 17 primary and secondary schools in various computational skills, including app development in Swift, IOT with M5Go, drone programming, game development, and algorithms"
            ]
        },
        {
            title: "Education Technology Intern Developer",
            team: "Tinkertanker Pte. Ltd.",
            duration: "Jan 2022 - Jul 2022",
            subtitle: null,
            content: [
                "Redesigned and built a Next.js learning management system web application that serves as a user-friendly dashboard for instructors to assign and monitor student work",
                "Collaborated with Apple to design curriculum, develop web marketing material, and produce instructional videos for the Swift Explorers’ Singapore, a pioneering app design programme for students"
            ]
        },
    ]
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <h2>My Experience</h2>
            </div>
            <div className={styles.selector_mobile}>
                <button onClick={() => handleCategoryChange()} className={(selectedCategory === "professional") ? styles.professionalSelected : ""}>Professional</button>
                <button onClick={() => handleCategoryChange()} className={(selectedCategory === "extracurricular") ? styles.extracurricularSelected : ""}>Extracurricular</button>

            </div>
            <div className={`${styles.content_mobile} ${(selectedCategory === 'professional') ? styles.content_professional : styles.content_extracurricular}`}>
                {(selectedCategory === "professional") ? professionalExperienceList.map((item, i) => (
                    <ExperienceCardMobile {...item}
                        type={selectedCategory}
                        expanded={expandedIndex === i}
                        onToggle={() => handleCardToggle(i)}
                        key={i} />
                )) : extracurricularExperienceList.map((item, i) => (
                    <ExperienceCardMobile {...item}
                        type={selectedCategory}
                        expanded={expandedIndex === i}
                        onToggle={() => handleCardToggle(i)}
                        key={i} />
                ))}
            </div>
            <div className={styles.content}>
                <div className={`${styles.selectorMenu}`}>
                    <div className={styles.selectorButtons}>
                        <button onClick={() => handleCategoryChange()} className={(selectedCategory === "professional") ? styles.professionalSelected : ""}>Professional</button>
                        <button onClick={() => handleCategoryChange()} className={(selectedCategory === "extracurricular") ? styles.extracurricularSelected : ""}>Extracurricular</button>
                    </div>
                    <div className={styles.selectorList}>
                        {(selectedCategory === "professional") ? professionalExperienceList.map((item, i) => (
                            <div
                                className={`${styles.experienceCard} ${styles.experienceCardProfessional}  ${(expandedIndex === i) ? styles.selectedCard : ""}`}
                                key={i}
                                onClick={() => handleCardToggle(i)}>
                                <p className={styles.experienceCardDate}>{item.duration}</p>
                                <h3>{item.title}</h3>
                                <p className={styles.experienceCardTeam}>{item.team}</p>
                            </div>
                        )) : extracurricularExperienceList.map((item, i) => (
                            <div
                                className={`${styles.experienceCard} ${styles.experienceCardExtracurricular} ${(expandedIndex === i) ? styles.selectedCard : ""}`}
                                key={i}
                                onClick={() => handleCardToggle(i)}>
                                <p className={styles.experienceCardDate}>{item.duration}</p>
                                <h3>{item.title}</h3>
                                <p className={styles.experienceCardTeam}>{item.team}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`${styles.contentContainer}`}>
                    <FrameSVGKranox
                        css={{
                            '[data-name=bg]': {
                                color: 'hsl(180, 75%, 10%)'

                            },
                            '[data-name=line]': {
                                color: 'hsl(180, 75%, 50%)'
                            }
                        }}
                    />
                    <div className={styles.contentHeader}>
                        <h3>{'>'} Experience</h3>
                    </div>
                    <div className={styles.contentBody}>
                        {(expandedIndex != null) ?
                            <>
                                {(selectedCategory === "professional") ?
                                    <>
                                        <Animator combine manager='stagger'>
                                            <Animator>
                                                <Text as='h2'>
                                                    {professionalExperienceList[expandedIndex].title}
                                                </Text>
                                            </Animator>
                                            <Animator>
                                                <Text as='p' className={styles.contentBodyTeam}>
                                                    {professionalExperienceList[expandedIndex].team}
                                                </Text>
                                            </Animator>
                                            <Animator>
                                                <Text as='p' className={styles.contentBodyDuration}>
                                                    {professionalExperienceList[expandedIndex].duration}</Text>
                                            </Animator>
                                            <Animator>
                                                <Text as='p' className={styles.contentBodySubtitle}>
                                                    {(professionalExperienceList[expandedIndex].subtitle != null) ? professionalExperienceList[expandedIndex].subtitle : ""}                                        </Text>
                                            </Animator>
                                            <ul className={styles.contentBodyDetails}>
                                                {professionalExperienceList[expandedIndex].content.map((item, i) => (
                                                   <Animator key={i}>
                                                   <li>
                                                        <Text as='p'>
                                                            {item}
                                                        </Text>
                                                    </li>
                                                    </Animator>

                                                ))}
                                            </ul>
                                        </Animator>

                                    </>
                                    :
                                    <>
                                        <Animator combine manager='stagger'>
                                            <Animator>

                                                <Text as='h2'>
                                                    {extracurricularExperienceList[expandedIndex].title}
                                                </Text>
                                            </Animator>
                                            <Animator>
                                                <Text as='p' className={styles.contentBodyTeam}>
                                                    {extracurricularExperienceList[expandedIndex].team}
                                                </Text>
                                            </Animator>
                                            <Animator>
                                                <Text as='p' className={styles.contentBodyDuration}>
                                                    {extracurricularExperienceList[expandedIndex].duration}
                                                </Text>
                                            </Animator>
                                            <Animator>
                                                <Text as='p' className={styles.contentBodySubtitle}>
                                                    {(extracurricularExperienceList[expandedIndex].subtitle != null) ? extracurricularExperienceList[expandedIndex].subtitle : ""}
                                                </Text>
                                            </Animator>
                                        </Animator>

                                        <ul className={styles.contentBodyDetails}>
                                            {extracurricularExperienceList[expandedIndex].content.map((item, i) => (
                                               <Animator key={i}>
                                               <li>
                                                    <Text as='p'>
                                                        {item}
                                                    </Text>
                                                </li>
                                                </Animator>
                                            ))}
                                        </ul>
                                    </>
                                }
                            </>
                            :
                            <p>Please select an item</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;


