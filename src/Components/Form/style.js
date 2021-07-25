import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FormContainer = styled.form`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #858687;
  width: 360px;
`;

export const Sentences = styled.p`
  color: #000;
  font-size: 18px;
`;

export const InputEmail = styled.input`
  border-radius: 4px;
  margin-bottom: 10px;
  border: 1px solid #858687;
`;

export const ActionButton = styled.button`
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  background: none;
  background-color: #000;
  outline: none;
  width: 120px;
  height: 40px;
  cursor: pointer;
  border: none;
  margin-bottom: 10px;
`;