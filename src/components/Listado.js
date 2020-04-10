import React from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';
const Listado = ({gastos}) => {
  return (  
    <div className="gastos-realizados">
      <h2>Listado</h2>
      {gastos.map(gasto => (
        <div className="class" key={gasto.id}>
          <Gasto 
            gasto={gasto}     
          />
        </div>
      ))}
    </div>
  );
}

Listado.propTypes = {
  gastos: PropTypes.array.isRequired
}
export default Listado;
