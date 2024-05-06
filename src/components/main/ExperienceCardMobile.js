import styles from "../../styles/main/ExperienceCardMobile.module.css"

const ExperienceCardMobile = ({ 
    duration, 
    title, 
    team, 
    content,
    type, 
    expanded, 
    onToggle }) => {
    return ( 
        <div onClick={onToggle} className={`${styles.expcard_main} ${(type === 'professional') ? styles.expcard_professional : styles.expcard_extracurricular}`}>
            <p className={styles.expcard_date}>{duration}</p>
            <h3>{title}</h3>
            <p className={styles.expcard_team}>{team}</p>
            {expanded && (
                <ul className={styles.expcard_content}>
                    {content.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
     );
}
 
export default ExperienceCardMobile;