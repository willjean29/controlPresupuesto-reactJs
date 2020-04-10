import React, { useState } from 'react';
import Error from './Error';
import shortId from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ({agregarGasto}) => {
  // definir los states para el gasto y su cantidad
  const [gasto, setGasto] = useState('');
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false)

  // definir la cantidad del gasto
  const definirCantidad = (e) => {
    const valor = parseInt(e.target.value);
    if(isNaN(valor)){
      setCantidad('')
    }else{
      setCantidad(valor);
    }
  }

  // funcion para agregar el gasto
  const registrarGasto = (e) => {
    e.preventDefault();
    // validar
    if(cantidad < 1 || isNaN(cantidad) || gasto.trim() === ''){
      setError(true);
      return;
    }
    setError(false);

    // construir el gasto
    const gastoOb = {
      id: shortId.generate(),
      nombre: gasto,
      cantidad
    }
    // pasar el gasto al state principal
    agregarGasto(gastoOb);
    // resetear el form
    setCantidad(0);
    setGasto('')
  }
  return (  
    <form onSubmit={registrarGasto}>
      <h2>Agregar tus gastos aqui</h2>
      {error ? <Error mensaje="Ambos campos son obligatorios  resupuesto incorrecto"/> : null}
      <div className="campo">
        <label htmlFor="">Nombre Gasto</label>
        <input 
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={gasto}
          onChange={e => setGasto(e.target.value)}
        />
      </div>
      <div className="campo">
        <label htmlFor="">Cantidad Gasto</label>
        <input 
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={definirCantidad}
        />
      </div>
      <div className="campo">
        <input 
          type="submit"
          className="button-primary u-full-width"
          value="Agregar Gasto"
        />
      </div>
    </form>
  );
}

Formulario.propTypes = {
  agregarGasto: PropTypes.func.isRequired
}
export default Formulario;
