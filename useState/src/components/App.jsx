import { useState } from "react";

function App() {
  const [state, setState] = useState({
    mensaje: "Hola mundo",
    numero: 3,
  });

  const handleClick = () => {
    setState({
      mensaje: "Adios",
      numero: state.numero + 1,
    })
  };

  return (
    <div>
      <h2>useState hook example</h2>
      <p>{state.mensaje}</p>
      <p>{state.numero}</p>
      <button onClick={handleClick}>Cambiar estado</button>
    </div>
  );
}

export default App;
