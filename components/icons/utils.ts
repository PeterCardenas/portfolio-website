type Theme = "black" | "white";

export interface IconProps {
  theme?: Theme;
}

export const getThemedStyles = (theme?: Theme) => {
  theme = theme || "black";
  const styles = {
    black: {
      strokeClass: "stroke-black",
      fillClass: "fill-black",
    },
    white: {
      strokeClass: "stroke-white",
      fillClass: "fill-white",
    },
  };
  return styles[theme];
};
