import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  justify-content:center;
  flex-direction: column;
`;

export const Form = styled.form`
  display:flex;
  justify-content:center;
  flex-direction: column;
  align-items: center;
  align-content: center;
  input{
    border-radius: 4px;
    border: 1px solid #bbbb;
    color: #858786;
  }
  button {
  margin-top: 10px;
  border-radius: 40px;
  width:80px;
  background: none;
  border: none;
  background-color:#000;
  color: #fff;
  height: 40px;
  font-weight: 600;
  }
`;