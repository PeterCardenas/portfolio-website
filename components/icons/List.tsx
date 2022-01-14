import { IconProps } from "components/icons/utils";

interface ListProps extends IconProps {}

const List = (props: ListProps) => {
  return (
    <svg
      width="18"
      height="18"
      className={props.className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.8936 12.8199C20.3113 12.5862 20.4951 12.1486 20.4999 11.7591C20.5047 11.3704 20.3306 10.9223 19.9006 10.6924L19.5934 10.5281C14.9184 8.02798 10.045 6.02453 5.03223 4.54236C4.49555 4.38368 4.04882 4.68311 3.83448 5.04034C3.62088 5.39633 3.56983 5.89991 3.84224 6.33125L6.76727 10.9627C7.12995 11.537 7.12519 12.3509 6.73839 12.9524L3.69825 17.6799C3.42462 18.1053 3.45368 18.607 3.66691 18.9704C3.88394 19.3403 4.33975 19.6222 4.87361 19.4484C9.92324 17.8049 14.846 15.6446 19.5823 12.9942L19.8936 12.8199Z"
        fill="#2C3E50"
      />
    </svg>
  );
};

export default List;
