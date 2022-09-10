import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import "./css/style.css";
import Button from "./components/button";

function App() {

  //criando um estado vulgo varivael, feito com uma desconstrução do array
  const [adicionar, setAdd] = useState("");//use state retorna um array

  function addProduto() {
    setAdd("ola");
  }
  return (
    <main>
     
    <div>
    <h2>Lista do Yago</h2>
      <form>
    <input type="number" name="numero1" placeholder='What needs to be done?'/>
     <Button className='add' onClick = {addProduto} texto = "Add"></Button>
    </form>
   
   </div>
    </main>
  );
}

export default App;
