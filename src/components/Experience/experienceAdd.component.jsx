import "./experience.style.css";
import ModalComponent from "../modal.component";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { addExperience } from "../../redux/actions/experienceAction";

const ExperienceAdd = ({ button, experience }) => {
  const [close, setClose] = useState(false);

  const SchemaValidation = Yup.object().shape({
    occupation: Yup.string()
      .min(2, "trop court!")
      .max(50, "trop long!")
      .required("Ce champ est requis !"),
    name: Yup.string()
      .min(2, "trop court!")
      .max(50, "trop long!")
      .required("Ce champ est requis !"),
    description: Yup.string()
      .min(2, "trop court!")
      .max(50, "trop long!")
      .required("Ce champ est requis !"),
    startDate: Yup.string().required("Ce champ est requis !"),
    endDate: Yup.string().required("Ce champ est requis !"),
  });

  const dispatch = useDispatch();

  const submitForm = async (values) => {
    await dispatch(addExperience(values));
    setClose(true);
  };

  return (
    <>
      <ModalComponent
        close={close}
        button={button}
        title={"Experience"}
        content={
          <>
            <Formik
              validationSchema={SchemaValidation}
              onSubmit={(e) => submitForm(e)}
              initialValues={
                experience
                  ? experience
                  : {
                      occupation: "",
                      name: "",
                      description: "",
                      startDate: "",
                      endDate: "",
                    }
              }
            >
              {({ handleBlur, touched, errors, setFieldValue }) => (
                <Form>
                  <div className="inputGroup">
                    <label className="form-label">
                      Poste occupé / Rôle joué / Projet réalisé
                    </label>
                    <Field
                      required
                      onBlur={handleBlur}
                      className="form-control form-input"
                      name="occupation"
                      type="text"
                      placeholder="Quel était votre poste ou role"
                    />
                    {errors.occupation && touched.occupation ? (
                      <div className="text-danger">{errors.occupation}</div>
                    ) : null}
                  </div>
                  <div className="inputGroup">
                    <label className="form-label">Nom de l'organisation</label>
                    <Field
                      required
                      onBlur={handleBlur}
                      className="form-control form-input"
                      name="name"
                      type="text"
                      placeholder="Nom de l'organisation"
                    />
                    {errors.name && touched.name ? (
                      <div className="text-danger">{errors.name}</div>
                    ) : null}
                  </div>
                  <div className="inputGroup">
                    <label className="form-label">
                      Description de votre poste / rôle
                    </label>
                    <Field
                      as="textarea"
                      required
                      onBlur={handleBlur}
                      className="form-control form-input"
                      name="description"
                      type="text"
                      placeholder="Description de votre poste / rôle"
                    />
                    {errors.description && touched.description ? (
                      <div className="text-danger">{errors.description}</div>
                    ) : null}
                  </div>
                  <div className="inputGroup">
                    <label className="form-label">Date</label>
                    <div>
                      <Row>
                        <Col>
                          <Field
                            required
                            onBlur={handleBlur}
                            className="form-control form-input"
                            name="startDate"
                            type="text"
                            placeholder="01/01/2021"
                          />
                          {errors.startDate && touched.startDate ? (
                            <div className="text-danger">
                              {errors.startDate}
                            </div>
                          ) : null}
                        </Col>
                        <Col>
                          <Field
                            required
                            onBlur={handleBlur}
                            className="form-control form-input"
                            name="endDate"
                            type="text"
                            placeholder="01/01/2021"
                          />
                          {errors.endDate && touched.endDate ? (
                            <div className="text-danger">{errors.endDate}</div>
                          ) : null}
                        </Col>
                      </Row>
                    </div>
                  </div>

                  <div className="btn-submit-container">
                    <button
                      className="btn-submit form-control form-input"
                      type="submit"
                    >
                      Enregistrer les modifications
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </>
        }
      />
    </>
  );
};

export default ExperienceAdd;
