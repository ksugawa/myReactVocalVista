import "./App.css";
import React from "react";
import { AsideBar } from "./components/AsideBar";
import { AddVocab } from "./components/AddVocab";
import { MyVocab } from "./components/MyVocab";

function App() {
  return (
    <>
      <AsideBar />
      <AddVocab />
      <MyVocab />
    </>
  );
}

export default App;
