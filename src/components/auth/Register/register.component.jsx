import "./register.style.css";
import ModalComponent from "../modal.component";
import { Button, Form } from "react-bootstrap";

const Register = () => {
  return (
    <>
      <ModalComponent
        type="register"
        title={"Inscription"}
        content={
          <>
            <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nom Prénom</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Saisissez votre prénom et nom"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Saisissez votre email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Téléphone</Form.Label>
                <Form.Control type="phone" placeholder="Votre numero" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control type="password" placeholder="Mot de passe" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="passwordConfirm">
                <Form.Label>Confirmation mot de pass</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirmez votre mot de pass"
                />
              </Form.Group>

              <div className="btn-submit-container">
                <Button
                  className="btn-submit form-control"
                  variant="primary"
                  type="submit"
                >
                  Se connecter
                </Button>
              </div>
            </Form>
            <div className="form-footer">
              Mot de pass oublié ? <a href="#">Cliquez ici</a>
            </div>
          </>
        }
      />
    </>
  );
};

export default Register;
