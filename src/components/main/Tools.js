import Popup from "reactjs-popup";
import styles from "../../styles/main/Tools.module.css"
import { FaHtml5, FaCss3, FaJs, FaPython, FaJava, FaReact, FaNodeJs, FaSwift, FaFigma } from "react-icons/fa";
import { TbBrandReactNative, TbBrandNextjs, TbBrandMongodb } from "react-icons/tb";
import { RiFlutterFill } from "react-icons/ri";

const Tools = () => {
    const skills = [
        {
            name: "HTML5",
            icon: <FaHtml5/>,
            color: "#E34F26"
        },
        {
            name: "CSS3",
            icon: <FaCss3/>,
            color: "#1572B6"
        },
        {
            name: "JavaScript",
            icon: <FaJs/>,
            color: "#F7DF1E"
        },
        {
            name: "Python",
            icon: <FaPython/>,
            color: "#3776AB"
        },
        {
            name: "Java",
            icon: <FaJava/>,
            color: "#de8e2f"
        },
        {
            name: "ReactJS",
            icon: <FaReact/>,
            color: "#61DAFB"
        },
        {
            name: "NextJS",
            icon: <TbBrandNextjs />,
            color: "#d5dee3"
        },
        {
            name: "NodeJS",
            icon: <FaNodeJs />,
            color: "#339933"
        },
        {
            name: "MongoDB",
            icon: <TbBrandMongodb />,
            color: "#339933"
        },
        {
            name: "React Native",
            icon: <TbBrandReactNative/>,
            color: "#d5dee3"
        },
        {
            name: "Swift",
            icon: <FaSwift/>,
            color: "#F05138"
        },
        {
            name: "Flutter",
            icon: <RiFlutterFill/>,
            color: "#02569B"
        },
        {
            name: "Figma",
            icon: <FaFigma/>,
            color: "#F24E1E"
        },

    ]
    

    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h3>Skills</h3>
                    <div className={styles.divider}></div>
                </div>
                <p className={styles.note}>Hover/tap on the icon for more details</p>
                <div className={styles.container}>
                    {skills.map((item, i) => (
                        <Popup trigger={open => (
                        <button className={styles.card}>
                            <div className={styles.icon} style={{color: item.color}}>
                                {item.icon}
                            </div>
                        </button>
                    )}
                        position="bottom center"
                        closeOnDocumentClick
                        on={['hover', 'focus']}
                        arrowStyle={{color: "#FA75C8", margin: 0}}
                        key={i}
                    >
                        <div className={styles.tooltip}>
                            <p>{item.name}</p>
                        </div>
                    </Popup>
                    ))}
                    
                   
                </div>
            </div>

        </div>
    );
}

export default Tools;

