import projectData from "../data/project-data.json";
import { useEffect, useState } from "preact/hooks";

export default function ProjectPage({ id }) {
  const [project, setProject] = useState(null);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    const currentProject = projectData.find((p) => p.id === id);
    setProject(currentProject);
    setDataFetched(true);
  }, [id]);

  if (!dataFetched) {
    return <div>Loading...</div>;
  }

  return project ? <h1>{project.title}</h1> : <div>Project not found</div>;
}
