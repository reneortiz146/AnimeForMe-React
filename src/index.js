import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const contenidoIndex = document.getElementById("footer");
const containerIndex = ReactDOM.createRoot(contenidoIndex);
containerIndex.render(
  <div>
    <div class="col1">
      <p>
        Terms and Conditions &middot; Privacy
        <br />
        &copy; AnimeForMe 2022. Todos los derechos reservados.
      </p>
    </div>
    <div class="col2">
      <p>
        Address: <strong>Chihuahua, Chihuahua, Mexico</strong>
        <br />
        Phone: <strong>+52 (123) 456 789</strong>
      </p>
    </div>
    <div class="col3">
      <p>
        Diseñado por: Equipo x <br />
        Instituo Tecnologico de Chihuahua II
      </p>
    </div>
  </div>
  //<App />
);
