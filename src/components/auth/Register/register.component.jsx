import React from "react";
import "./register.style.css";
import { Formik, Form, Field } from "formik";
import ModalComponent from "../../modal.component";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../redux/actions/authAction";
import { useHistory } from "react-router";
import { useState } from "react";

const Register = () => {
  const SchemaValidation = Yup.object().shape({
    nom: Yup.string()
      .min(2, "trop court!")
      .max(50, "trop long!")
      .required("Ce champ est requis !"),
    prenom: Yup.string()
      .min(2, "trop court!")
      .max(50, "trop long!")
      .required("Ce champ est requis !"),
    username: Yup.string()
      .min(2, "trop court!")
      .max(50, "trop long!")
      .required("Ce champ est requis !"),
    telephone: Yup.string()
      .min(2, "trop court!")
      .max(50, "trop long!")
      .required("Ce champ est requis !"),
    password: Yup.string()
      .min(2, "trop court!")
      .max(50, "trop long!")
      .required("Ce champ est requis !"),
    passwordConfirmation: Yup.string()
      .min(2, "trop court!")
      .max(50, "trop long!")
      .required("Ce champ est requis !")
      .oneOf([Yup.ref("password"), null], "Pas identique !"),
    email: Yup.string()
      .email("Invalid email")
      .required("Ce champ est requis !"),
  });

  const {notify} = useSelector(state => state)


  const history = useHistory()
  const dispatch = useDispatch();
  const submitForm = async (values) => {

   await dispatch(register(values));
    history.push('/')
  };

  return (
    <>
      <ModalComponent
        type="fill"
        btnName="Inscription"
        title={"Inscription"}
        content={
          <>
            <Formik
              validationSchema={SchemaValidation}
              onSubmit={(e) => submitForm(e)}
              initialValues={{
                nom: "",
                prenom: "",
                email: "",
                username: "",
                telephone: "",
                password: "",
              }}
            >
              {({ handleBlur, touched, errors }) => (
                <Form>
                  <div className="inputGroup">
                    <label className="form-label">Nom</label>
                    <Field
                      required
                      onBlur={handleBlur}
                      className="form-control form-input"
                      name="nom"
                      type="text"
                      placeholder="Saisissez votre nom"
                    />
                    {errors.nom && touched.nom ? (
                      <div className="text-danger">{errors.nom}</div>
                    ) : null}
                  </div>
                  <div className="inputGroup">
                    <label className="form-label">Prénom</label>
                    <Field
                      required
                      onBlur={handleBlur}
                      className="form-control form-input"
                      name="prenom"
                      type="text"
                      placeholder="Saisissez votre prénom"
                    />
                    {errors.prenom && touched.prenom ? (
                      <div className="text-danger">{errors.prenom}</div>
                    ) : null}
                  </div>
                  <div className="inputGroup">
                    <label className="form-label">E-mail</label>
                    <Field
                      required
                      onBlur={handleBlur}
                      className="form-control form-input"
                      name="email"
                      type="email"
                      placeholder="Saisissez votre email"
                    />
                    {notify.error ? <span className="text-danger">{notify.error.errors.email }</span> : ''}
                    {errors.email && touched.email ? (
                      <div className="text-danger">{errors.email}</div>
                    ) : null}
                  </div>
                  <div className="inputGrou
                    <label className="form-label">Pseudo</label>
                    <Field
                      required
                      onBlur={handleBlur}
                      className="form-control form-input"
                      name="username"
                      type="text"
                      placeholder="Saisissez votre pseudo"
                    />
                    {notify.error ? <span className="text-danger">{notify.error.errors.username}</span> : ''}
                    {errors.username && touched.username ? (
                      <div className="text-danger">{errors.username}</div>
                    ) : null}
                  </div>
                  <div className="inputGroup">
                    <label className="form-label">Téléphone</label>
                    <Field
                      onBlur={handleBlur}
                      className="form-control form-input"
                      name="telephone"
                      type="phone"
                      placeholder="Votre numero"
                    />
                    {errors.telephone && touched.telephone ? (
                      <div className="text-danger">{errors.telephone}</div>
                    ) : null}
                  </div>

                  <div className="inputGroup">
                    <label className="form-label">Mot de passe</label>
                    <Field
                      required
                      onBlur={handleBlur}
                      className="form-control form-input"
                      name="password"
                      type="password"
                      placeholder="Mot de passe"
                    />
                    {notify.error? <span className="text-danger">{notify.error.errors.password }</span> : ''}
                    {errors.password && touched.password ? (
                      <div className="text-danger">{errors.password}</div>
                    ) : null}
                  </div>

                  <div className="inputGroup">
                    <label className="form-label">
                      Confirmation mot de pass
                    </label>
                    <Field
                      required
                      onBlur={handleBlur}
                      className="form-control form-input"
                      name="passwordConfirmation"
                      type="password"
                      placeholder="Confirmez votre mot de pass"
                    />
                    {errors.passwordConfirmation &&
                    touched.passwordConfirmation ? (
                      <div className="text-danger">
                        {errors.passwordConfirmation}
                      </div>
                    ) : null}
                  </div>

                  <div className="btn-submit-container">
                    <button
                      className="btn-submit form-control form-input"
                      type="submit"
                    >
                      Créer mon compte
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

export default Register;
