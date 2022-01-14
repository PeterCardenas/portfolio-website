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
          <span className="relative after:-z-10 after:absolute after:transition-all after:left-0.5 after:bottom-1 after:w-full after:h-1.5 after:group-hover:h-2 after:bg-alternate after:opacity-50 after:group-hover:opacity-75">
            {element}
            {index != elements.length - 1 && " "}
          </span>
        </Fragment>
      ))}
    </a>
  );
};

export default LinkedText;
