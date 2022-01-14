import { useEffect, useState } from "react";
import cx from "classnames";
import DoubleChevronRight from "components/icons/DoubleChevronRight";
import useMediaQuery from "hooks/useMediaQuery";

interface ProgressBarProps {
  activeSection: string;
  sectionProgress: number;
  scrollToSection: (section: string) => void;
}

const sections = ["About", "Experiences", "Work", "Contact"];
const MARKER_HEIGHT = 24;
const DISTANCE_BETWEEN_MARKERS = 96;

const ProgressBar = ({
  activeSection,
  scrollToSection,
  sectionProgress,
}: ProgressBarProps) => {
  const numSectionsPassed = sections.indexOf(
    activeSection.charAt(0).toUpperCase() + activeSection.slice(1)
  );
  const progress =
    MARKER_HEIGHT * (numSectionsPassed + 1) +
    DISTANCE_BETWEEN_MARKERS * numSectionsPassed +
    sectionProgress * DISTANCE_BETWEEN_MARKERS;

  const isMobile = useMediaQuery("mobile");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setShowMenu(!isMobile);
  }, [isMobile]);

  return (
    <div className="short:hidden">
      <div
        className={cx(
          "fixed z-50 bottom-0 right-0 transition-all duration-1000 opacity-80",
          {
            "w-screen h-screen bg-gradient-to-l from-whiter to-alternate":
              showMenu,
            "w-0 h-0 bg-transparent": !isMobile,
          }
        )}
        onClick={() => {
          if (showMenu) {
            setShowMenu(false);
          }
        }}
      />
      <div
        className={cx("fixed bottom-16 right-8", {
          "z-50": showMenu,
          "-z-50": !showMenu,
        })}
      >
        <div className="flex flex-row justify-end">
          <div className="text-right mr-[26px]">
            {sections.map((section, index) => {
              const sectionLabel = section.toLowerCase();
              const isActive = sectionLabel === activeSection;
              return (
                <div key={section} className="flex justify-end">
                  <div
                    className={cx(
                      "group hover:text-alternate cursor-default lg:cursor-pointer transition-all relative",
                      {
                        "text-alternate": isActive,
                        "mb-24": index !== sections.length - 1 && showMenu,
                        "mb-0": index !== sections.length - 1 && !showMenu,
                        "mt-0": index === 0 && showMenu,
                        "mt-[372px]": index === 0 && !showMenu,
                      }
                    )}
                    onClick={
                      showMenu
                        ? () => {
                            scrollToSection(sectionLabel);
                            if (isMobile && sectionLabel !== activeSection) {
                              setTimeout(() => setShowMenu(false), 750);
                            }
                          }
                        : undefined
                    }
                  >
                    <p
                      className={cx("transition-all", {
                        "text-2xl": showMenu,
                        "text-[0px]": !showMenu,
                      })}
                    >
                      {section}
                    </p>
                    <div className="absolute z-10 -right-10 top-1 w-6 h-6 flex items-center justify-center">
                      <div
                        className={cx(
                          "bg-alternate rounded-xl transition-all",
                          showMenu && {
                            "w-0 h-0 group-hover:w-6 group-hover:h-6":
                              !isActive,
                            "w-6 h-6": isActive,
                          }
                        )}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="relative h-[500px] w-1 mt-1">
            <div
              className={cx(
                "absolute bottom-0 bg-black transition-all w-full rounded-t-lg",
                {
                  "h-full": showMenu,
                  "h-0": !showMenu,
                }
              )}
            >
              <div
                className="absolute top-0 left-0 w-full bg-alternate transition-all rounded-t-lg"
                style={{ height: showMenu ? `${progress}px` : 0 }}
              />
            </div>

            <div
              className={cx(
                "absolute bottom-0 -left-2.5 rounded-xl w-6 h-6 bg-black flex justify-center items-center transition cursor-pointer",
                {
                  "-rotate-90 hover:rotate-90": showMenu,
                  "rotate-90 hover:-rotate-90": !showMenu,
                }
              )}
              onClick={() => setShowMenu((showMenu) => !showMenu)}
            >
              <DoubleChevronRight theme="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
