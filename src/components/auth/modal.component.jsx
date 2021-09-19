import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import "./modal.style.css";

const ModalComponent = ({ title, content, type }) => {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }

  return (
    <>
      <Button
        className={type === "login" ? "btn-login" : "btn-register"}
        onClick={() => handleShow()}
      >
        {title}
      </Button>

      <Modal
        className="auth-modal"
        show={show}
        fullscreen={true}
        onHide={() => setShow(false)}
      >

        <span>Error mots de pass incorerect</span>
        <div>
          <span className="float-end close" onClick={() => setShow(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
            </svg>
          </span>
        </div>
        <Modal.Body>
          <div className="content">
            <div className="formContainer">
              <div className="form-title">{title}</div>
              {content}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalComponent;
