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
      <Home />
      <About />
      <Documentation />
    </div>
  );
}

export default App;
