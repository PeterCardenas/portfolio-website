import cx from "classnames";

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
  console.log(progress);

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
                    "group hover:text-alternate cursor-pointer relative",
                    {
                      "text-alternate": isActive,
                      "mb-24": index !== sections.length - 1,
                    }
                  )}
                  onClick={() => scrollToSection(sectionLabel)}
                >
                  <p>{section}</p>
                  <div className="absolute top-0 z-10 -right-10 w-6 h-6 flex items-center justify-center">
                    <div
                      className={cx("bg-alternate rounded-xl transition-all", {
                        "w-0 h-0 group-hover:w-6 group-hover:h-6": !isActive,
                        "w-6 h-6": isActive,
                      })}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="relative bg-black w-1 h-[500px] rounded-t-lg">
          <div
            className="absolute top-0 left-0 w-full bg-alternate transition-all rounded-t-lg"
            style={{ height: `${progress}px` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
