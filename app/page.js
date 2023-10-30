"use client";

import ButtonFilter from "@/components/buttonFilter/ButtonFilter";
import "./page.scss";
import CardNote from "@/components/cardNote/CardNote";
import ButtonMore from "@/components/buttonMore/ButtonMore";
import useSWR from "swr";
import { useEffect, useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const pages = [1, 2, 3, 4, 5];

export default function Home() {
  const { data, error, isLoading } = useSWR("/api/bd.json", fetcher);
  const [filterNew, setFilterNew] = useState(true);
  const [filterOld, setFilterOld] = useState(false);

  function handleClickFilterNew() {
    setFilterNew(!filterNew);
    setFilterOld(!filterOld);
  }

  function handleClickFilterOld() {
    setFilterNew(!filterNew);
    setFilterOld(!filterOld);
  }

  return (
    <main className="home">
      <div className="home__background"></div>
      <div className="home__header">
        <div className="header__title">
          <h1>Мой дневничок</h1>
        </div>
        <div className="header__filters">
          <ButtonFilter
            title="Сначала новые"
            status={filterNew}
            onClick={handleClickFilterNew}
          />
          <ButtonFilter
            title="Сначала старые"
            status={filterOld}
            onClick={handleClickFilterOld}
          />
        </div>
      </div>
      {!data ? (
        <div>Загружаем записи...</div>
      ) : (
        <div className="home__notes">
          {filterNew
            ? data.notes.map((note, i) => {
                return (
                  <CardNote
                    key={i}
                    title={note.title}
                    text={note.text}
                    date={note.date}
                    priorityStatus={note?.priority}
                  />
                );
              })
            : data.notes
                .map((note, i) => {
                  return (
                    <CardNote
                      key={i}
                      title={note.title}
                      text={note.text}
                      date={note.date}
                      priorityStatus={note?.priority}
                    />
                  );
                })
                .reverse()}
        </div>
      )}
      <div className="home__load-more">
        <ButtonMore />
      </div>
      <div className="home__pages">
        <div className="pages__left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
          >
            <circle opacity="0.16" cx="17" cy="17" r="12.75" fill="#88A1DE" />
            <circle
              cx="17"
              cy="17"
              r="12.75"
              stroke="#88A1DE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 12.75L12.75 17M12.75 17L17 21.25M12.75 17H21.25"
              stroke="#88A1DE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="pages__page">
          <ul>
            {pages.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="pages__right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
          >
            <circle opacity="0.16" cx="17" cy="17" r="12.75" fill="#88A1DE" />
            <circle
              cx="17"
              cy="17"
              r="12.75"
              stroke="#88A1DE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 21.25L21.25 17M21.25 17L17 12.75M21.25 17H12.75"
              stroke="#88A1DE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </main>
  );
}
