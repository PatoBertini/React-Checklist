import React from "react";
import "./checklist.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Checklist = ({
  id,
  texto,
  completada,
  completarTarea,
  eliminarTarea,
}) => {
  return (
    <div
      className={completada ? "tareaContenedor completada" : "tareaContenedor"}
    >
      <div className="tareaTexto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div className="tareaContenedorIcono" onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className="tareaIcono" />
      </div>
    </div>
  );
};

export default Checklist;
