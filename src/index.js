import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./counter";
import Time from "./Time";
import ListAnime from "./listAnime";
import TablaPeliculas from "./tablaPeliculas";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

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
);

const contenidoVote1 = document.getElementById("vote1");
const containerVote1 = ReactDOM.createRoot(contenidoVote1);
containerVote1.render(<Counter />);

const contenidoVote2 = document.getElementById("vote2");
const containerVote2 = ReactDOM.createRoot(contenidoVote2);
containerVote2.render(<Counter />);

const contenidoVote3 = document.getElementById("vote3");
const containerVote3 = ReactDOM.createRoot(contenidoVote3);
containerVote3.render(<Counter />);

const contenidoVote4 = document.getElementById("vote4");
const containerVote4 = ReactDOM.createRoot(contenidoVote4);
containerVote4.render(<Counter />);

const contenidoVote5 = document.getElementById("vote5");
const containerVote5 = ReactDOM.createRoot(contenidoVote5);
containerVote5.render(<Counter />);

const contenidoTime = document.getElementById("time");
const containerTime = ReactDOM.createRoot(contenidoTime);
containerTime.render(<Time />);

const contenidoListAnime = document.getElementById("listAnime");
const containerListAnime = ReactDOM.createRoot(contenidoListAnime);
containerListAnime.render(<ListAnime />);

const contenidoTablaPeliculas = document.getElementById("tablaPeliculas");
const containerTablaPeliculas = ReactDOM.createRoot(contenidoTablaPeliculas);
containerTablaPeliculas.render(<TablaPeliculas />);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

/*
const contenidoCartas = document.getElementById("tarjetas");
const containerCartas = ReactDOM.createRoot(contenidoCartas);
containerCartas.render(<tarjetas />);
*/