import * as React from "react";

const SvgIcon = (props) => (
  <svg
    fill="none"
    className="h-5 w-5 shrink-0 text-primary"
    data-testid="@icon/CheckCircle"
    viewBox="0 0 20 20"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M13.438 8.125 8.852 12.5l-2.29-2.187"
    ></path>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15"
    ></path>
  </svg>
);

export default SvgIcon;
