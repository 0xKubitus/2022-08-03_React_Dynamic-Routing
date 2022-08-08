import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import Home from "pages/Home";
import About from "pages/About";
import Documentation from "pages/Documentation";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
