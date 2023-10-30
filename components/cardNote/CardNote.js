"use client";

import { useState } from "react";
import "./cardNote.scss";
import clsx from "clsx";

export default function CardNote({
  title,
  text,
  date = "0000-00-00T00:00",
  priorityStatus = false,
}) {
  const [priority, setPriority] = useState(priorityStatus);

  const dateNote = date.slice(0, 10).split("-").reverse().join(".");
  const timeNote = date.slice(-5);

  return (
    <div className={clsx("card-note", { "card-note--priority": priority })}>
      <div className="card-note__title">{title}</div>
      <div className="card-note__text">{text}</div>
      <div className="card-note__datetime">
        <div className="datetime__date">
          <div className="date__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                opacity="0.16"
                d="M4 8H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V8Z"
                fill="#88A1DE"
              />
              <path
                d="M4 4H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V4Z"
                stroke="#88A1DE"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 8H20"
                stroke="#88A1DE"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 3V5"
                stroke="#88A1DE"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 3V5"
                stroke="#88A1DE"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="date__value">{dateNote}</div>
        </div>
        <div className="datetime__time">
          <div className="time__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle opacity="0.16" cx="12" cy="12" r="9" fill="#88A1DE" />
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="#88A1DE"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 8V13H16"
                stroke="#88A1DE"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="date__value">{timeNote}</div>
        </div>
      </div>
    </div>
  );
}
