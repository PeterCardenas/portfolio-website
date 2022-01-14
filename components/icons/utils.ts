type Theme = "black" | "white" | "alternate";

export interface IconProps {
  theme?: Theme;
  className?: string;
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
    alternate: {
      strokeClass: "stroke-alternate",
      fillClass: "fill-alternate",
    },
  };
  return styles[theme];
};
