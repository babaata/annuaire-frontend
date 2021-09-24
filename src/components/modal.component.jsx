import React, { useEffect } from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./modal.style.css";
import { useDispatch, useSelector } from "react-redux";
import Alert from "./alert/Alert";
import { NOTIFY } from "../redux/actions/authAction";

const ModalComponent = ({ title, button, content, close }) => {
  const [show, setShow] = useState(false);

  const { notify } = useSelector((state) => state);

  function handleShow() {
    setShow(true);
  }

  const dispatch = useDispatch();

  return (
    <>
      {/* <Alert /> */}
      <>
        <div onClick={() => handleShow()}>{button}</div>
        <Modal
          className="auth-modal"
          show={show}
          fullscreen={true}
          onHide={() => setShow(false)}
        >
          <div>
            <span
              className="float-end close text-white"
              onClick={() => {
                setShow(false);
                dispatch({
                  type: NOTIFY,
                  payload: {
                    error: "",
                  },
                });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
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
                {title ? (
                  <div className="form-title">
                    {title}
                    <div
                      className={`text-danger text-center mt-2 h6 ${
                        notify?.error ? "alert-danger alert" : ""
                      }`}
                    >
                      <span>{notify.error ? notify.error.message : ""}</span>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
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
