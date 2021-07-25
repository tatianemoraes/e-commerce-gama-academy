import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonSearch = styled.button`
  background: none;
  border: none;
  margin-right: 5px;
  cursor: pointer;
`;

export const InputSearch = styled.input`
  border-radius: 4px;
  border: 1px solid #bbbb;
  color: #858786;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
`;

export const H1 = styled.h1`
  text-align: center;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonLike = styled.button`
  background: none;
  border: none;
  margin-right: 5px;
  cursor: pointer;
`;

export const ButtonAccount = styled.button`
  background: none;
  border: none;
  margin-right: 5px;
  cursor: pointer;
`;

export const ButtonBag = styled.button`
  background: none;
  border: none;
  margin-right: 5px;
  cursor: pointer;
`;

export const Count = styled.p`
  z-index: 999;
  position: fixed;
  margin-top: -26px;
  margin-left: 16px;
`;