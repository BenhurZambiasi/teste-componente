import React from "react";

import "./ChatIntro.css";

function components() {
  return (
    <div className="chatIntro">
      <img
        src="https://web.whatsapp.com/img/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg"
        alt="intro"
      />
      <h1>Mantenha seu celular conectado</h1>
      <h2>
        WhatsApp conecta ao seu telefone para sincronizar suas menssagens.
        <br /> Para reduzir o uso de dados, conecte seu telefone a uma rede
        Wi-fi
      </h2>
    </div>
  );
}

export default components;
