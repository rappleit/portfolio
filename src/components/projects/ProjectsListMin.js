/** @jsxImportSource @emotion/react */

import { FrameSVGCorners } from "@arwes/react";
import styles from "../../styles/projects/ProjectsListMin.module.css"
import ProjectsCollection from "../../ProjectsCollection"
import Popup from "reactjs-popup";
import ProjectDetailMobile from "./ProjectDetailMobile";
import { useState } from "react";


const ProjectsListMin = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const openModal = (id) => {
        setSelectedProjectId(id);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedProjectId(null);
    };
    return (
        <div className={styles.main}>
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
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Name</th>
                        <th>Stack</th>
                    </tr>
                </thead>
                <tbody>
                    {ProjectsCollection.map((item, i) => (
                        <tr key={i}>
                            <td>{item.year}</td>
                            <td onClick={() => openModal(i)}>{item.name}</td>
                            
                            <td>{item.stack.join(", ")}</td>
                        </tr>
                    ))}

                
                </tbody>

            </table>
            {selectedProjectId !== null && (
                <Popup
                    open={modalOpen}
                    modal
                    closeOnDocumentClick={false}
                    onClose={closeModal}
                    overlayStyle={{ backgroundColor: "#080b13c1" }}
                >
                    <ProjectDetailMobile id={selectedProjectId} closeModal={closeModal} />
                </Popup>
            )}
        </div>
    );
}

export default ProjectsListMin;