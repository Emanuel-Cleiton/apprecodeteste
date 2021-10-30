import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Teste <code>Teste 2</code> teste 3 de upload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aqui é outro teste
        </a>
      </header>
      <body>
        <h1>Mais Um teste de Upload</h1>
      </body>
    </div>
  );
}

export default App;
