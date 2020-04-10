import React, { Fragment,useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';
const Pregunta = ({setPresupuesto,setRestante,setPregunta}) => {
  // definir el state del presupuesto
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  // funcion que lee y actualiza la cantidad
  const definirPresupuesto = (e) => {
    const valor = parseInt(e.target.value);
    setCantidad(valor);
  }

  // submit para enviar el presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault();
    // validar
    if(cantidad < 1 || isNaN(cantidad)){
     setError(true);
      return;
    }
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setPregunta(false);
  }
  return (  
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="El presupuesto es incorrecto"/> : null}
      <form onSubmit={agregarPresupuesto}>
          <input 
            type="number"
            className="u-full-width"
            placeholder="Coloca tu presupuesto"
            onChange={definirPresupuesto}
          />
          <input 
            type="submit"
            className="button-primary u-full-width"
            value="Defenir Presupuesto"
          />
      </form>
    </Fragment>
  );
}

Pregunta.propTypes = {
  setPresupuesto: PropTypes.func.isRequired,
  setRestante:PropTypes.func.isRequired,
  setPregunta: PropTypes.func.isRequired
}
export default Pregunta;