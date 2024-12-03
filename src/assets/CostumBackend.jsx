import * as React from "react";

const SvgIcon = (props) => (
  <svg
    fill="none"
    className="h-6 w-6"
    data-testid="@icon/ShieldCheck"
    viewBox="0 0 24 24"
    props={props}
  >
    <path
      fill="currentColor"
      d="M19.5 3.75h-15A1.5 1.5 0 0 0 3 5.25v5.511c0 8.4 7.108 11.187 8.532 11.661a1.46 1.46 0 0 0 .938 0C13.893 21.95 21 19.163 21 10.759V5.25a1.5 1.5 0 0 0-1.5-1.5m0 7.012c0 7.351-6.221 9.807-7.5 10.236-1.269-.422-7.5-2.877-7.5-10.236V5.25h15zM7.719 13.281a.75.75 0 0 1 1.062-1.062l1.719 1.72 4.72-4.72a.75.75 0 0 1 1.062 1.062l-5.25 5.25a.75.75 0 0 1-1.062 0z"
    ></path>
  </svg>
);

export default SvgIcon;
