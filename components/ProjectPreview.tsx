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
      <div className="relative pt-11 mb-6">
        <div
          className={cx(
            "absolute top-0 max-h-full bg-whiter shadow-md p-6 z-20 rounded-lg max-w-sm",
            {
              "left-0": align === "left",
              "right-0": align === "right",
            }
          )}
        >
          <a href={project.link} className="inline-flex items-end group mb-4">
            <h3 className="mr-1">{project.name}</h3>
            <small className="mb-0.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <Link />
            </small>
          </a>
          <p>{project.description}</p>
        </div>
        <div
          className={cx("relative flex shadow-md rounded-lg max-w-[500px]", {
            "ml-auto": align === "left",
          })}
        >
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
      <div
        className={cx("w-full flex", {
          "justify-end": align === "left",
          "justify-start": align === "right",
        })}
      >
        <div>
          {project.skills.map((skill, index) => (
            <Fragment key={`${project.name}-${skill}`}>
              <small>{skill}</small>
              {index !== project.skills.length - 1 && (
                <small className="text-alternate"> ⋅ </small>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
