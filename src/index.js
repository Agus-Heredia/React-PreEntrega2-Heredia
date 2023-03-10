import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import TShirtsSection from './Components/camisetas/TshirtsSection';
import ShoesSection from './Components/zapatillas/shoesSection';
import ShortsSection from './Components/Shorts/ShortsSection';
import ItemListDetail from './Components/ItemDetail/ItemListDetail';
import ItemListContainer from './Components/ItemContainer/itemListContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Navbar />
    

      <Routes>

        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/item/item:id' element={<ItemListDetail />} />
        <Route exact path='/zapatillas/' element={<ShoesSection />} />
        <Route exact path='/camisetas' element={<TShirtsSection />} />
        <Route exact path='/pantalones' element={<ShortsSection />} />

      </Routes>
    </BrowserRouter>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

