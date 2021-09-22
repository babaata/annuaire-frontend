import "./login.style.css";
import ModalComponent from "../../modal.component";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/actions/authAction";
import { useHistory } from "react-router";
import { Button } from "react-bootstrap";

const Login = () => {
  const [loader, setLoader] = useState(false)

  const SchemaValidation = Yup.object().shape({
    email: Yup.string()
      .min(2, "trop court!")
      .max(50, "trop long!")
      .required("Ce champ est requis !"),
    password: Yup.string()
      .min(2, "trop court!")
      .max(50, "trop long!")
      .required("Ce champ est requis !"),
  });

  const [typePass, setTypePass] = useState(true);

  const history = useHistory();

  const dispatch = useDispatch();

  const submitForm = async (values) => {
    setLoader(true)
    await dispatch(login(values));
    setLoader(false);
    history.push("/");
  };

  return (
    <>
      <ModalComponent
        button={<Button className={"btn-outlined"}>Connexion</Button>}
        type="login"
        title={"Connexion"}
        content={
          <>
            <Formik
              validationSchema={SchemaValidation}
              onSubmit={(e) => submitForm(e)}
              initialValues={{
                email: "",
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
                      name="email"
                      type="email"
                      placeholder="Saisissez votre email"
                    />
                    {errors.email && touched.email ? (
                      <div className="text-danger">{errors.email}</div>
                    ) : null}
                  </div>

                  <div className="login inputGroup">
                    <label className="form-label">Mot de passe</label>
                    <Field
                      required
                      onBlur={handleBlur}
                      className="form-control form-input"
                      name="password"
                      type={typePass ? "password" : "text"}
                      placeholder="Mot de passe"
                    />
                    <small onClick={() => setTypePass(!typePass)}>
                      {typePass ? (
                        <i className=" fas fa-eye"></i>
                      ) : (
                        <i className="fas fa-eye-slash"></i>
                      )}
                    </small>
                    {errors.password && touched.password ? (
                      <div className="text-danger">{errors.password}</div>
                    ) : null}
                  </div>

                  <div className="btn-submit-container">
                    <button
                      className="btn-submit form-control form-input"
                      type="submit"
                    >
                      { loader ? <div className="loader"></div> : 'Se connecter' } 
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
