"use client";

import Image from "next/image";
import "./header.scss";
import logo from "@/public/logo.svg";
import Button from "../button/Button";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import FormNewNote from "../formNewNote/FormNewNote";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className="header">
      <div className="header__logo">
        <Image src={logo} alt="logo МойДневничок" />
      </div>

      <div className="header__btn">
        <Button onClick={handleShow} />
      </div>
      <div className="header__btn-mobile" onClick={handleShow}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            opacity="0.16"
            d="M5 16L4 20L8 19L18 9L15 6L5 16Z"
            fill="white"
          />
          <path
            d="M5 16L4 20L8 19L19.5858 7.41421C20.3668 6.63316 20.3668 5.36683 19.5858 4.58579L19.4142 4.41421C18.6332 3.63316 17.3668 3.63317 16.5858 4.41421L5 16Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 6L18 9"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 20H21"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <Modal show={show} onHide={handleClose} centered={true}>
        <FormNewNote onClickBtnClose={handleClose} />
      </Modal>
    </header>
  );
}
