import { TextForm } from './components/TextForm';
import './App.css';
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import React, { useState } from 'react';
import Alert from './components/Alert';


function App()
{
  // eslint-disable-next-line
  const [mode, setMode] = useState("dark");
  const toggleMode = () =>
  {
    if (mode === "dark")
    {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
    else
    {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(60, 63, 65)";
    }
  };

  return (

    <div className='App'>
      <NavBar name="TextFormatter" mode={mode} toggleMode={toggleMode} />
      <Alert />
      <TextForm mode={mode} />
      <Footer mode={mode} />
    </div>

  );
}

export default App;
