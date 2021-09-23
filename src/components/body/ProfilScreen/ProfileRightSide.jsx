import React, { useEffect, useState } from "react";
import ExperienceAdd from "../../Experience/experienceAdd.component";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import "./ProfileScreen.css";
import { removeExperience } from "../../../redux/actions/experienceAction";

function ProfileRightSide() {
  const dispatch = useDispatch();
  const { notify } = useSelector((state) => state);
  // get experiences stored in the state
  const { experiences } = useSelector((state) => state);
  const [loader, setLoader] = useState(false);

  // TODO remplacer cette valeur initiale par les donnée du profile du user connecté venant de la base de donnée
  const [profile, setProfile] = useState({
    profession: "Nom de la profession",
    specialite: "Prenom du user",
    resume: "Votre resumé...",
    competences: [
      "Design d'interface",
      "Design de parcours utilisateurs",
      "Design graphique",
      "Design graphique",
    ],
    experiences: [
      {
        occupation: "manager",
        name: "Google",
        description: "manager à google",
        date: {
          dateDebut: "30/12/2019",
          dateFin: "30/12/2020",
        },
      },
      {
        occupation: "chef",
        name: "MIT",
        description: "chef à MIT",
        date: {
          dateDebut: "30/12/2016",
          dateFin: "30/12/2020",
        },
      },
    ],
  });
  const [competences, setCompetences] = React.useState(profile.competences);
  const [experiencesLocal, setExperiencesLocal] = React.useState(
    profile.experiences
  );

  // Everytime experiences from state change, change it in local too
  useEffect(() => {
    setExperiencesLocal(experiences?.experiences);
  }, [experiences]);

  // Remove an experience in the state
  const removeExpe = (occupation) => {
    dispatch(removeExperience(occupation));
  };

  const SchemaValidation = Yup.object().shape({
    profession: Yup.string()
      .min(2, "trop court!")
      .max(50, "trop long!")
      .required("Ce champ est requis !"),
    specialite: Yup.string()
      .min(2, "trop court!")
      .max(50, "trop long!")
      .required("Ce champ est requis !"),
    resume: Yup.string()
      .min(2, "trop court!")
      .max(50, "trop long!")
      .required("Ce champ est requis !"),
    competences: Yup.array().required("Ce champ est requis !"),
    experiences: Yup.array().required("Ce champ est requis !"),
  });

  const submitForm = async (values, formik) => {
    setLoader(true);
    // dispatch(createProfil(profile));
    setLoader(false);
    formik.setErrors({ email: notify.error?.errors?.email });
    values["experiences"] = experiencesLocal;
    console.log(values);
    // history.push("/");
  };
  return (
    <div className="profile__personal__info mg-left">
      <p className="info__title">Informations professionnelles</p>
      <div className="profile__pro__info">
        <Formik
          validationSchema={SchemaValidation}
          onSubmit={(e, { setErrors }) => submitForm(e, { setErrors })}
          initialValues={profile}
        >
          {({ handleBlur, touched, errors, setFieldValue }) => (
            <Form>
              <div className="input_info">
                <label>Profession</label>
                <div className="inputbar">
                  <Field
                    required
                    onBlur={handleBlur}
                    className="form-control form-input"
                    name="profession"
                    type="text"
                    placeholder="Saisissez votre profession"
                  />
                  <i className="fas fa-pen" />
                </div>
                {errors.profession && touched.profession ? (
                  <div className="text-danger px-4">{errors.profession}</div>
                ) : null}
              </div>

              <div className="input_info">
                <label>Spécialité</label>
                <div className="inputbar">
                  <Field
                    required
                    onBlur={handleBlur}
                    className="form-control form-input"
                    name="specialite"
                    type="text"
                    placeholder="Saisissez votre ou vos spécialités"
                  />
                  <i className="fas fa-pen" />
                </div>
                {errors.specialite && touched.specialite ? (
                  <div className="text-danger px-4">{errors.specialite}</div>
                ) : null}
              </div>

              <div className="input_info">
                <label>Resumé</label>
                <div className="inputbar">
                  <Field
                    as={"textarea"}
                    required
                    onBlur={handleBlur}
                    className="form-control form-input"
                    name="resume"
                    type="text"
                    placeholder="Saisissez votre ou vos spécialités"
                  />
                  <i className="fas fa-pen" />
                </div>
                {errors.resume && touched.resume ? (
                  <div className="text-danger px-4">{errors.resume}</div>
                ) : null}
              </div>

              <div className="input_info">
                <label>Competence</label>
                <div className="inputbar">
                  <ReactTagInput
                    name={"competences"}
                    onBlur={handleBlur}
                    maxTags={30}
                    editable={true}
                    className="form-control form-input"
                    placeholder="Saisissez une compétence"
                    tags={competences}
                    onChange={(newCompetence) => {
                      setFieldValue("competences", newCompetence);
                      setCompetences(newCompetence);
                    }}
                  />

                  <i className="fas fa-pen" />
                </div>
                {errors.competences && touched.competences ? (
                  <div className="text-danger px-4">{errors.competences}</div>
                ) : null}
              </div>

              <div className="input_info">
                <label>Experience / Realisation</label>
                <div className="inputbar">
                  <div className="added_compo">
                    <div className="show_compo">
                      {experiencesLocal.map((experience, index) => {
                        return (
                          <span
                            key={experience.occupation + "_" + index}
                            className="react-tag-input__tag"
                          >
                            <span className="react-tag-input__tag__content">
                              {experience.occupation}
                            </span>
                            <span
                              onClick={() => removeExpe(experience.occupation)}
                              className="react-tag-input__tag__remove"
                            />
                          </span>
                        );
                      })}
                    </div>
                    <hr />
                    <ExperienceAdd />
                  </div>
                  <i className="fas fa-pen" />
                </div>
              </div>

              <button type="submit" className="btns left">
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

export default ProfileRightSide;
