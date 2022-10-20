import React from "react"
import "./App.css"
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import Navbar from './navbar/Navbar';

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer/>
    </>
  )
}

export default App