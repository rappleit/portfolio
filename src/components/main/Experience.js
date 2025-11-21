/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import styles from "../../styles/main/Experience.module.css"
import ExperienceCardMobile from "./ExperienceCardMobile";
import { Animator, FrameSVGKranox, GridLines, Text } from "@arwes/react";
import { IoChevronForward } from "react-icons/io5";

const Experience = () => {

    const [selectedCategory, setSelectedCategory] = useState("professional");
    const [expandedIndex, setExpandedIndex] = useState(0);


    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setExpandedIndex(0);
    }

    const handleCardToggle = (index) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const renderContentItem = (item) => {
        // Check if the item is a URL
        const urlPattern = /^https?:\/\/.+/i;
        if (urlPattern.test(item)) {
            return (
                <a href={item} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                    {item}
                </a>
            );
        }
        return item;
    };

    const extracurricularExperienceList = [
        {
            title: "Head of ROOTech",
            team: "SUTD ROOT (Student Government)",
            duration: "Dec 2022 - Feb 2024",
            subtitle: "ROOTech Director (Dec 2022 - Feb 2023)",
            content: [
                "Currently spearheading and managing 5 web and Telegram bot projects aimed at serving the student community",
                "Leading the organizing committee of the university’s annual hackathon, What The Hack 2024",
                "Designed and developed websites for the university's events such as SUTD's annual hackathon and night festival."
            ]
        },
        {
            title: "Full-stack Developer",
            team: "SUTD Google Developer Student Club (3DC)",
            duration: "Nov 2022 - Dec 2024",
            subtitle: null,
            content: [
                "Developed web and mobile projects that achieved recognition in several hackathons",
                "Hosted 2 workshops on technologies such as repository management with Git and Github, and Object Oriented Programming with Python"
            ]
        },
        {
            title: "Beta Ambassador",
            team: "Microsoft Student Learn Ambassadors",
            duration: "Oct 2022 – Sep 2024",
            subtitle: null,
            content: [
                "Developed a browser extension with Chrome Web APIs to promote healthy screen usage by motivating users to take breaks away from their devices through gamification and collectibles.",
                "Conducted an online workshop on web accessibility"

            ]
        },
    ]

    const certificationsList = [
        {
            title: "Future Leader in Tech 2025 Award",
            team: "Singapore Computer Society",
            duration: "2025",
            subtitle: null,
            content: [
                "Industry award conferred to individuals under 30 for outstanding contributions to tech and instilling a passion for tech amongst their peers",
                "https://www.scs.org.sg/future-leader-in-tech-2025-rachel-lim-long-citation"
            ]
        },
        {
            title: "Google UX Design Professional Certificate",
            team: "Google, Coursera",
            duration: "2024",
            subtitle: null,
            content: [
                "Certification awarded by Google for demonstrating competence in end-to-end UX design processes, including user research, ideation, wireframing, prototyping, and usability testing.",
                "https://www.credly.com/badges/85db9359-4091-4b28-a327-4ea7ebc9f8a0"
            ]
        },
        {
            title: "App Development with Swift Level 1",
            team: "Apple Inc.",
            duration: "2024",
            subtitle: null,
            content: [
                "Certification awarded by Apple for demonstrating foundational knowledge of Swift, Xcode, and core app development tools for building iOS applications",
                "https://www.credly.com/badges/2ba7dd3a-9128-4b44-84c0-722fc408813f"
            ]
        },
    ]

    const professionalExperienceList = [
        {
            title: "Frontend Engineer",
            team: "Metabob",
            duration: "Aug 2024 - Dec 2024",
            subtitle: "San Francisco, USA",
            content: [
                "Redesigned and developed a ReactJS-based SaaS platform for enterprise clients, with GitHub OAuth integration and core feature implementations"
            ]
        },
        {
            title: "Fullstack Developer Intern",
            team: "GIC Singapore",
            duration: "Aug 2024 - Dec 2024",
            subtitle: "Singapore",
            content: [
                "Delivered a cloud-native full-stack web application to automate NDF trade reviews by the Execution Control team",
                "Took charge of designing and developing a ReactJS and .NET application integrated with PostgreSQL database",
                "Contributed to deploying the solution to UAT by collaborating with cross-functional teams on CI/CD pipelines and Kubernetes infrastructure"
            ]
        },
        {
            title: "Freelance Coding Instructor",
            team: "Tinkertanker Pte. Ltd.",
            duration: "Aug 2022 - Aug 2024",
            subtitle: "Singapore",
            content: [
                "Instructed students across more than 17 primary and secondary schools in various computational skills, including app development in Swift, IOT with M5Go, drone programming, game development, and algorithms"
            ]
        },
        {
            title: "Education Technology Intern Developer",
            team: "Tinkertanker Pte. Ltd.",
            duration: "Jan 2022 - Jul 2022",
            subtitle: "Singapore",
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
                <button onClick={() => handleCategoryChange("professional")} className={(selectedCategory === "professional") ? styles.professionalSelected : ""}>Professional</button>
                <button onClick={() => handleCategoryChange("extracurricular")} className={(selectedCategory === "extracurricular") ? styles.extracurricularSelected : ""}>Extracurricular</button>
                <button onClick={() => handleCategoryChange("certifications")} className={(selectedCategory === "certifications") ? styles.certificationsSelected : ""}>Certifications</button>

            </div>
            <div className={`${styles.content_mobile} ${(selectedCategory === 'professional') ? styles.content_professional : (selectedCategory === 'extracurricular') ? styles.content_extracurricular : styles.content_certifications}`}>
                {(selectedCategory === "professional") ? professionalExperienceList.map((item, i) => (
                    <ExperienceCardMobile {...item}
                        type={selectedCategory}
                        expanded={expandedIndex === i}
                        onToggle={() => handleCardToggle(i)}
                        key={i} />
                )) : (selectedCategory === "extracurricular") ? extracurricularExperienceList.map((item, i) => (
                    <ExperienceCardMobile {...item}
                        type={selectedCategory}
                        expanded={expandedIndex === i}
                        onToggle={() => handleCardToggle(i)}
                        key={i} />
                )) : certificationsList.map((item, i) => (
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
                        <button onClick={() => handleCategoryChange("professional")} className={(selectedCategory === "professional") ? styles.professionalSelected : ""}>Professional</button>
                        <button onClick={() => handleCategoryChange("extracurricular")} className={(selectedCategory === "extracurricular") ? styles.extracurricularSelected : ""}>Extracurricular</button>
                        <button onClick={() => handleCategoryChange("certifications")} className={(selectedCategory === "certifications") ? styles.certificationsSelected : ""}>Certifications</button>
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
                                <div className={styles.experienceCardIconContainer}>
                                    <div className={styles.experienceCardIcon}>
                                        <IoChevronForward />
                                    </div>
                                </div>
                            </div>
                        )) : (selectedCategory === "extracurricular") ? extracurricularExperienceList.map((item, i) => (
                            <div
                                className={`${styles.experienceCard} ${styles.experienceCardExtracurricular} ${(expandedIndex === i) ? styles.selectedCard : ""}`}
                                key={i}
                                onClick={() => handleCardToggle(i)}>
                                <p className={styles.experienceCardDate}>{item.duration}</p>
                                <h3>{item.title}</h3>
                                <p className={styles.experienceCardTeam}>{item.team}</p>
                                <div className={styles.experienceCardIconContainer}>
                                    <div className={styles.experienceCardIcon}>
                                        <IoChevronForward />
                                    </div>
                                </div>
                            </div>
                        )) : certificationsList.map((item, i) => (
                            <div
                                className={`${styles.experienceCard} ${styles.experienceCardCertifications} ${(expandedIndex === i) ? styles.selectedCard : ""}`}
                                key={i}
                                onClick={() => handleCardToggle(i)}>
                                <p className={styles.experienceCardDate}>{item.duration}</p>
                                <h3>{item.title}</h3>
                                <p className={styles.experienceCardTeam}>{item.team}</p>
                                <div className={styles.experienceCardIconContainer}>
                                    <div className={styles.experienceCardIcon}>
                                        <IoChevronForward />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`${styles.contentContainer}`}>
                    <FrameSVGKranox
                        css={{
                            '[data-name=bg]': {
                                color: 'hsla(230, 39.10%, 18.00%, 0.78)'

                            },
                            '[data-name=line]': {
                                color: 'hsla(180, 74.90%, 50.00%, 0.40)'
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
                                                                {renderContentItem(item)}
                                                            </Text>
                                                        </li>
                                                    </Animator>

                                                ))}
                                            </ul>
                                        </Animator>

                                    </>
                                    : (selectedCategory === "extracurricular") ?
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
                                                            {renderContentItem(item)}
                                                        </Text>
                                                    </li>
                                                </Animator>
                                            ))}
                                        </ul>
                                    </>
                                    :
                                    <>
                                        <Animator combine manager='stagger'>
                                            <Animator>
                                                <Text as='h2'>
                                                    {certificationsList[expandedIndex].title}
                                                </Text>
                                            </Animator>
                                            <Animator>
                                                <Text as='p' className={styles.contentBodyTeam}>
                                                    {certificationsList[expandedIndex].team}
                                                </Text>
                                            </Animator>
                                            <Animator>
                                                <Text as='p' className={styles.contentBodyDuration}>
                                                    {certificationsList[expandedIndex].duration}
                                                </Text>
                                            </Animator>
                                            <Animator>
                                                <Text as='p' className={styles.contentBodySubtitle}>
                                                    {(certificationsList[expandedIndex].subtitle != null) ? certificationsList[expandedIndex].subtitle : ""}
                                                </Text>
                                            </Animator>
                                        </Animator>

                                        <ul className={styles.contentBodyDetails}>
                                            {certificationsList[expandedIndex].content.map((item, i) => (
                                                <Animator key={i}>
                                                    <li>
                                                        <Text as='p'>
                                                            {renderContentItem(item)}
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


