import React from "react";

function TellTime() {
  return (
    <h4>
      {" "}
      La hora es: {new Date().getHours()}:{new Date().getMinutes()}
    </h4>
  );
}

export default TellTime;