import React, { useEffect, useState } from "react";
import ExperienceAdd from "../../Experience/experienceAdd.component";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import "./ProfileScreen.css";
import {
  removeExperience,
  initExperiences,
} from "../../../redux/actions/experienceAction";
import { getDataAPI, postDataAPI } from "../../../utils/fetchData";

function ProfileRightSide() {
  const dispatch = useDispatch();
  const { notify } = useSelector((state) => state);
  const [loader, setLoader] = useState(false);
  const [loadFormValue, setLoadFormValue] = useState(false);
  const [competences, setCompetences] = React.useState([]);
  const [experiencesLocal, setExperiencesLocal] = React.useState([]);
  const [titre, setTitre] = useState("");
  const [resume, setResume] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(true);

  useEffect(() => {
    setLoadFormValue(true);
    getConnectedUser().then((res) => {
      if (res.data?.user?.profil) {
        const profil = res.data?.user?.profil;
        setTitre(profil.titre);
        setResume(profil.resume);

        if (profil?.competences) {
          const competences = [];
          profil?.competences?.map((comp) => {
            competences.push(comp.nom);
          });
          setCompetences(competences);
        }

        setExperiencesLocal(profil.experiences);
        dispatch(initExperiences(profil.experience_professionnelles));
      }
      setLoadFormValue(false);
    });
  }, []);

  // get experiences stored in the state
  const { experiences } = useSelector((state) => state);

  // Everytime experiences from state change, change it in local too
  useEffect(() => {
    setExperiencesLocal(experiences?.experiences);
  }, [experiences]);

  // Remove an experience in the state
  const removeExperienceLocal = (occupation) => {
    dispatch(removeExperience(occupation));
  };

  // Form Validation
  const SchemaValidation = Yup.object().shape({
    titre: Yup.string().min(2, "trop court!").max(50, "trop long!"),
    resume: Yup.string().min(2, "trop court!").max(50, "trop long!"),
  });

  const submitForm = async (values, formik) => {
    console.log(values);
    const token = localStorage.getItem("firstLogin");
    values["experiences"] = experiencesLocal;
    setLoader(true);
    const res = await postDataAPI("user/profil", values, token);

    if (res.data?.message) {
      setStatus(res.data?.status);
      setMessage(res.data?.message);
    }

    setTimeout(() => {
      setMessage("");
      setStatus(true);
    }, 6000);

    setLoader(false);
    formik.setErrors({ email: notify.error?.errors?.email });
    formik.setTouched();
  };

  return (
    <div className="profil__left__side">
      <div className="profile__personal__info mg-left">
        <p className="info__title">Informations professionnelles</p>
        <div className="profile__pro__info">
          {loadFormValue ? (
            <div className="text-center">
              <i className="fas fa-spinner fa-spin x50" />
            </div>
          ) : (
            <Formik
              validationSchema={SchemaValidation}
              onSubmit={(e, { setErrors, setTouched }) =>
                submitForm(e, { setErrors, setTouched })
              }
              initialValues={{
                titre: titre,
                resume: resume,
                competences: competences,
              }}
            >
              {({ handleBlur, touched, errors, setFieldValue }) => (
                <Form>
                  <div className="input_info">
                    <label>Profession</label>
                    <div className="inputbar">
                      <Field
                        value={titre}
                        onBlur={handleBlur}
                        className="form-control form-input"
                        name="titre"
                        type="text"
                        placeholder="Saisissez votre profession"
                        onChange={(e) => {
                          setFieldValue("titre", e.target.value);
                          setTitre(e.target.value);
                        }}
                      />
                      <i className="fas fa-pen" />
                    </div>
                    {errors.titre && touched.titre ? (
                      <div className="text-danger px-4">{errors.titre}</div>
                    ) : null}
                  </div>

                  <div className="input_info">
                    <label>Resumé</label>
                    <div className="inputbar">
                      <Field
                        value={resume}
                        as={"textarea"}
                        onBlur={handleBlur}
                        className="form-control form-input"
                        name="resume"
                        type="text"
                        placeholder="Saisissez votre ou vos spécialités"
                        onChange={(e) => {
                          setFieldValue("resume", e.target.value);
                          setResume(e.target.value);
                        }}
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
                        value={competences}
                        name={"competences"}
                        onBlur={handleBlur}
                        maxTags={30}
                        editable={true}
                        className="form-control form-input"
                        placeholder="Saisissez une compétence"
                        tags={competences ? competences : []}
                        onChange={(newCompetence) => {
                          setFieldValue("competences", newCompetence);
                          setCompetences(newCompetence);
                        }}
                      />

                      <i className="fas fa-pen" />
                    </div>
                    {errors.competences && touched.competences ? (
                      <div className="text-danger px-4">
                        {errors.competences}
                      </div>
                    ) : null}
                  </div>

                  <div className="input_info">
                    <label>Experience / Realisation</label>
                    <div className="inputbar">
                      <div className="added_compo">
                        <div className="show_compo">
                          {experiencesLocal ? (
                            experiencesLocal.map((experience, index) => {
                              return (
                                <span
                                  key={experience.poste + "_" + index}
                                  className="react-tag-input__tag"
                                >
                                  <ExperienceAdd
                                    button={
                                      <i className="fas fa-pen react-tag-input__tag__edit" />
                                    }
                                    experience={experience}
                                  />

                                  <span className="react-tag-input__tag__content">
                                    {experience.poste}
                                  </span>
                                  <span
                                    onClick={() =>
                                      removeExperienceLocal(experience.poste)
                                    }
                                    className="react-tag-input__tag__remove"
                                  />
                                </span>
                              );
                            })
                          ) : (
                            <></>
                          )}
                        </div>
                        <hr />
                        <ExperienceAdd
                          button={
                            <button type={"button"} className="add_experience">
                              <i className="fas fa-plus-square" />
                              Ajouter une nouvelle experience ou realiser
                            </button>
                          }
                        />
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
                  <div
                    className={`text-center mt-2 h6 ${
                      message !== "" && status
                        ? "alert-success alert"
                        : message !== "" && !status
                        ? "alert-danger alert"
                        : ""
                    }`}
                  >
                    <span>{message}</span>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </div>
  );
}

const getConnectedUser = async () => {
  const token = localStorage.getItem("firstLogin");
  return await getDataAPI("user/me", token);
};

export default ProfileRightSide;
