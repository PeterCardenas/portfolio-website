import { getThemedStyles, IconProps } from "components/icons/utils";

interface LinkProps extends IconProps {}

const Link = ({ theme }: LinkProps) => {
  const { strokeClass, fillClass } = getThemedStyles(theme);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={strokeClass}
        d="M10 5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9H19ZM20 4L21 4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3V4ZM15 3C14.4477 3 14 3.44772 14 4C14 4.55228 14.4477 5 15 5V3ZM21 9L21 4L19 4L19 9H21ZM20 3H15V5H20V3Z"
        className={fillClass}
      />
      <path
        d="M12.2929 10.2929C11.9024 10.6834 11.9024 11.3166 12.2929 11.7071C12.6834 12.0976 13.3166 12.0976 13.7071 11.7071L12.2929 10.2929ZM20.7071 4.70711C21.0976 4.31658 21.0976 3.68342 20.7071 3.29289C20.3166 2.90237 19.6834 2.90237 19.2929 3.29289L20.7071 4.70711ZM13.7071 11.7071L20.7071 4.70711L19.2929 3.29289L12.2929 10.2929L13.7071 11.7071Z"
        className={fillClass}
      />
    </svg>
  );
};

export default Link;
