import * as React from "react";

const SvgIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className="h-6 w-6"
    data-testid="@logo/TwitterLogoAlt"
    viewBox="0 0 24 24"
    props={props}
  >
    <path
      fill="currentColor"
      d="M17.176 3.75h2.76l-6.03 6.989L21 20.25h-5.554l-4.35-5.768-4.98 5.768h-2.76l6.45-7.476L3 3.75h5.696l3.932 5.272zm-.969 14.825h1.529L7.865 5.337H6.223z"
    ></path>
  </svg>
);

export default SvgIcon;
