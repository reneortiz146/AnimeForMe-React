import React from "react";

//let counter = 0;

function Counter() {
  const [counter, setCounter] = React.useState(0);

  function incrementar() {
    setCounter(counter + 1);
    //console.log(counter);
  }

  return (
    <div>
        <h5>{counter} <button onClick={incrementar}>+</button></h5>
    </div>
  );
}

export default Counter;
