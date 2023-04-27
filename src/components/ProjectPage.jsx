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

  return (
    <section class="container space-xl">
      {project ? (
        <>
          <h1>{project.title}</h1>
          <img class="space-l" src={project.images.small} alt={project.title} />
          <div class="project-links space-s flex">
            <a href="/">View Live Site</a>
            <a href="/">View Code</a>
          </div>
          <p class="space-l">{project.description}</p>
          <ul class="flex space-l">
            {project.tech.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </>
      ) : (
        <div>Project not found</div>
      )}
    </section>
  );
}
