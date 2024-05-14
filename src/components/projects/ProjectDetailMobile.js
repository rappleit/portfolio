/** @jsxImportSource @emotion/react */

import styles from "../../styles/projects/ProjectDetailMobile.module.css"
import ProjectsCollection from "../../ProjectsCollection"
import { FrameSVGNefrex, FrameSVGUnderline, FrameSVGOctagon } from '@arwes/react-frames';
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
const ProjectDetailMobile = ({
    id,
    closeModal,
    modalOpen
}) => {
    return (
        <div className={styles.projModalMain}>
            <FrameSVGNefrex
                css={{
                    '[data-name=bg]': {
                        color: 'hsl(180, 75%, 10%)'
                    },
                    '[data-name=line]': {
                        color: 'hsl(180, 75%, 50%)'
                    }
                }}
            />
            <button onClick={closeModal} className={styles.projModalClose}>
                <IoClose />
            </button>
            <div className={styles.projModalContent}>

                <img alt="" src={ProjectsCollection[id].thumbnail} className={styles.projModalThumbnail} />
                <div className={styles.projModalHeader}>
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
                    <h3>{ProjectsCollection[id].name}</h3>
                </div>
                <p className={styles.projModalNote}>{ProjectsCollection[id].note}</p>
                <div className={styles.projModalTags}>
                    <p className={styles.projModalStack}><span>Built with:</span> {ProjectsCollection[id].stack.join(", ")}</p>
                    <p className={styles.projModalOrg}><span>Made at:</span> {ProjectsCollection[id].org}</p>
                </div>
                <div className={styles.projModalButtons}>
                    {(ProjectsCollection[id].demo != "") ? <ProjModalButton buttonText={"Try it out!"} link={ProjectsCollection[id].demo} /> : <></>}
                    {(ProjectsCollection[id].video != "") ? <ProjModalButton buttonText={"Watch Demo"} link={ProjectsCollection[id].video} /> : <></>}
                    {(ProjectsCollection[id].doc != "") ? <ProjModalButton buttonText={"View Writeup"} link={ProjectsCollection[id].doc} /> : <></>}
                    {(ProjectsCollection[id].design != "") ? <ProjModalButton buttonText={"View Mockups"} link={ProjectsCollection[id].design} /> : <></>}


                </div>

            </div>

        </div>
    );
}

export default ProjectDetailMobile;

const ProjModalButton = ({
    buttonText,
    link,
}) => {
    return (
        <Link to={link} target="_blank" rel="noopener">
            <button className={styles.projModalButton}>
                <FrameSVGOctagon
                    css={{
                        '[data-name=bg]': {
                            color: 'rgb(256,256,256, 0.2)'
                        },
                        '[data-name=line]': {
                            color: 'rgb(256,256,256)'
                        }
                    }}
                />
                {buttonText}
            </button>
        </Link>

    );
}

