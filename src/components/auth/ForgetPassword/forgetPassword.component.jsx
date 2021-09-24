import "./forgetPassword.style.css";
import ModalComponent from "../../modal.component";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { postDataAPI } from "../../../utils/fetchData";

const ForgetPassword = () => {
  const [loader, setLoader] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [close, setClose] = useState(false);

  const SchemaValidation = Yup.object().shape({
    email: Yup.string()
      .email("Cet email est invalid")
      .min(2, "trop court!")
      .max(50, "trop long!")
      .required("Ce champ est requis !"),
  });

  const SchemaResetValidation = Yup.object().shape({
    code: Yup.string().required("Ce champ est requis !"),
    password: Yup.string()
      .min(8, "trop court!")
      .required("Ce champ est requis !"),
    passwordConfirmation: Yup.string()
      .min(8, "trop court!")
      .required("Ce champ est requis !")
      .oneOf([Yup.ref("password"), null], "Pas identique !"),
  });

  const history = useHistory();

  const dispatch = useDispatch();

  const submitEmailForm = async (values, formIk) => {
    setLoader(true);
    const res = await postDataAPI("user/forgot-password", values);
    setLoader(false);
    if (!res.data?.status) {
      formIk.setErrors({ email: res?.data?.message });
    } else {
      setEmailSent(true);
    }
  };

  const submitResetForm = async (values, formIk) => {
    setLoader(true);
    const res = await postDataAPI("user/reset-password", values);
    setLoader(false);
    console.log(res.data);
    if (!res.data?.status) {
      console.log(res?.data?.errors?.password);
      formIk.setErrors({
        code: res?.data?.message,
        password: res?.data?.errors?.password,
        passwordConfirmation: res?.data?.errors?.passwordConfirmation,
      });
    } else {
      setClose(true);
      history.push("/");
    }
  };

  return (
    <>
      <ModalComponent
        close={close}
        setClose={setClose}
        button={<span className="clique-text"> Cliquez ici</span>}
        title={"Mot de passe oublié ?"}
        content={
          <>
            <Formik
              validationSchema={
                emailSent ? SchemaResetValidation : SchemaValidation
              }
              onSubmit={(e, { setErrors }) =>
                emailSent
                  ? submitResetForm(e, { setErrors })
                  : submitEmailForm(e, { setErrors })
              }
              initialValues={
                emailSent
                  ? {
                      code: "",
                      password: "",
                      passwordConfirmation: "",
                    }
                  : {
                      email: "",
                    }
              }
            >
              {({ handleBlur, touched, errors }) => (
                <Form>
                  {emailSent ? (
                    <>
                      <div className="inputGroup">
                        <label className="form-label">Code</label>
                        <Field
                          required
                          onBlur={handleBlur}
                          className="form-control form-input"
                          name="code"
                          type="text"
                          placeholder="Saisissez le code "
                        />
                        {errors.code && touched.code ? (
                          <div className="text-danger">{errors.code}</div>
                        ) : null}
                      </div>

                      <div className="inputGroup">
                        <label className="form-label">
                          Nouveau mot de passe
                        </label>
                        <Field
                          required
                          onBlur={handleBlur}
                          className="form-control form-input"
                          name="password"
                          type="password"
                          placeholder="Nouveau mot de passe"
                        />

                        {errors.password && touched.password ? (
                          <div className="text-danger">{errors.password}</div>
                        ) : null}
                      </div>

                      <div className="inputGroup">
                        <label className="form-label">
                          Confirmation mot de passe
                        </label>
                        <Field
                          required
                          onBlur={handleBlur}
                          className="form-control form-input"
                          name="passwordConfirmation"
                          type="password"
                          placeholder="Confirmez votre mot de passe"
                        />
                        {errors.passwordConfirmation &&
                        touched.passwordConfirmation ? (
                          <div className="text-danger">
                            {errors.passwordConfirmation}
                          </div>
                        ) : null}
                      </div>
                    </>
                  ) : (
                    <div className="inputGroup">
                      <label className="form-label">Email</label>
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
                  )}

                  <div className="btn-submit-container">
                    <button
                      className="btn-submit form-control form-input"
                      type="submit"
                    >
                      {loader ? (
                        <i className="fa fa-spinner fa-spin" />
                      ) : (
                        "Envoyer"
                      )}
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

export default ForgetPassword;
