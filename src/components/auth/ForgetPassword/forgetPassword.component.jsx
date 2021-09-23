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

  const SchemaValidation = Yup.object().shape({
    email: Yup.string()
      .email("Cet email est invalid")
      .min(2, "trop court!")
      .max(50, "trop long!")
      .required("Ce champ est requis !"),
  });

  const history = useHistory();

  const dispatch = useDispatch();

  const submitForm = async (values, formIk) => {
    console.log(values);
    setLoader(true);
    const res = await postDataAPI("user/forgot-password", values);
    setLoader(false);
    console.log(res.data?.errors);
    if (res.data?.errors) {
      formIk.setErrors({ email: res?.data?.message });
    }
    console.log(res.data);

    history.push("/");
  };

  return (
    <>
      <ModalComponent
        button={<span className="clique-text"> Cliquez ici</span>}
        title={"Mot de passe oublié ?"}
        content={
          <>
            <Formik
              validationSchema={SchemaValidation}
              onSubmit={(e, { setErrors }) => submitForm(e, { setErrors })}
              initialValues={{
                email: "",
              }}
            >
              {({ handleBlur, touched, errors }) => (
                <Form>
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

                  <div className="btn-submit-container">
                    <button
                      className="btn-submit form-control form-input"
                      type="submit"
                    >
                      {loader ? (
                        <i class="fa fa-spinner fa-spin"></i>
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
