import React, { useEffect, useState } from "react";
import {Formulario} from './componente/Formulio'
import {Resultado} from './componente/resultado'
import Header from './componente/Header'
import { Resultadoapi } from './hooks/Resultadoapi';

function App() {
const[guardado,setguardado]=useState(null)

const variable=Resultadoapi(guardado)
console.log(variable)
  return (
<>
    <Header 
          titulo='Buscador de Noticias'
      />

        <div className="container white">
            <Formulario 
              Setguardar={setguardado}
            />

            <Resultado 
            api={variable}
            />
        </div>
    
</>

    );
}

export default App;
