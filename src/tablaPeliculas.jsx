import React from "react";
import peliculas from "./Peliculas";

function TablePeliculas() {
  const [Clover, Gridman] = peliculas; //Destructurar arreglo
  const {
    nombre: nombreClover,
    genero: generoClover,
    fecha: { day: dayClover, month: monthClover, year: yearClover },
    saga: sagaClover
  } = Clover;
  const {
    nombre: nombreGridman,
    genero: generoGridman,
    fecha: { day: dayGridman, month: monthGridman, year: yearGridman },
    saga: sagaGridman
  } = Gridman;

  return (
    <table>
      <tr>
        <th scope="col">
          <strong>Nombre</strong>
        </th>
        <th scope="col">
          <strong>Genero</strong>
        </th>
        <th scope="col">
          <strong>Fecha</strong>
        </th>
        <th scope="col">
          <strong>Saga</strong>
        </th>
      </tr>

      <tr>
        <td>{nombreClover}</td>
        <td>{generoClover}</td>
        <td>{dayClover + " " + monthClover + " " + yearClover}</td>
        <td>{sagaClover}</td>
      </tr>

      <tr>
        <td>{nombreGridman}</td>
        <td>{generoGridman}</td>
        <td>{dayGridman + " " + monthGridman + " " + yearGridman}</td>
        <td>{sagaGridman}</td>
      </tr>
    </table>
  );
}

export default TablePeliculas;
