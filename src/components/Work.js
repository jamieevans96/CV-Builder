import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';

class Work extends React.Component {
  constructor() {
    super()

    this.state = {
      editToggle: true,
      companyInput: '',
      jobInput: '',
      descInput: '',
      startInput: '',
      endInput: '',
      dateChecked: true
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleSubmit() {
    this.setState({editToggle: !this.state.editToggle})
  }

  handleInput(e) {
    const { name, value } = e.target
    this.setState({[name]: value})
  }

  handleCheck() {
    const checkVal = this.state.dateChecked ? this.getDate() : ''
    this.setState({endInput: checkVal,
                    dateChecked: !this.state.dateChecked})
  }

  getDate() {
    const now = new Date()

    let dd = String(now.getDate()).padStart(2, '0')
    let mm = String(now.getMonth() + 1).padStart(2, '0')
    let yyyy = now.getFullYear()

    return `${dd}/${mm}/${yyyy}`
  }
  
  render() {
    return (
      <div className='container my-5'>
        <h1 className='mb-3'>Latest Work Experience</h1>
        <Form noValidate>
          <Form.Group>
            <Form.Label>Company</Form.Label>
            <div style={{height: '38px'}}>
              <Form.Control type="text" placeholder="Enter company name" name='companyInput' required 
              onChange={this.handleInput}
              style={this.state.editToggle ? {display: 'block'} : {display: 'none'}} />
              <div className='lead'
                style={this.state.editToggle ? {display: 'none'} : {display: 'block'}}>{this.state.companyInput}
              </div>
            </div>
          </Form.Group>
  
          <Form.Group>
            <Form.Label>Job Title</Form.Label>
            <div style={{height: '38px'}}>
              <Form.Control type="text" placeholder="Enter job title" name='jobInput' required 
              onChange={this.handleInput}
              style={this.state.editToggle ? {display: 'block'} : {display: 'none'}} />
              <div className='lead'
                style={this.state.editToggle ? {display: 'none'} : {display: 'block'}}>{this.state.jobInput}
              </div>
            </div>
          </Form.Group>
  
          <Form.Group>
            <Form.Label>Job Description</Form.Label>
            <div>
              <Form.Control as='textarea' rows="5" type="text" placeholder="Enter job description" name='descInput' required 
              onChange={this.handleInput}
              style={this.state.editToggle ? {display: 'block'} : {display: 'none'}} />
              <div className='lead'
                style={this.state.editToggle ? {display: 'none'} : {display: 'block'}}>{this.state.descInput}
              </div>
            </div>
          </Form.Group>
  
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Date Started</Form.Label>
              <div style={{height: '38px'}}>
                <Form.Control type="date" name='startInput' required 
                onChange={this.handleInput}
                style={this.state.editToggle ? {display: 'block'} : {display: 'none'}}/>
                <div className='lead'
                  style={this.state.editToggle ? {display: 'none'} : {display: 'block'}}>{this.state.startInput}
                </div>
              </div>
            </Form.Group>
  
            <Form.Group as={Col}>
              <Form.Label>{!this.state.dateChecked ? 'Current Job' : 'Date Finished'}</Form.Label>
              <div>
                <div style={{height: '38px'}}>
                  <Form.Control type="date" name='endInput' required
                    disabled={!this.state.dateChecked}
                    onChange={this.handleInput}
                    style={this.state.editToggle ? {display: 'block'} : {display: 'none'}} />
                  <div className='lead'
                    style={this.state.editToggle ? {display: 'none'} : {display: 'block'}}>{this.state.endInput}
                  </div>
                </div>
                <Form.Check className='py-2 position-absolute' type="checkbox" label='This is my current job' 
                  onClick={this.handleCheck} />
              </div>
            </Form.Group>
          </Form.Row>
  
          <Button onClick={this.handleSubmit}>{this.state.editToggle ? 'Submit' : 'Edit'}</Button>
        </Form>
      </div>
    );
  }
}

export default Work;
