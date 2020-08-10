import React, { useState } from "react";

function LearnHooks() {
  const [name, setName] = useState("Jazz");
  const [state, setState] = useState("Missouri");
  return (
    <div>
      <h1>{name}</h1>
      <h2>{state}</h2>
      <button id="nameButton" onClick={() => setName("Bennie")}>
        set name to Bennie
      </button>
      <button id="stateButton" onClick={() => setState("Kansas")}>
        set state to Kansas
      </button>
    </div>
  );
}

export default LearnHooks;
