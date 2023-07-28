import { useContext } from "react";
import { userContext } from "./App";

export const Hijo = () => {
  const user = useContext(userContext);

  return (
    <div>
      Componente hijo
      {user && <p>Hola {user.name}</p>}
    </div>
  );
};
