import React, { useContext, useState } from 'react';
import Header from '../Header'; 
import { useClientContext } from '../../Contexts/ClientsContext/useClientsContext';
import { Container,Form } from './style';

function RegisterClient() {

  const [values, setValues] = useState({});
  const { addClient } = useContext(useClientContext);

  const registerClient = (e) => {
    e.preventDefault();
    if(values) {
      addClient(values)
    }
  };

  function dynamicFields(event) {
    setValues({...values, [event.target.name]:event.target.value});
  }

  return (
    <Container>
      <Header />
      <Form onSubmit={ e =>registerClient(e)}>   
        <h1>Would you like to register?</h1>
        <p>Full name:</p>
        <input type="text" value={dynamicFields.fullname} name='fullname' onChange={ e => dynamicFields(e)}/>
        <p>Email:</p>
        <input type="email" value={dynamicFields.email} name='email' onChange={ e => dynamicFields(e)} />
        <p>CEP:</p>
        <input type="text"value={dynamicFields.cep} name='cep' onChange={ e => dynamicFields(e)} />
        <p>Address:</p>
        <input type="text" value={dynamicFields.address} name='address' onChange={ e => dynamicFields(e)}/>
        <button type='submit'>Register</button>
      </Form>
    </Container>
  );
}

export default RegisterClient;