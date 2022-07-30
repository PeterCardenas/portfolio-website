import { Fragment, useState } from "react";
import Image from "next/image";
import cx from "classnames";
import DoubleChevronRight from "components/icons/DoubleChevronRight";
import List from "components/icons/List";
import { Experience } from "utils/profile";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="md:pr-8 pr-2 md:pb-4 pb-2 mb-4">
      <div className="group relative">
        <div className="absolute bg-alternate transition-opacity opacity-50 group-hover:opacity-75 w-full h-full md:top-4 top-2 md:left-8 left-2 rounded-lg -z-10" />
        <div
          className="bg-whiter rounded-lg p-4 cursor-pointer transition shadow-md hover:shadow-xl hover:-translate-y-1 hover:-translate-x-1"
          onClick={() => setShowMore((showMore) => !showMore)}
        >
          <div className="px-4">
            <div className="flex flex-row pb-2">
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
                <h2>{experience.company}</h2>
                <p>{experience.title}</p>
              </div>
            </div>
            <div>
              {experience.skills.map((skill, index) => (
                <Fragment
                  key={`${experience.company}-${experience.title}-${skill}`}
                >
                  <small>{skill}</small>
                  {index !== experience.skills.length - 1 && (
                    <small className="text-alternate"> ⋅ </small>
                  )}
                </Fragment>
              ))}
            </div>
            <div
              className={cx(
                "mt-2 overflow-hidden transition-all duration-300",
                {
                  "max-h-screen": showMore,
                  "max-h-0": !showMore,
                }
              )}
            >
              {experience.contributions.map((contribution, index) => (
                <div
                  key={`${experience.company}-${experience.title}-contribution-${index}`}
                  className="inline-flex items-start"
                >
                  <div className="flex-grow flex-shrink-0 mt-1 mr-2">
                    <List className="w-[18px] h-[18px]" />
                  </div>
                  <small>{contribution}</small>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row justify-end w-full">
            <div className="relative flex flex-row items-end">
              <small className="text-alternate mr-1">
                See {showMore ? "less" : "more"}
              </small>
              <div
                className={cx("transition mb-0.5", {
                  "group-hover:-rotate-90": showMore,
                  "group-hover:rotate-90": !showMore,
                })}
              >
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
