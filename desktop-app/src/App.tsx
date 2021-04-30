import React from 'react';
import './App.global.css';

const Hello = () => {
  return (
    <div>
      <div className="Hello">
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <button type="button">
          <span>
            Run command
          </span>
          </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Hello />
  );
}