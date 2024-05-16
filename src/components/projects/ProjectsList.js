/** @jsxImportSource @emotion/react */

import { FrameSVGCorners, FrameSVGKranox, FrameSVGOctagon, FrameSVGUnderline } from "@arwes/react";
import ProjectsCollection from "../../ProjectsCollection";
import styles from "../../styles/projects/ProjectsList.module.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import { TbFolderQuestion } from "react-icons/tb";
const ProjectsList = () => {
    const [selectedProjectID, setSelectedProjectID] = useState(null)

    return (
        <div className={styles.main}>
            <div className={styles.detailContainer}>
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
                {(selectedProjectID != null) ?
                    <div className={styles.detailWrapper}>
                        <div className={styles.detailHeader}>
                            <img alt="" className={styles.detailThumbnail} src={ProjectsCollection[selectedProjectID].thumbnail} />

                        </div>
                        <div className={styles.detailContent}>
                            <div className={styles.detailTitle}>
                                <FrameSVGUnderline
                                    css={{
                                        '[data-name=bg]': {
                                            color: 'hsl(180, 75%, 10%)'
                                        },
                                        '[data-name=line]': {
                                            color: 'rgb(256,256,256)'
                                        }
                                    }}
                                />
                                <h3>{ProjectsCollection[selectedProjectID].name}</h3>
                            </div>
                            <p>{ProjectsCollection[selectedProjectID].note}</p>
                            <div className={styles.detailTags}>
                                <p><span>Built with:</span> {ProjectsCollection[selectedProjectID].stack.join(", ")}</p>
                                <p><span>Made at:</span> {ProjectsCollection[selectedProjectID].org}</p>
                            </div>
                            <div className={styles.detailButtons}>
                                {(ProjectsCollection[selectedProjectID].demo != "") ? <DetailButton buttonText={"Try it out!"} link={ProjectsCollection[selectedProjectID].demo} /> : <></>}
                                {(ProjectsCollection[selectedProjectID].video != "") ? <DetailButton buttonText={"Watch Demo"} link={ProjectsCollection[selectedProjectID].video} /> : <></>}
                                {(ProjectsCollection[selectedProjectID].doc != "") ? <DetailButton buttonText={"View Writeup"} link={ProjectsCollection[selectedProjectID].doc} /> : <></>}
                                {(ProjectsCollection[selectedProjectID].design != "") ? <DetailButton buttonText={"View Mockups"} link={ProjectsCollection[selectedProjectID].design} /> : <></>}


                            </div>
                        </div>

                    </div> :
                    <div className={styles.detailMessage}>
                        <TbFolderQuestion className={styles.detailMessageIcon}/>
                        <h3>{'<'} Please select a project to see more details</h3>
                    </div>
                    }
            </div>
            <div className={styles.tableContainer}>
                <FrameSVGCorners
                    css={{
                        '[data-name=bg]': {
                            color: 'hsl(180, 75%, 6%)'
                        },
                        '[data-name=line]': {
                            color: 'hsl(180, 75%, 50%)'
                        }
                    }}
                />
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Stack</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ProjectsCollection.map((item, i) => (
                                <tr onClick={() => setSelectedProjectID(i)} key={i} className={(i === selectedProjectID) ? styles.selectedRow : ""}>
                                    <td>{item.year}</td>
                                    <td>{item.name}</td>
                                    <td>{item.type}</td>
                                    <td>{item.stack.join(", ")}</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

            </div>

        </div>
    );
}

export default ProjectsList;

const DetailButton = ({
    link,
    buttonText
}) => {
    return (
        <Link to={link} target="_blank" rel="noopener" className={styles.detailButtonLink}>
            <button className={styles.detailButton}>
                {buttonText}
            </button>
        </Link>
    );
}

