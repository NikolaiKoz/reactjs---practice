import { useState } from "react"


function App() {

  const [state, setState] = useState({
    mensaje: "Hola mundo",
    numero: 3
  })


  return (
    <div>
      <h2>useState Hhook example</h2>
      <p>{state.mensaje}</p>
      <p>{state.numero}</p>
    </div>
  )
}

export default App