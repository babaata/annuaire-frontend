import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProfil } from "../../../redux/actions/profilAction";
import "./ProfileScreen.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function ProfileLeftSide() {
  const { notify } = useSelector((state) => state);
  
  const { auth } = useSelector((state) => state);
  const [loader, setLoader] = useState(false);

  console.log(auth);

  // TODO remplacer cette valeur initiale par les donnée du user Connnecté venant de la base de donnée
  const [user, setUser] = useState({
    nom: "Nom du utilisateur",
    prenom: "Prenom du user",
    email: "email@gmail.com",
    telephone: "22405487512",
    ville: "Conakry",
    langue: ["french", "spanish"],
  });

  const dispatch = useDispatch();

  const SchemaValidation = Yup.object().shape({
    nom: Yup.string()
      .min(2, "trop court!")
      .max(50, "trop long!")
      .required("Ce champ est requis !"),
    prenom: Yup.string()
      .min(2, "trop court!")
      .max(50, "trop long!")
      .required("Ce champ est requis !"),
    email: Yup.string()
      .email("Email invalide")
      .min(2, "trop court!")
      .max(50, "trop long!")
      .required("Ce champ est requis !"),
    telephone: Yup.string()
      .min(2, "trop court!")
      .max(50, "trop long!")
      .required("Ce champ est requis !"),
    ville: Yup.string()
      .min(2, "trop court!")
      .max(50, "trop long!")
      .required("Ce champ est requis !"),
    langue: Yup.array().required("Ce champ est requis !"),
  });

  const submitForm = async (values, formik) => {
    setLoader(true);
    // dispatch(createProfil(values));
    setLoader(false);
    formik.setErrors({ email: notify.error?.errors?.email });
    console.log(values);
    // history.push("/");
  };

  return (
    <div className="profil__left__side">
      <div className="upload__photo">
        <div className="photo">
          <img src="./Images/abdoul.jpeg" alt="" />
        </div>
        <i className="fas fa-pen" />
        <p className="text-center mt-2 mb-0">Changer la photo de profil</p>
      </div>
      {/* FOrmulaire */}
      <div className="profile__personal__info">
        <p className="info__title">Informations personnelles</p>
        <Formik
          validationSchema={SchemaValidation}
          onSubmit={(e, { setErrors }) => submitForm(e, { setErrors })}
          initialValues={user}
        >
          {({ handleBlur, touched, errors }) => (
            <Form>
              <div className="input_info">
                <label>Nom </label>
                <div className="inputbar">
                  <Field
                    required
                    onBlur={handleBlur}
                    className="form-control form-input"
                    name="nom"
                    type="text"
                    placeholder="Saisissez votre nom"
                  />
                  <i className="fas fa-pen" />
                </div>
                {errors.nom && touched.nom ? (
                  <div className="text-danger px-4">{errors.nom}</div>
                ) : null}
              </div>

              <div className="input_info">
                <label>Prénom</label>
                <div className="inputbar">
                  <Field
                    required
                    onBlur={handleBlur}
                    className="form-control form-input"
                    name="prenom"
                    type="text"
                    placeholder="Saisissez votre prenom"
                  />
                  <i className="fas fa-pen" />
                </div>

                {errors.prenom && touched.prenom ? (
                  <div className="text-danger px-4">{errors.prenom}</div>
                ) : null}
              </div>

              <div className="input_info">
                <label>E-mail</label>
                <div className="inputbar">
                  <Field
                    required
                    onBlur={handleBlur}
                    className="form-control form-input"
                    name="email"
                    type="text"
                    placeholder="Saisissez votre email"
                  />
                  <i className="fas fa-pen" />
                </div>
                {errors.email && touched.email ? (
                  <div className="text-danger px-4">{errors.email}</div>
                ) : null}
              </div>

              <div className="input_info">
                <label>Telephone</label>
                <div className="inputbar">
                  <Field
                    required
                    onBlur={handleBlur}
                    className="form-control form-input"
                    name="telephone"
                    type="text"
                    placeholder="Saisissez votre numéro"
                  />
                  <i className="fas fa-pen" />
                </div>
                {errors.telephone && touched.telephone ? (
                  <div className="text-danger px-4">{errors.telephone}</div>
                ) : null}
              </div>

              <div className="input_info">
                <label>Ville</label>
                <div className="inputbar">
                  <Field
                    required
                    onBlur={handleBlur}
                    className="form-control form-input"
                    name="ville"
                    type="text"
                    placeholder="Saisissez votre ville"
                  />
                  <i className="fas fa-pen" />
                </div>
                {errors.ville && touched.ville ? (
                  <div className="text-danger px-4">{errors.ville}</div>
                ) : null}
              </div>

              <div className="input_info">
                <label>Veuillez choisir une langue</label>
                <div className="input_info_combobox">
                  <i className="fas fa-pen" />
                  <Field
                    multiple
                    required
                    onBlur={handleBlur}
                    as="select"
                    name="langue"
                  >
                    <option value="english">anglais</option>
                    <option value="french">français</option>
                    <option value="spanish">espagnol</option>
                  </Field>
                </div>
                {errors.langue && touched.langue ? (
                  <div className="text-danger px-4">{errors.langue}</div>
                ) : null}
              </div>

              <button type={"submit"} className="btns left">
                {loader ? (
                  <i className="fa fa-spinner fa-spin" />
                ) : (
                  "Enregistrer les modifications"
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ProfileLeftSide;
