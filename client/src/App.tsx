import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { Container, Row, Col } from 'react-bootstrap';

import { RegistrationForm } from './registration/RegistrationForm';

function App() {
  return (
    <Container fluid>
          <RegistrationForm />
    </Container>
  );
}

export default App;
