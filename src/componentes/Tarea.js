import React from 'react';
import '../hojas-de-estilo/Tarea.css';
import { FiTrash2 } from "react-icons/fi";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div
        className='tarea-texto'
        onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div
        className='tarea-contenedor-iconos'
        onClick={()=> eliminarTarea(id)}>
        <FiTrash2 className='tarea-icono' />
      </div>
    </div>
  );
}

export default Tarea;