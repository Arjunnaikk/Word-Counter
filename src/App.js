import Alert from './components/Alert';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
// import logo from './logo.svg';
import React, { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState(`light`);
  const [cmode, setCmode] = useState(`dark`);
  const [cmt, setCmt] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    }) 
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const removeBodyColor = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
  }

  const toggleChangeMode = (cls) => {
    removeBodyColor()
    document.body.classList.add('bg-'+cls)

  }
  const toggleMode = () => {
    removeBodyColor()
    if (mode === `light`) {
      setMode(`dark`);
      setCmode(`light`);
      setCmt("Enable Light Mode")
      showAlert("Dark mode has been enabled", "success")
      document.body.style.backgroundColor = "#042743"
    }
    else {
      setMode(`light`);
      setCmode(`dark`);
      setCmt("Enable Dark Mode")
      showAlert("Light mode has been enabled", "success")
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title="LetsReact" aboutText="About" mode={mode} cmode={cmode} cmt={cmt} toggleMode={toggleMode} toggleChangeMode={toggleChangeMode} />
      <Alert alert={alert} />
      <div className="container">
      <Routes>
            <Route exact path='/about' element={<About mode={mode}/>} />
            <Route exact path='/' element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} toggleMode={toggleMode} />}>
            </Route>

          </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
