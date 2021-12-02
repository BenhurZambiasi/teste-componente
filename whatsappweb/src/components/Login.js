import React from "react";
import { connection as Api } from "../api";

import "./Login.css";

function Login({ onReceive }) {
   async function handleFaceboockLogin() {
      let result = await Api.fbPoup();

      if (result) {
         onReceive(result.user);
      } else {
         alert("error");
      }
   }

   return (
      <div className="login" onClick={handleFaceboockLogin}>
         <button>logar com faceboock</button>
      </div>
   );
}

export default Login;
