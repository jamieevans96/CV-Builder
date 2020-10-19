import React from 'react'
import General from './components/General'
import Work from './components/Work'
import Education from './components/Education'
import { Jumbotron } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Jumbotron>
        <h1 className='display-3 text-center'>CV Builder</h1>
      </Jumbotron>
      <General />
      <Education />
      <Work />
    </div>
  );
}

export default App;
