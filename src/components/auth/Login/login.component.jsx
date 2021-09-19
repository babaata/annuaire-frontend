import "./login.style.css";
import ModalComponent from "../../modal.component";
import * as Yup from "yup";
import { postData } from "../../../Api/fetchData";
import { Formik, Form, Field } from "formik";
import React from "react";

const Login = () => {
  const SchemaValidation = Yup.object().shape({
    username: Yup.string()
      .min(2, "trop court!")
      .max(50, "trop long!")
      .required("Ce champ est requis !"),
    password: Yup.string()
      .min(2, "trop court!")
      .max(50, "trop long!")
      .required("Ce champ est requis !"),
  });

  const submitForm = (values) => {
    postData("user/login", values).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <ModalComponent
        type="login"
        title={"Connexion"}
        content={
          <>
            <Formik
              validationSchema={SchemaValidation}
              onSubmit={(e) => submitForm(e)}
              initialValues={{
                username: "",
                password: "",
              }}
            >
              {({ handleBlur, touched, errors }) => (
                <Form>
                  <div className="inputGroup">
                    <label className="form-label">Login</label>
                    <Field
                      required
                      onBlur={handleBlur}
                      className="form-control form-input"
                      name="username"
                      type="text"
                      placeholder="Saisissez votre pseudo"
                    />
                    {errors.username && touched.username ? (
                      <div className="text-danger">{errors.username}</div>
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
                    {errors.password && touched.password ? (
                      <div className="text-danger">{errors.password}</div>
                    ) : null}
                  </div>

                  <div className="btn-submit-container">
                    <button
                      className="btn-submit form-control form-input"
                      type="submit"
                    >
                      Se connecter
                    </button>
                  </div>
                  <div className="form-footer">
                    Mot de pass oublié ? <a href="#">Cliquez ici</a>
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

export default Login;
