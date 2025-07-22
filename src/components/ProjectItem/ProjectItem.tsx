import './ProjectItem.css'

type ProjectItemProps = {
    title: string;
    description: string;
    video: string;
    link: string;
    github: string;
}


export default function ProjectItem({title, description, video, link,github}: ProjectItemProps) 
{
    return (
        <div className="project-item">
            <h2>{title}</h2>
            <video controls src={video} />
            <p>{description}</p>
            <a href={github} target="_blank"><img className="liengithub"src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png" alt="github" />Lien du code</a><br/>
            {link !=="" ?
            <a href={link} target="_blank"> Lien du site</a> : ""}
        </div>
    );
} 