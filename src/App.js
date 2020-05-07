import React, { useState, useReducer } from 'react';
import './App.css';

const tareasReducer = (tareas, accion) => {
  if (accion.type === "MARCAR_COMPLETADA") {
    return tareas.map((tarea) => {
      if (tarea.id === accion.payload.id) {
        return {...tarea, completada: !tarea.completada}
      }
      else {
        return tarea;
      }
    })
  }
  else return tareas
}
const tareas = [
  {
    id: 0,
    nombre: 'Aprender Hooks',
    completada: true,
  },
  {
    id: 1,
    nombre: 'Aprender Reducer',
    completada: false,
  },
  {
    id: 2,
    nombre: 'Aprender Context',
    completada: false,
  },
]


const App = () => {
  // le tenemos que pasar un reducer y un estado inicial
  // nos devuelve info modificada y un dispatc

  const [tareasModificadas, dispatch] = useReducer(tareasReducer, tareas)

  const handleChange = (idParams) => {
    const accion = {
      type: "MARCAR_COMPLETADA",
      payload: {
        id: idParams
      }
    }

    dispatch(accion)
  };

  console.log(tareasModificadas);
  return (
    <div className="App">
      {tareasModificadas.map((tarea) => (
        <div key={tarea.id}>
          {tarea.nombre}
          <input
            type="checkbox"
            onChange={() => handleChange(tarea.id)}
            checked={tarea.completada}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
