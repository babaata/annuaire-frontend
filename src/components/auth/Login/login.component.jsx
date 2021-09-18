import "./login.style.css";
import ModalComponent from "../modal.component";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <ModalComponent
        type="login"
        title={"Connexion"}
        content={
          <>
            <Form>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Saisissez votre email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control type="password" placeholder="Mot de passe" />
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

export default Login;
