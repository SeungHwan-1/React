import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

function LayOut({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet/>
      </>
  );
}

export default LayOut;
