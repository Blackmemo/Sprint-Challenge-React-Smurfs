import React from 'react';

const Smurf = props => {
  
const deleteSmurf = e => {
  e.preventDefault();
  props.deleteSmurf(props.id);
};

  return (
    <div className="smurfCard">
      <h3>Name: {props.name}</h3>
      <strong>Height: {props.height} tall</strong>
      <p>Age: {props.age} smurf years old</p>
      <button onClick={deleteSmurf}>Delete Smurf</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

