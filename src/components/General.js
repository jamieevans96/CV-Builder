import React from 'react';
import { Form, Button } from 'react-bootstrap';

class General extends React.Component {
  constructor() {
    super()

    this.state = {
      editToggle: true,
      nameInput: '',
      emailInput: '',
      numberInput: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleSubmit() {
    this.setState({editToggle: !this.state.editToggle})
  }

  handleInput(e) {
    const { name, value } = e.target
    this.setState({[name]: value})
  }
  
  render() {
    return (
      <div className='container my-5'>
        <h1 className='mb-3'>General Information</h1>
        <Form noValidate>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <div style={{height: '38px'}}>
              <Form.Control type="text" placeholder="Enter name" name='nameInput' required
                onChange={this.handleInput}
                style={this.state.editToggle ? {display: 'block'} : {display: 'none'}} />
              <div className='lead'
                style={this.state.editToggle ? {display: 'none'} : {display: 'block'}}>{this.state.nameInput}</div>
            </div>
          </Form.Group>
  
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <div style={{height: '38px'}}>
              <Form.Control type="email" placeholder="Enter email" name='emailInput' required
                onChange={this.handleInput}
                style={this.state.editToggle ? {display: 'block'} : {display: 'none'}} />
              <div className='lead'
                style={this.state.editToggle ? {display: 'none'} : {display: 'block'}}>{this.state.emailInput}</div>
            </div>
          </Form.Group>
  
          <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <div style={{height: '38px'}}>
              <Form.Control type="tel" placeholder="Enter phone number" pattern="[0-9]{11}" name='numberInput' required
                onChange={this.handleInput}
                style={this.state.editToggle ? {display: 'block'} : {display: 'none'}} />
              <div className='lead'
                style={this.state.editToggle ? {display: 'none'} : {display: 'block'}}>{this.state.numberInput}</div>
            </div>
          </Form.Group>
  
          <Button onClick={this.handleSubmit}>{this.state.editToggle ? 'Submit' : 'Edit'}</Button>
        </Form>
      </div>
    );
  }
}

export default General;
