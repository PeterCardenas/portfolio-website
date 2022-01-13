import ExperienceCard from "components/ExperienceCard";
import profile from "utils/profile.json";

const Experiences = () => {
  const { experiences } = profile;

  return (
    <div className="w-1/2 max-w-5xl mx-auto pt-20">
      <h1>Here are some of the places I&apos;ve worked at!</h1>
      <div className="mt-16">
        {experiences.map((experience) => (
          <ExperienceCard
            key={`${experience.company} ${experience.title}`}
            experience={experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
