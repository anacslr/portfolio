import "./ProjectWrapper.css"

import data from "../../data/infoProjets.json"
import ProjectItem from "../ProjectItem/ProjectItem";


export default function ProjectWrapper () {
    return (
         <ul>{data.map((d) => (
        <ProjectItem
            key={d.title}
            title={d.title}
            description={d.description}
            video={d.video}
            link={d.link}
            github={d.github}/>
    ))}
    </ul>
    )     
}