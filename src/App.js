import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === `light`) {
      setMode(`dark`);
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled.", "success");
    } else {
      setMode(`light`);
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been disabled.", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch> 
            <Route exact path="/about"> 
              <About  mode={mode} />
            </Route>
              <Route exact path="/">
              <TextForm
                heading="Enter the text to Analyze"
                mode={mode}
                showAlert={showAlert}
              />
             </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
