import React, { useState } from 'react';
import { saveInDb } from '../../constants/saveInDb';
import { 
  Container, 
  FormContainer,
  Sentences,
  InputEmail,
  ActionButton
} from './style';

function Form() {
  const [email, setEmail] = useState('');

  return (
    <Container>
      <FormContainer onSubmit={(e) => saveInDb(e, email, setEmail)}>
        <Sentences>Would you like to receive our offers?</Sentences>
        <Sentences>Subscribe your email</Sentences>
        <InputEmail 
          type="email" 
          placeholder='email@email.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        <ActionButton type='submit'>
          Subscribe
        </ActionButton>
      </FormContainer>
    </Container>
  );
}

export default Form;