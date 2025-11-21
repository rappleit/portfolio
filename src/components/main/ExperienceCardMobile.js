import { IoChevronDown, IoChevronForward } from "react-icons/io5";
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
        <div onClick={onToggle} className={`${styles.expcard_main} ${(type === 'professional') ? styles.expcard_professional : (type === 'extracurricular') ? styles.expcard_extracurricular : styles.expcard_certifications}`}>
            <div style={{margin: "12px"}}>
                <p className={styles.expcard_date}>{duration}</p>
                <h3>{title}</h3>
                <p className={styles.expcard_team}>{team}</p>
                {expanded && (
                    <ul className={styles.expcard_content}>
                        {content.map((item, i) => {
                            const urlPattern = /^https?:\/\/.+/i;
                            const isUrl = urlPattern.test(item);
                            return (
                                <li key={i}>
                                    {isUrl ? (
                                        <a href={item} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                                            {item}
                                        </a>
                                    ) : (
                                        item
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>

            <div className={styles.experienceCardIconContainer}>
                <div className={styles.experienceCardIcon}>
                    <IoChevronDown />
                </div>
            </div>
        </div>
    );
}

export default ExperienceCardMobile;