import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ReactComponent as Logo } from '../public/vite.svg'
import { ReactComponent as Face } from "@material-design-icons/svg/filled/face.svg";

function App() {
  return (
    <div className="App">
      <Logo />
      <Face style={{width: 100, height: 100, background: 'pink'}}/>
    </div>
  );
}

export default App;
