import * as React from "react";

const SvgIcon = (props) => (
  <svg
    fill="none"
    className="h-4 w-4"
    data-testid="@icon/ArrowUpRight"
    viewBox="0 0 16 16"
    props={props}
  >
    <path
      fill="currentColor"
      d="M12.5 4v6.5a.5.5 0 1 1-1 0V5.207l-7.146 7.147a.5.5 0 0 1-.708-.708L10.793 4.5H5.5a.5.5 0 0 1 0-1H12a.5.5 0 0 1 .5.5"
    ></path>
  </svg>
);

export default SvgIcon;
