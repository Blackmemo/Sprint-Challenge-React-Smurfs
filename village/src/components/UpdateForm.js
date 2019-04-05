import React, { Component } from 'react';

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }


  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className='formCon'>
      <h1>Add a Smurf</h1>
        <form className='smurfForm' onSubmit={() => this.props.updateSmurf(this.props.activeSmurf.id, this.state)}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button className="formBtn" type="submit">Update Smurf</button>
        </form>
      </div>
    );
  }
}

export default UpdateForm;