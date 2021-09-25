import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProfileScreen.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  getDataAPI,
  postDataAPI,
  postDataFileAPI,
} from "../../../utils/fetchData";

const token = localStorage.getItem("firstLogin");
function ProfileLeftSide() {
  const { notify } = useSelector((state) => state);
  const [loader, setLoader] = useState(false);
  const [loadFormValue, setLoadFormValue] = useState(false);
  const [loadFileValue, setLoadFileValue] = useState(false);
  const hiddenFileInput = useRef(null);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [langues, setLangues] = useState([]);
  const [allLangues, setAllLangues] = useState([]);
  const [sexe, setSexe] = useState("Homme");
  const [imageUrl, setimageUrl] = useState("");
  const [message, setMessage] = useState("");
  const [pays, setPays] = React.useState([]);
  const [status, setStatus] = useState(true);

  const uploadButton = () => {
    // On file select (from the pop up)
    const onFileChange = async (event) => {
      const file = event.target.files[0];

      // Create an object of formData
      const formData = new FormData();

      // Update the formData object
      formData.append("image", file, file?.name);

      // Details of the uploaded file
      console.log(file);

      // Request made to the backend api
      // Send formData object
      setLoadFileValue(true);
      const token = localStorage.getItem("firstLogin");
      const res = await postDataFileAPI("user/picture", formData, token);
      if (res.data?.image) {
        setimageUrl(res.data?.image);
      }
      setLoadFileValue(false);
    };

    const handleClick = (event) => {
      hiddenFileInput.current.click();
    };

    return (
      <>
        <p className="text-center mt-2 mb-0" onClick={(e) => handleClick(e)}>
          <i className="fas fa-pen m-2" />
          Changer la photo de profil
        </p>
        <input
          type="file"
          name="image"
          onChange={(e) => onFileChange(e)}
          ref={hiddenFileInput}
          style={{ display: "none" }}
        />
      </>
    );
  };

  useEffect(() => {
    setLoadFormValue(true);
    getConnectedUser().then(async (res) => {
      if (res.data?.user) {
        const user = res.data?.user;
        setNom(user.nom);
        setPrenom(user.prenom);
        setEmail(user.email);
        setTelephone(user.telephone);
        setSexe(user.sexe);
        setPays(user.pays);
        setimageUrl(user.url_photo);
        if (user.langues?.length) {
          const langues = [];

          user.langues?.map((langue) => {
            langues.push(langue.id_langue);
          });
          setLangues(langues);
        }
      }
      getAllLangues().then((res) => {
        if (res.data?.langues) {
          setAllLangues(res.data.langues);
        }
      });
      setLoadFormValue(false);
    });
  }, []);

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
    telephone: Yup.string().min(2, "trop court!").max(50, "trop long!"),
    sexe: Yup.string().nullable().required("Ce champ est requis !"),
  });

  const submitForm = async (values, formik) => {
    setLoader(true);
    const res = await postDataAPI("user/update", values, token);

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
  };

  return (
    <div className="profil__left__side">
      <div className="upload__photo">
        <div className="photo">
          {loadFileValue ? (
            <div className="text-center">
              <i className="fa fa-spinner fa-spin x50 mt-5" />
            </div>
          ) : (
            <img
              src={imageUrl !== "" ? imageUrl : "./Images/abdoul.jpeg"}
              alt=""
            />
          )}
        </div>
        {uploadButton()}
      </div>
      {/* FOrmulaire */}
      <div className="profile__personal__info">
        <p className="info__title">Informations personnelles</p>
        {loadFormValue ? (
          <div className="text-center">
            <i className="fas fa-spinner fa-spin x50" />
          </div>
        ) : (
          <Formik
            validationSchema={SchemaValidation}
            onSubmit={(e, { setErrors }) => submitForm(e, { setErrors })}
            initialValues={{
              nom: nom,
              prenom: prenom,
              email: email,
              telephone: telephone,
              langues: langues,
              pays: pays,
              sexe: sexe,
            }}
          >
            {({ handleBlur, touched, errors, setFieldValue }) => (
              <Form>
                <div className="input_info">
                  <label>Nom </label>
                  <div className="inputbar">
                    <Field
                      onChange={(e) => {
                        setFieldValue("nom", e.target.value);
                        setNom(e.target.value);
                      }}
                      value={nom}
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
                      onChange={(e) => {
                        setFieldValue("prenom", e.target.value);
                        setPrenom(e.target.value);
                      }}
                      value={prenom}
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
                      onChange={(e) => {
                        setFieldValue("email", e.target.value);
                        setEmail(e.target.value);
                      }}
                      value={email}
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
                      onChange={(e) => {
                        setFieldValue("telephone", e.target.value);
                        setTelephone(e.target.value);
                      }}
                      value={telephone}
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
                  <label>Genre</label>
                  <div className="inputbar">
                    <Field
                      onChange={(e) => {
                        setFieldValue("sexe", e.target.value);
                        setSexe(e.target.value);
                      }}
                      value={sexe}
                      onBlur={handleBlur}
                      as="select"
                      className="form-control form-input"
                      name="sexe"
                    >
                      <option value={"null"} />
                      <option value="Femme">Femme</option>
                      <option value="Homme">Homme</option>
                    </Field>

                    <i className="fas fa-pen" />
                  </div>
                  {errors.sexe && touched.sexe ? (
                    <div className="text-danger px-4">{errors.sexe}</div>
                  ) : null}
                </div>

                <div className="input_info">
                  <label>Pays</label>
                  <div className="inputbar">
                    <Field
                      onChange={(e) => {
                        setFieldValue("pays", e.target.value);
                        setPays(e.target.value);
                      }}
                      value={pays}
                      onBlur={handleBlur}
                      as="select"
                      className="form-control form-input"
                      name="pays"
                    >
                      <option value={0} />
                      <option value={1}>Guinée</option>
                      <option value={2}>Maroc</option>
                      <option value={3}>France</option>
                      <option value={4}>USA</option>
                    </Field>

                    <i className="fas fa-pen" />
                  </div>
                  {errors.pays && touched.pays ? (
                    <div className="text-danger px-4">{errors.pays}</div>
                  ) : null}
                </div>

                <div className="input_info">
                  <label>Langues </label>
                  <div className="input_info_combobox">
                    <i className="fas fa-pen" />
                    <Field
                      multiple
                      onBlur={handleBlur}
                      as="select"
                      name="langues"
                    >
                      {allLangues?.map((langue, key) => {
                        return (
                          <option
                            key={key + "_" + langue.id_langue}
                            value={langue.id_langue}
                          >
                            {langue.nom}
                          </option>
                        );
                      })}
                    </Field>
                  </div>
                  <label>
                    Maintenez control (crtl) pour sélectionner plusieurs
                  </label>
                  {errors.langues && touched.langues ? (
                    <div className="text-danger px-4">{errors.langues}</div>
                  ) : null}
                </div>

                <button type={"submit"} className="btns left">
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
  );
}

const getConnectedUser = async () => {
  return await getDataAPI("user/me", token);
};

const getAllLangues = async () => {
  return await getDataAPI("langues");
};

export default ProfileLeftSide;
