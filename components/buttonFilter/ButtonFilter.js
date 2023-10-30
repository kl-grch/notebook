"use client";

import clsx from "clsx";
import "./buttonFilter.scss";

export default function ButtonFilter({ title, status = true, onClick }) {
  return (
    <div
      className={clsx("button-filter", { "button-filter--active": status })}
      onClick={onClick}
    >
      <div className="button-filter__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4 6H20M4 12H14M4 18H8"
            stroke="#050F28"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={
              status
                ? "M14 16L18 20M18 20L22 16M18 20L18 4"
                : "M14 8L18 4M18 4L22 8M18 4L18 20"
            }
            stroke={status ? "white" : "#88A1DE"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="button-filter__title">{title}</div>
    </div>
  );
}
