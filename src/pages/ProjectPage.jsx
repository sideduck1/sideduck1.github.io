import { useParams } from "react-router-dom";
import ProjectHeader from "../components/projects/ProjectHeader";
import projectData from "../data/projectdata.json";

export default function ProjectPage() {
    const { projectId } = useParams();
    const project = projectData.projects.find(p => p.id === projectId);

    if (!project) {
        return <div className="container mx-auto px-4 py-12 text-center">Project niet gevonden</div>;
    }

    return (
        <div>
            <ProjectHeader project={project} />
        </div>   
    );   
}