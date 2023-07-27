import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

function UserDetail({ UserId }) {
  const [user, setUser] = useState({});

  const getUser = useCallback(async () => {
    const response = await fetch(
      "https://peticiones.online/api/users/" + UserId
    );
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    setUser(jsonResponse);
  }, [UserId]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return <div>{user.error}</div>;
}

UserDetail.propTypes = {
  UserId: PropTypes.string.isRequired,
};

export default UserDetail;


/**
 * Documentación del componente "UserDetail":

Descripción:
El componente "UserDetail" es un componente funcional de React que muestra los detalles de un usuario obtenidos a través de una API externa. El componente utiliza varios hooks de React para lograr su funcionalidad y para garantizar un rendimiento óptimo al manejar el estado y los efectos secundarios.

Props:
UserId (string, requerido): El ID del usuario del cual se obtendrán los detalles. Este ID se utiliza para hacer una solicitud a la API y recuperar la información del usuario correspondiente.
Hooks utilizados:
useState:

Descripción: useState es un hook que permite agregar estado local a componentes funcionales. Con este hook, el componente puede mantener y actualizar el estado del objeto user, que almacena los detalles del usuario obtenidos de la API.

Uso en el componente: Se utiliza para declarar el estado user y su función de actualización setUser que permite modificar el estado.

useCallback:

Descripción: useCallback es un hook que permite memorizar una función para que no se vuelva a crear en cada renderizado, a menos que cambien sus dependencias. Esto mejora el rendimiento evitando la creación innecesaria de funciones en cada renderizado.

Uso en el componente: getUser es una función que se declara utilizando useCallback. Esta función se utiliza para realizar una solicitud a la API para obtener los detalles del usuario con el UserId proporcionado. La función se memoiza utilizando [UserId] como dependencia para asegurarse de que se vuelva a crear solo cuando cambie el valor de UserId.

useEffect:

Descripción: useEffect es un hook que permite realizar efectos secundarios en componentes funcionales. Se ejecuta después de que el componente se renderice y puede ser utilizado para realizar tareas como llamadas a API, actualizaciones de estado, suscripciones a eventos, entre otros.

Uso en el componente: Se utiliza para invocar la función getUser cuando el componente se monta (cuando se renderiza por primera vez) y cuando cambie la dependencia getUser. Al pasar [getUser] como dependencia, nos aseguramos de que getUser se vuelva a ejecutar cada vez que se actualice la función.

Funcionamiento:
Cuando el componente se monta, useEffect se ejecuta y llama a la función getUser para obtener los detalles del usuario con el UserId proporcionado.

La función getUser utiliza fetch para hacer una solicitud a la API con el UserId y espera la respuesta.

Una vez que la respuesta se recibe, se convierte en formato JSON y se actualiza el estado user utilizando setUser.

El componente se renderiza de nuevo, y se muestra el valor de user.error en un elemento <div>. Se asume que la API responde con un objeto que contiene una propiedad error que se mostrará si ocurre algún problema en la solicitud.

Nota:
El componente actualmente solo muestra user.error en la interfaz, lo que implica que se debe proporcionar una respuesta de la API que contenga esa propiedad. Si se requiere mostrar más detalles del usuario, el componente puede modificarse para renderizar otros atributos de user, siempre y cuando estén disponibles en la respuesta de la API. Además, se deben agregar manejo de errores y estados de carga para mejorar la experiencia del usuario en situaciones donde la solicitud a la API falle o tome tiempo en completarse.
 */