import ProjectPreview from "components/ProjectPreview";
import profile from "utils/profile.json";

interface ProjectsProps {}

const Projects = (props: ProjectsProps) => {
  const { projects } = profile;

  return (
    <div className="lg:w-1/2 w-3/4 max-w-5xl mx-auto pt-40">
      <h1>Look at some of the projects I&apos;ve worked on!</h1>
      <div className="mt-16">
        {projects.map((project, index) => (
          <ProjectPreview
            key={project.name}
            project={project}
            align={index % 2 == 0 ? "left" : "right"}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
