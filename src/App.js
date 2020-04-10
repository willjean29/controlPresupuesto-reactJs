import React ,{useState}  from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';
import Error from './components/Error';
function App() {
  // definir los states para el presupuesto y el restante
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [pregunta, setPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);

  const [error, setError] = useState(false);

  // funcion para agregar un nuevo gasto
  const agregarGasto = (gasto) => {
    setGastos([
      ...gastos,
      gasto
    ]);
    const restanteActual = restante-gasto.cantidad;
    if(restanteActual <= 0){
      setError(true);
      return;
    }
    setError(false);
    setRestante(restanteActual);
  }

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        {error ? <Error mensaje="No puede exceder su presuesto"/> :null}
        <div className="contenido-principal contenido">
          {pregunta 
            ?<Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setPregunta={setPregunta}
            />
            :<div className="row">
              <div className="one-half column">
                <Formulario
                  agregarGasto={agregarGasto}
                />
              </div>
              <div className="one-half column">
                <Listado
                  gastos={gastos}
                />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
