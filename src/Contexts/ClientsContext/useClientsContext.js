import { createContext, useState } from 'react';

export const useClientContext = createContext(); 

const CartContextProvider = ({ children }) => {

  const [client, setClient] = useState([]);
  const [verifyClient, setVerifyClient] = useState(false);

  const hasClientLogged = localStorage.getItem('hasClientLogged');
  const clientStore = JSON.parse(hasClientLogged) || [];

  if(clientStore && !verifyClient) {
    setClient(client);
    setVerifyClient(true);
  }

  function addClient(clientValues) {
    setClient([...client, clientValues]); 
    const users = clientStore;
    users.push(clientValues);
    localStorage.setItem('hasClientLogged', JSON.stringify(users));   
    alert('Cadastrado com sucesso');
  }

  return (
    <useClientContext.Provider value={{ addClient }}>
      { children }
    </useClientContext.Provider>
  )

};

export default CartContextProvider;