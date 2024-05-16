import routourist from "./assets/featured_projects/routouristThumbnail.png"
import nf from "./assets/featured_projects/nfThumbnail.png"
import wth23 from "./assets/featured_projects/wth23Thumbnail.png"
import tiktok23 from "./assets/featured_projects/tiktok23Thumbnail.png"
import echoclass from "./assets/projects/echoclassThumbnail.png"
import simonsays from "./assets/projects/simonsaysThumbnail.png"
import crittersbreak from "./assets/projects/crittersbreakThumbnail.png"
import portenial from "./assets/projects/portentialThumbnail.png"
import portfolio from "./assets/projects/portfolioThumbnail.png"
import lailaitask from "./assets/projects/lailaitaskThumbnail.png"
import makanwell from "./assets/projects/makanwellThumbnail.png"
import medilingo from "./assets/projects/medilingoThumbnail.png"

const ProjectsCollection = [
    {
        name: "Portfolio Website",
        year: "2024",
        type: "Web",
        demo: "www.rappleit.com",
        github: "",
        doc: "",
        video: "",
        design: "",
        stack: [
            "ReactJS",
            "Blender"
        ],
        org: "Personal Project",
        note: "My personal website featuring the projects I have worked on. Graphics were made using Blender.",
        thumbnail: portfolio
    },
    {
        name: "LaiLaiTask App",
        year: "2024",
        type: "Mobile App",
        demo: "https://youtu.be/Xv9E1Mit_bk",
        github: "",
        doc: "",
        video: "https://youtu.be/3T8s9mJJ3Ok",
        design: "",
        stack: [
            "Android Studio",
            "Java",
            "Firebase",
            "ARCore",
            "REST APIs"
        ],
        org: "SUTD",
        note: "A social to-do list app where users can nudge their friends to remind them about their task.",
        thumbnail: lailaitask,
    },
    {
        name: "MakanWell",
        year: "2024",
        type: "Mobile App",
        demo: "",
        github: "https://github.com/rappleit/MakanWell",
        doc: "",
        video: "https://youtu.be/BkaMTeU8BO4",
        design: "",
        stack: [
            "React Native",
            "Firebase",
            "Google Maps API",
            "REST APIs"
        ],
        org: "Google Solutions Challenge 2024",
        note: "A food journal that suggests alternative ingredientsto your meals and recommends eateries based on your diet profile and goals.",
        thumbnail: makanwell,
    },
    {
        name: "Night Fiesta 2024 Website",
        year: "2024",
        type: "Web",
        demo: "https://nightfiesta.sutdroot.com/",
        github: "",
        doc: "",
        video: "",
        design: "",
        stack: [
            "ReactJS",
        ],
        org: "SUTD",
        note: "Publicity website for my university's Night Fiesta 2024 event with a character personality quiz and a leaderboard.",
        thumbnail: nf,
    },
    {
        name: "MediLingo",
        year: "2024",
        type: "Web",
        demo: "https://medi-lingo.vercel.app/",
        github: "https://github.com/rappleit/MediLingo",
        doc: "",
        video: "https://youtu.be/LBIPTbmAqEM",
        design: "",
        stack: [
            "ReactJS",
            "REST APIs"
        ],
        org: "NUS HealthHack Hackathon 2024",
        note: "An AI powered tool for patients to ask questions about their medical reports and for doctors to build easy-to-understand clinical notes.",
        thumbnail: medilingo,
    },
    {
        name: "Portential",
        year: "2023",
        type: "Web",
        demo: "",
        github: "https://github.com/rappleit/Portential",
        doc: "",
        video: "https://youtu.be/Xw7mnYUVE5g?t=208",
        design: "",
        stack: [
            "ReactJS",
            "React Flow",
            "Python"
        ],
        org: "PSA Code Sprint 2023",
        note: "[Top 15 Finalist] An AI powered HR tool to recommend suitable online courses and tailor personalised learning paths for employees to upskill with ease based on employer feedback.",
        thumbnail: portenial,
    },
    {
        name: "Tiktok Shop",
        year: "2023",
        type: "Mobile App",
        demo: "",
        github: "https://github.com/rappleit/tiktok_shop",
        doc: "",
        video: "https://youtu.be/xfWP2s8OpVU",
        design: "",
        stack: [
            "Flutter",
            "Firebase",
        ],
        org: "TikTok Hackathon Challenge 2023",
        note: "[Top 12 Finalist] A reimagination of the Tiktok Shop Tab, complete with community features and gamification.",
        thumbnail: tiktok23,
    },
    {
        name: "CrittersBreak",
        year: "2023",
        type: "Browser Extension",
        demo: "",
        github: "https://github.com/Mireille-T/CrittersBreak",
        doc: "",
        video: "https://youtu.be/7GR-X3beEcA",
        design: "",
        stack: [
            "HTML",
            "CSS",
            "Javascript"
        ],
        org: "Microsoft Ambassadors Project",
        note: "[Top 5] A browser add-on to incentivise breaks from screentime through the use of critter collectibles.",
        thumbnail: crittersbreak,
    },
    {
        name: "What The Hack 2023 Website",
        year: "2023",
        type: "Web",
        demo: "",
        github: "",
        doc: "",
        video: "https://www.sutdwth.com/",
        design: "",
        stack: [
            "ReactJS",
        ],
        org: "SUTD",
        note: "Publicity website for my university's flagship hackathon, What The Hack (2023).",
        thumbnail: wth23,
    },
    {
        name: "Routourist",
        year: "2023",
        type: "Web",
        demo: "",
        github: "https://github.com/rappleit/routourist",
        doc: "",
        video: "https://www.youtube.com/watch?v=CohbHAdULBE",
        design: "",
        stack: [
            "ReactJS",
            "Firebase",
            "Google Maps API"
        ],
        org: "Google Solutions Challenge 2023",
        note: "[Top Global 100] A route builder web application that aims to promote sustainable tourism by providing users with information of their route's environmental impact, as well as recommending sustainable attractions to visit along their route.",
        thumbnail: routourist,
    },
    {
        name: "Escape Room Simon Says",
        year: "2023",
        type: "Web",
        demo: "http://escape-room-simon-says.vercel.app/",
        github: "https://github.com/rappleit/escape-room-simon-says",
        doc: "",
        video: "",
        design: "",
        stack: [
            "ReactJS",
        ],
        org: "SUTD",
        note: "A game created for the The Heist, an escape room wvent in SUTD. The UI is inspired by eDEX-UI. Passcode for the game is thinktank23",
        thumbnail: simonsays,
    },
    {
        name: "EchoClass",
        year: "2022",
        type: "Web",
        demo: "https://www.echoclass.com/",
        github: "https://github.com/michaelchen-lab/LMS_Frontend",
        doc: "",
        video: "",
        design: "https://www.figma.com/file/AnQEncqYlHH2aXgF3jY1Ll/EchoClass?type=design&node-id=0%3A1&mode=design&t=Hxn4oilu4P0PFqz7-1",
        stack: [
            "NextJS",
            "Figma"
        ],
        org: "Tinkertanker",
        note: "Learning management system for teachers to track student progress. Worked on frontend and revamped the UI design.",
        thumbnail: echoclass,
    },
]

export default ProjectsCollection;