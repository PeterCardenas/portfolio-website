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

  return (
    <div className="fixed bottom-0 right-8">
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
                      "lg:mb-24 mb-0": index !== sections.length - 1,
                      "mt-[372px] lg:mt-0": index === 0,
                    }
                  )}
                  onClick={() => scrollToSection(sectionLabel)}
                >
                  <p className="text-[0px] lg:text-2xl transition-all">
                    {section}
                  </p>
                  <div className="absolute top-0 z-10 -right-10 w-6 h-6 flex items-center justify-center">
                    <div
                      className={cx(
                        "bg-alternate rounded-xl transition-all",
                        !isMobile && {
                          "w-0 h-0 group-hover:w-6 group-hover:h-6": !isActive,
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
        <div className="relative h-[500px] w-1 mb-16">
          <div className="absolute bottom-0 bg-black transition-all lg:h-full w-full h-0 rounded-t-lg">
            <div
              className="absolute top-0 left-0 w-full bg-alternate transition-all rounded-t-lg"
              style={{ height: isMobile ? 0 : `${progress}px` }}
            />
          </div>

          <div className="absolute bottom-0 -left-2.5 rounded-xl w-6 h-6 bg-black flex justify-center items-center transition rotate-90 lg:-rotate-90 hover:rotate-90 cursor-pointer">
            <DoubleChevronRight theme="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
