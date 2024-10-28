import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import LayOut from './layout/LayOut';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Order from './pages/Order';
import CoffeeDetail from './pages/CoffeeDetail';

function App() {
  const [order, setOrder] = useState([]);

  const addToOrder = (coffee) => {
    setOrder([...order, coffee]);
  };

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOut/>}>          
          <Route index element={<Home/>}/>
          <Route path="/menu" element={<Menu/>} />
          <Route path="/menu/:id" element={<CoffeeDetail addToOrder={addToOrder} />} />
          <Route path="/order" element={<Order order={order} />} />
          </Route>

        </Routes>
      </BrowserRouter>
 

  );
}

export default App;
