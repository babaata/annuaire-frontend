import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import "./modal.style.css";
import { useDispatch, useSelector } from "react-redux";
import Alert from "./alert/Alert";

const ModalComponent = ({ title, btnName, content, type }) => {
  const [show, setShow] = useState(false);

const dispatch = useDispatch()
const {error} = useSelector(state => state)
const {auth} = useSelector(state => state)
const {notify} = useSelector(state => state)

console.log("error", error);
console.log("ath", notify);

  function handleShow() {
    setShow(true);
  }

  return (

  <>
      <Alert/>
    <>
      <Button
        className={type === "fill" ? "btn-filled" : "btn-outlined"}
        onClick={() => handleShow()}
      >
        {btnName}
      </Button>

      <Modal
        className="auth-modal"
        show={show}
        fullscreen={true}
        onHide={() => setShow(false)}
      >


      <span className="text-danger text-center mt-2 h4">{title === "Inscription" ?  <span>{notify.message ? notify.message : ''}</span> : <span>{notify.error ? notify.error : ''}</span> }</span>

        <div>
          <span className="float-end close" onClick={() => {
            setShow(false)
            // dispatch({type: "NOTIFY", payload:{}})
          }}>
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
              {title ? <div className="form-title">{title}</div> : <></>}
              {content}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  </>
  );
};

export default ModalComponent;
