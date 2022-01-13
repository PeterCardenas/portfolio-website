import Link from "components/icons/Link";
import Image from "next/image";
import cx from "classnames";
import { Project } from "utils/profile";
import { Fragment } from "react";

interface ProjectPreviewProps {
  project: Project;
  align: "left" | "right";
}

const ProjectPreview = ({ project, align }: ProjectPreviewProps) => {
  return (
    <div className="mb-16">
      <div className="grid grid-cols-11 grid-rows-7 mb-6">
        <div
          className={cx(
            "bg-whiter shadow-md p-6 z-20 rounded-lg row-start-1 row-span-4 col-span-6",
            {
              "col-start-1": align === "left",
              "col-start-6": align === "right",
            }
          )}
        >
          <a href={project.link} className="inline-flex items-end group mb-4">
            <h3 className="mr-1">{project.name}</h3>
            <span className="mb-0.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <Link />
            </span>
          </a>
          <p>{project.description}</p>
        </div>
        <div
          className={cx("col-span-7 row-start-2 row-span-6 flex", {
            "col-start-5": align === "left",
            "col-start-1": align === "right",
          })}
        >
          <div className="flex relative shadow-md rounded-lg">
            <div className="absolute w-full h-full bg-alternate transition-opacity duration-500 opacity-50 hover:opacity-10 z-10 rounded-lg" />
            <Image
              className="rounded-lg"
              src={project.image}
              width="500"
              height="300"
              alt={`${project.name} project preview`}
            />
          </div>
        </div>
      </div>
      <div
        className={cx("w-full flex", {
          "justify-end": align === "left",
          "justify-start": align === "right",
        })}
      >
        <div>
          {project.skills.map((skill, index) => (
            <Fragment key={`${project.name}-${skill}`}>
              <span>{skill}</span>
              {index !== project.skills.length - 1 && (
                <span className="text-alternate"> ⋅ </span>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
