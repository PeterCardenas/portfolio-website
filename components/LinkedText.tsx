import { Fragment } from "react";

interface LinkedTextProps {
  children: string;
  href: string;
}

const LinkedText = ({ children, href }: LinkedTextProps) => {
  const elements = children.split(" ");
  return (
    <a href={href} className="group">
      {elements.map((element, index) => (
        <Fragment key={`${children}-${index}`}>
          <span className="relative">
            {element}
            {index != elements.length - 1 && " "}
            <span className="-z-10 absolute transition-all left-0.5 bottom-1 w-full h-1.5 group-hover:h-2 bg-alternate opacity-50 group-hover:opacity-75" />
          </span>
        </Fragment>
      ))}
    </a>
  );
};

export default LinkedText;
