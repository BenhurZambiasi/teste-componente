import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Swal from "sweetalert2";

import { forgot_password } from "services/auth";

export default function ForgotPassword(props) {
  const [email, setEmail] = useState();

  async function enviarEmail() {
    const resp = await forgot_password(email);
    if (resp.ok) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Email enviado com sucesso",
        text: "Verefique sua caixa de entrar",
        showConfirmButton: false,
        timer: 2500,
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Falha ao enviar email",
        text: "Confira se o email digitado está correto",
        showConfirmButton: false,
        timer: 2500,
      });
    }
  }

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Esqueci senha
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}>
          <div>
            <label>Digite seu email</label>
            <input
              type="email"
              className="form-control"
              style={{ width: 300 }}
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
          <button
            className="btnAttConfi"
            style={{ width: 300 }}
            onClick={enviarEmail}>
            Enviar
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
