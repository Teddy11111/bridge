import React from 'react';
import './App.global.css';
import { ipcRenderer } from 'electron'


ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg)
})

const Hello = () => {
  return (
    <div>
      <div className="Hello">
      </div>
      <h1>BRIDGE</h1>
      <div className="Hello">
        <button onClick={()=>{
         ipcRenderer.send('asynchronous-message', 'ping')
         }} type="button">
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