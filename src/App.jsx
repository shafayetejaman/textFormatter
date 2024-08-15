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
  const [alert, setAlert] = useState(null);

  const showAlert = (text, alertType) =>
  {
    setAlert({
      text: text,
      alertType: alertType,
    });

    setTimeout(() =>
    {
      setAlert(null);
    }, 2500);
  };

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

      <Alert alert={alert} />
      <TextForm mode={mode} showAlert={showAlert} />
      <Footer mode={mode} />
    </div>

  );
}

export default App;
