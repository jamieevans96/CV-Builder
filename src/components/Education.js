import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';

class Education extends React.Component {
  constructor() {
    super()

    this.state = {
      editToggle: true,
      uniInput: '',
      degreeInput: '',
      gradeInput: 'First',
      yearInput: '2020'
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

  getYear(val) {
    return new Date().getFullYear() - val
  }

  render() {
    return (
      <div className='container my-5'>
        <h1 className='mb-3'>University Education</h1>
        <Form noValidate>
          <Form.Group>
            <Form.Label>University</Form.Label>
            <div style={{height: '38px'}}>
              <Form.Control type="text" placeholder="Enter university name" name='uniInput' required 
                onChange={this.handleInput}
                style={this.state.editToggle ? {display: 'block'} : {display: 'none'}}/>
              <div className='lead'
                style={this.state.editToggle ? {display: 'none'} : {display: 'block'}}>{this.state.uniInput}
              </div>
            </div>
          </Form.Group>
  
          <Form.Group>
            <Form.Label>Degree</Form.Label>
            <div style={{height: '38px'}}>
              <Form.Control type="email" placeholder="Enter degree name" name='degreeInput' required 
                onChange={this.handleInput}
                style={this.state.editToggle ? {display: 'block'} : {display: 'none'}}/>
              <div className='lead'
                style={this.state.editToggle ? {display: 'none'} : {display: 'block'}}>{this.state.degreeInput}
              </div>
            </div>
          </Form.Group>
  
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Grade</Form.Label>
              <div style={{height: '38px'}}>
                <Form.Control as="select" custom name='gradeInput' required
                  onChange={this.handleInput}
                  style={this.state.editToggle ? {display: 'block'} : {display: 'none'}}>
                  <option disabled>Choose your grade</option>
                  <option>First</option>
                  <option>Upper Second 2:1</option>
                  <option>Lower Second 2:2</option>
                  <option>Third 3</option>
                  <option>Fail</option>
                </Form.Control>
                <div className='lead'
                  style={this.state.editToggle ? {display: 'none'} : {display: 'block'}}>{this.state.gradeInput}
                </div>
              </div>
            </Form.Group>
  
            <Form.Group as={Col}>
              <Form.Label>Graduation Year</Form.Label>
              <div style={{height: '38px'}}>
                <Form.Control as="select" custom name='yearInput' required
                  onChange={this.handleInput}
                  style={this.state.editToggle ? {display: 'block'} : {display: 'none'}}>
                  <option disabled>Choose your year</option>
                  <option>{this.getYear(0)}</option>
                  <option>{this.getYear(1)}</option>
                  <option>{this.getYear(2)}</option>
                  <option>{this.getYear(3)}</option>
                  <option>{this.getYear(4)}</option>
                </Form.Control>
                <div className='lead'
                  style={this.state.editToggle ? {display: 'none'} : {display: 'block'}}>{this.state.yearInput}
                </div>
              </div>
            </Form.Group>
          </Form.Row>
  
          <Button onClick={this.handleSubmit}>{this.state.editToggle ? 'Submit' : 'Edit'}</Button>
        </Form>
      </div>
    );
  }
}

export default Education;
