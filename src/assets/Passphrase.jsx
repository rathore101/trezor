import * as React from "react";

const SvgIcon = (props) => (
  <svg
    fill="none"
    className="h-6 w-6"
    data-testid="@icon/Key"
    viewBox="0 0 24 24"
    props={props}
  >
    <path
      fill="currentColor"
      d="M15 1.5a7.508 7.508 0 0 0-7.133 9.824L2.469 16.72a.75.75 0 0 0-.219.53V21a.75.75 0 0 0 .75.75h3.75A.75.75 0 0 0 7.5 21v-1.5H9a.75.75 0 0 0 .75-.75v-1.5h1.5a.75.75 0 0 0 .53-.22l.896-.897A7.5 7.5 0 1 0 15 1.5M15 15a6 6 0 0 1-2.217-.423.75.75 0 0 0-.829.158L10.94 15.75H9a.75.75 0 0 0-.75.75V18h-1.5a.75.75 0 0 0-.75.75v1.5H3.75v-2.689l5.516-5.515a.75.75 0 0 0 .158-.829A6 6 0 1 1 15 15m3-7.875a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0"
    ></path>
  </svg>
);

export default SvgIcon;
