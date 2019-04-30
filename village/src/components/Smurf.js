import React from 'react';
import {Link} from 'react-router-dom';

const Smurf = props => {
  
const deleteSmurf = e => {
  e.preventDefault();
  props.deleteSmurf(props.id);
};

const setActiveSmurf = e => {
  e.preventDefault();
  props.setActiveSmurf(props.smurf);
  props.history.push('/update-form');
};

  return (
    <div className="smurfCard">
      <h3>Name: {props.name}</h3>
      <strong>Height: {props.height} tall</strong>
      <p>Age: {props.age} smurf years old</p>
      <button onClick={deleteSmurf}>Delete Smurf</button>
      <button onClick={setActiveSmurf}>Update Smurf</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

