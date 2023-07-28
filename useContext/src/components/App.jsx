import React, { useState } from "react";
import { Hijo } from "./Hijo";

export const userContext = React.createContext();

function App() {
  const [user, setUser] = useState(null);

  const cambiarLogin = () => {
    if (user) {
      setUser(null);
    } else {
      setUser({
        name: "Jose Luis Vallejos",
        email: "joseluisvallejos1995@gmail.com",
      });
    }
  };
  return (
    <userContext.Provider value={user}>
      <button onClick={cambiarLogin} >Cambiar Login</button>
      <div>
        <Hijo />
      </div>
    </userContext.Provider>
  );
}

export default App;
