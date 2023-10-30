"use client";

import Button from "../button/Button";
import "./formNewNote.scss";
import { useState } from "react";

export default function FormNewNote({ onClickBtnClose }) {
  const [formData, setFormData] = useState({});

  const nowDateTime = new Date().toJSON().slice(0, 16);

  function publish(formData) {
    console.log(formData);
  }

  //   const handleSubmitForm = (e) => {
  //     e.preventDefault();
  //     const form = e.target;
  //     const formData = new FormData(form);
  //     const newNote = {
  //       title: formData.get("title"),
  //       text: formData.get("note"),
  //       date: formData.get("date"),
  //     };
  //     console.log(newNote);
  //     e.target.reset();
  //   };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newNote = {
      title: formData.get("title"),
      text: formData.get("note"),
      date: formData.get("date"),
    };
    console.log(JSON.stringify(newNote));

    fetch("api/bd.json", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));

    e.target.reset();
  };

  //   function handleSubmitForm(event) {
  //     event.preventDefault();
  //     fetch("api/bd.json", {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         formData,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => console.log(data))
  //       .catch((err) => console.error(err));
  //   }

  return (
    <div className="form-new-note">
      <div className="form-new-note__btn-close" onClick={onClickBtnClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          fill="none"
          viewBox="0 0 38 38"
        >
          <path
            stroke="#050F28"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.167"
            d="M11.083 11.084l15.834 15.833m-15.834 0l15.834-15.834"
          ></path>
        </svg>
      </div>
      <div className="form-new-note__title">Новая запись</div>
      <form
        action={"POST"}
        className="form-new-note__form"
        onSubmit={handleSubmitForm}
      >
        <div className="form__inputs">
          <div className="form__row-one">
            <div className="inputs__input">
              <label htmlFor="title">Заголовок</label>
              <input type="text" name="title" required maxLength="200" />
            </div>
            <div className="inputs__input">
              <label htmlFor="date">Дата</label>
              <input
                type="datetime-local"
                name="date"
                required
                defaultValue={nowDateTime}
              />
            </div>
          </div>
          <div className="form__row-two">
            <div className="inputs__input">
              <label htmlFor="note">Заметка</label>
              <input
                type="text"
                name="note"
                style={{ height: "166px" }}
                required
                maxLength="2000"
              />
            </div>
          </div>
        </div>
        <div className="form__button">
          <Button title="Поделиться наболевшим" />
        </div>
      </form>
    </div>
  );

  // const [formData, setFormData] = useState({});

  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   fetch("api/bd.json", {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       formData,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.error(err));
  // }

  // return (
  //   <form onSubmit={handleFormSubmit}>
  //     <input
  //       type="text"
  //       name="name"
  //       value={formData.name}
  //       onChange={(e) =>
  //         setFormData({ ...formData, [e.target.name]: e.target.value })
  //       }
  //     />
  //     Продолжи
  //     <button type="submit">Submit</button>
  //   </form>
  // );
}
