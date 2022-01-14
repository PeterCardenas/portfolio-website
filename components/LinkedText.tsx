import { Fragment } from "react";
import cx from "classnames";

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
            <span
              className={cx(
                "-z-10 absolute transition-all left-0.5 bottom-1 h-1.5 group-hover:h-2 bg-alternate opacity-50 group-hover:opacity-75",
                {
                  "w-full": index === elements.length - 1,
                  "w-[calc(100%+7.5px)] lg:w-[calc(100%+9px)]":
                    index !== elements.length - 1,
                }
              )}
            />
          </span>
          {index != elements.length - 1 && <span> </span>}
        </Fragment>
      ))}
    </a>
  );
};

export default LinkedText;
