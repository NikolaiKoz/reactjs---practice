import { useUseContext, useUserToggleContext } from "../providers/userProvider";

export const Hijo = () => {
  const user = useUseContext();

    const cambiaLogin = useUserToggleContext();

  return (
    <div>
      Componente hijo
      {user && <p>Hola {user.name}</p>}
      <button onClick={cambiaLogin}>Cambiar Login</button>
    </div>
  );
};
