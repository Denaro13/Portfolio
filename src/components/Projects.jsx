import { useFetchProjects } from "./FetchProjects";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
const Projects = () => {
  const { loading, projects } = useFetchProjects();
  if (loading) {
    return (
      <section className="py-12 align-element">
        <h2 className="capitalize">loading...</h2>
      </section>
    );
  }
  return (
    <section className="py-12 align-element " id="projects">
      <SectionTitle text="projects" />
      <div className="py-16 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
