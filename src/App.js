import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const [message, setMessage] = useState("Default Message");
  useEffect(() => {
    axios
      .get("https://cyan-faithful-bream.cyclic.app/home")
      .then(function (response) {
        // handle success
        console.log(response);
        setMessage(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setMessage("Errorrr");
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {message}
        </a>
      </header>
    </div>
  );
}

export default App;
