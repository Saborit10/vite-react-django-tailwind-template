import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="">
        <a href="https://vitejs.dev" target="_blank">
          <img
            src="http://localhost:8000/static/vite-logo.png"
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a href="" target="_blank">
          <img
            src="http://localhost:8000/static/react-logo.jpg"
            className="logo"
            alt="React logo"
          />
        </a>
        <a href="" target="_blank">
          <img
            src="http://localhost:8000/static/django-logo.png"
            className="logo"
            alt="Django logo"
          />
        </a>
        <a href="" target="_blank">
          <img
            src="http://localhost:8000/static/tailwind-logo.png"
            className="logo"
            alt="Tailwind logo"
          />
        </a>
      </div>
      <h1 className="text-3xl  f">Vite + React + Django + Tailwind</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
