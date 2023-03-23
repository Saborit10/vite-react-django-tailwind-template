import { useState } from "react";
import "./App.css";

const LOGO_CLASS = "max-w-[150px] max-h-[150px]";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App flex flex-col items-center w-full h-full font-sans text-gray-800 justify-center ">
      <div className="flex flex-row mb-36  gap-10 items-center">
        <a href="https://vitejs.dev" target="_blank">
          <img
            src="http://localhost:8000/static/vite-logo.png"
            className={LOGO_CLASS}
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev/" target="_blank">
          <img
            src="http://localhost:8000/static/react-logo.png"
            className={LOGO_CLASS}
            alt="React logo"
          />
        </a>
        <a href="https://www.djangoproject.com/" target="_blank">
          <img
            src="http://localhost:8000/static/django-logo.png"
            className={LOGO_CLASS}
            alt="Django logo"
          />
        </a>
        <a href="https://tailwindcss.com/" target="_blank">
          <img
            src="http://localhost:8000/static/tailwind-logo.png"
            className={LOGO_CLASS}
            alt="Tailwind logo"
          />
        </a>
      </div>
      <h1 className="text-6xl text-center mb-36">
        Vite + React + Django + Tailwind
      </h1>
      <div className="flex flex-col mb-12 text-xl items-center">
        <button
          className="bg-indigo-300 hover:bg-indigo-400 transition-colors duration-150 px-4 rounded-md py-2 shadow-md w-fit mb-12"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-600 text-lg">
        Click on the Vite, React, Django and Tailwind logos to learn more
      </p>
    </div>
  );
}

export default App;
