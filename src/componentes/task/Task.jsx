import React from "react";
import styles from "./Task.module.css";
// import Checklist from "../checklist/Checklist";
// import Form from "../checklist/Form";
import ListaDeTareas from "../listaDeTareas/ListaDeTareas";

const Task = () => {
  return (
    <div>
      <div className={styles.contenedorTareas}>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
};

export default Task;
