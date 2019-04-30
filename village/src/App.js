import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {Route, NavLink} from 'react-router-dom';
import Smurf from './components/Smurf';
import UpdateForm from './components/UpdateForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      activeSmurf: undefined
    };
  }

  componentDidMount() {
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      this.setState({
        smurfs: res.data
      })
      })
      .catch(err => {
        console.log(err);
    })
  }

  addSmurf = newSmurf => {
    axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
      this.setState({
        smurfs: res.data
      })
      this.props.history.push('/')
    })
    .catch(err => {
      console.log(err);
    })
  }

deleteSmurf = id => {
  axios
  .delete(`http://localhost:3333/smurfs/${id}`)
  .then(res => {
    this.setState({ smurfs: res.data });
    this.props.history.push('/');
  })
  .catch(err => {
    console.log(err)
  });
};

setActiveSmurf = smurf => {
  this.setState({
    activeSmurf: smurf
  })
}

updateSmurf = (id, updatedInfo) => {
  axios
  .put(`http://localhost:3333/smurfs/${id}`, updatedInfo)
  .then(res => {
    this.setState({ smurfs: res.data });
    this.props.history.push('/');
  })
  .catch(err => {
    console.log(err)
  });
};


  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
    <nav className="navBar">
          <div className="links">
          <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink exact to="/smurf-form">
              Add Smurf
            </NavLink>
          </div>
        </nav>
        
      <Route exact path='/' render={props => <Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} setActiveSmurf={this.setActiveSmurf} /> } />
      <Route path='/smurf-form' render={props => <SmurfForm {...props} addSmurf={this.addSmurf} /> } />
      <Route path='/update-form' render={props => <UpdateForm {...props} activeSmurf={this.state.activeSmurf} updateSmurf={this.updateSmurf} /> } />
      </div>
    );
  }
}

export default App;
