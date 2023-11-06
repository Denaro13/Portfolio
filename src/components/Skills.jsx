import SectionTitle from "./SectionTitle";
// import { skills } from "./data";
import SkillsCard from "./SkillsCard";
import { useFetchSkills } from "./FetchSkills";

const Skills = () => {
  const { loading, skills } = useFetchSkills();
  // console.log(loading, skills);
  if (loading) {
    return (
      <section className="py-12 align-element">
        <h2 className="capitalize">loading...</h2>
      </section>
    );
  }
  return (
    <section className="py-20 align-element" id="skills">
      <SectionTitle text="tech stack" />
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
