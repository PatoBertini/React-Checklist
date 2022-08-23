import React, { useState } from "react";
import "./form.css";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  // 1ro creamos un useState con un string vacio en una constante y una function, en la cual manejarCambio va a almacenar en la variable input lo que vos escribas en el formulario.
  // 2do una vez que tenemos la info almacenada en el input hay que manejarCambio en el form, cada vez que apretamos el boton se toma la data del input y se crea una tarea nueva como un objeto con los parametros que le pasamos

  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };
    props.onSubmit(tareaNueva);
  };

  return (
    <form onSubmit={manejarEnvio} className="tarea-formulario">
      <input
        type="text"
        className="tarea-input"
        placeholder="Escribe una tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">Agregar tarea</button>
    </form>
  );
};

export default Form;
