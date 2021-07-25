import React from 'react';
import Home from './page/Home';
import Register from './page/Register';
import GlobalStyle from './Style/GlobalStyle';
import CartContextProvider from './Contexts/CartContext/useCartContext';
import ClientsContextProvider from './Contexts/ClientsContext/useClientsContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <ClientsContextProvider>
      <CartContextProvider>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/register' component={Register}/>
          </Switch>
        </Router>
      </CartContextProvider>
    </ClientsContextProvider>
  );
}

export default App;
