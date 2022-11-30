import React from "react";

function ListAnime() {
  const listaAnime = ["Gintama: The Final", "Trigun Stampede", "Tokyo 7th Sister", "Vinland Saga Temporada 2", "Spy Kyoushitsu"];
  return (
    <div>
      <h4>Lista de Anime Estrenos de Invierno 2023:</h4>
      <ul>
        <li>{listaAnime[0]}</li>
        <li>{listaAnime[1]}</li>
        <li>{listaAnime[2]}</li>
        <li>{listaAnime[3]}</li>
        <li>{listaAnime[4]}</li>
      </ul>
    </div>
  );
}

export default ListAnime;