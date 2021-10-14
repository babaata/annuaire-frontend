import React, { useState } from "react";
import "./experience.style.css";
import ModalComponent from "../modal.component";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { addExperience } from "../../redux/actions/experienceAction";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExperienceAdd = ({ button, experience }) => {
  const [close, setClose] = useState(false);
  const [startDate, setStartDate] = useState(
    experience && experience?.date_debut ? new Date(experience?.date_debut) : ""
  );
  const [endDate, setEndDate] = useState(
    experience && experience?.date_fin ? new Date(experience?.date_fin) : ""
  );

  const SchemaValidation = Yup.object().shape({
    poste: Yup.string()
      .min(2, "trop court!")
      .max(50, "trop long!")
      .required("Ce champ est requis !"),
    entreprise: Yup.string()
      .min(2, "trop court!")
      .max(50, "trop long!")
      .required("Ce champ est requis !"),
    description: Yup.string()
      .min(2, "trop court!")
      .max(800, "trop long!")
      .required("Ce champ est requis !"),
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
        setClose={setClose}
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
                      poste: "",
                      entreprise: "",
                      description: "",
                      dateDebut: "",
                      dateFin: "",
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
                      name="poste"
                      type="text"
                      placeholder="Quel était votre poste ou role"
                    />
                    {errors.poste && touched.poste ? (
                      <div className="text-danger">{errors.poste}</div>
                    ) : null}
                  </div>
                  <div className="inputGroup">
                    <label className="form-label">Nom de l'organisation</label>
                    <Field
                      required
                      onBlur={handleBlur}
                      className="form-control form-input"
                      name="entreprise"
                      type="text"
                      placeholder="Nom de l'organisation"
                    />
                    {errors.entreprise && touched.entreprise ? (
                      <div className="text-danger">{errors.entreprise}</div>
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
                          <DatePicker
                            onBlur={handleBlur}
                            className="form-control form-input"
                            name="dateDebut"
                            dateFormat="yyyy-MM-dd"
                            selected={startDate}
                            onChange={(date) => {
                              setFieldValue("dateDebut", date);
                              setStartDate(date);
                            }}
                            placeholder="01/01/2021"
                          />
                          {errors.dateDebut && touched.dateDebut ? (
                            <div className="text-danger">
                              {errors.dateDebut}
                            </div>
                          ) : null}
                        </Col>
                        <Col>
                          <DatePicker
                            onBlur={handleBlur}
                            className="form-control form-input"
                            name="dateFin"
                            dateFormat="yyyy-MM-dd"
                            selected={endDate}
                            onChange={(date) => {
                              setFieldValue("dateFin", date);
                              setEndDate(date);
                            }}
                            placeholder="01/01/2021"
                          />
                          {errors.dateFin && touched.dateFin ? (
                            <div className="text-danger">{errors.dateFin}</div>
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
