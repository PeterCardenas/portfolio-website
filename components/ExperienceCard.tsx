import DoubleChevronRight from "components/icons/DoubleChevronRight";
import Image from "next/image";
import { Fragment } from "react";
import { Experience } from "utils/profile";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div className="pr-8 pb-4 mb-4">
      <div className="group relative">
        <div className="absolute bg-alternate transition-opacity opacity-50 group-hover:opacity-75 w-full h-full top-4 left-8 rounded-lg -z-10" />
        <div className="bg-whiter rounded-lg p-4 cursor-pointer transition shadow-md hover:shadow-xl hover:-translate-y-1 hover:-translate-x-1">
          <div className="px-4">
            <div className="flex flex-row">
              <div className="mr-6">
                <Image
                  className="rounded-lg"
                  src={experience.logo}
                  width={72}
                  height={72}
                  alt={`${experience} logo`}
                />
              </div>
              <div>
                <h3>{experience.company}</h3>
                <p>{experience.title}</p>
              </div>
            </div>
            <div>
              {experience.skills.map((skill, index) => (
                <Fragment
                  key={`${experience.company}-${experience.title}-${skill}`}
                >
                  <span>{skill}</span>
                  {index !== experience.skills.length - 1 && (
                    <span className="text-alternate"> ⋅ </span>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
          <div className="flex flex-row justify-end w-full">
            <div className="relative flex flex-row items-end">
              <span className="text-alternate mr-1">See more</span>
              <div className="transition mb-0.5 group-hover:rotate-90">
                <DoubleChevronRight theme="alternate" />
              </div>
              <div className="absolute transition-all left-0 top-6 bg-alternate opacity-25 -m-1 w-0 group-hover:w-full h-1/5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
