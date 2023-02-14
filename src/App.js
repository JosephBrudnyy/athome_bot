import './App.css';
import React from 'react';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import {Route, Routes} from 'react-router-dom'
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';
import MenuList from './components/MenuList/MenuList';




function App() {

  const {onToggleButton, tg} = useTelegram()

  React.useEffect(() => {
    tg.ready();
  }, [tg])


  return (
    <div className="App">
     <Routes>
        <Route index element={<MenuList/>} /> 
        <Route path={'/item'} element={<ProductList />} />
     </Routes>
    </div>
  );
}

export default App;
