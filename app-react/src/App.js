import './App.css';
import ItemListContainer from "./components/ItemListContainer/Itemlistcontainers";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ItemList} from "./components/Itemlist/ItemList"
import Cart from "./components/Cart/Cart";

function App() {
  return (  
    <>
    <BrowserRouter/>
    <NavBar />
    <Routes>
      <Route path='/' element={ItemListContainer}/>
      <Route path='/category' element={ItemListContainer}/>
      <Route path='/cart' element={Cart}/>
      <Route path='/list' element={ItemList}/>
    </Routes>
    <ItemListContainer texto='Bienvenido' />
    <ItemList />
    <Cart />
    </>
  );
}

export default App;
