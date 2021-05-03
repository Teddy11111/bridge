import React, {useState, useEffect} from 'react';
import './App.global.css';
import { ipcRenderer } from 'electron'


const Console = () => {
  // Объявление новой переменной состояния «count»
  const [output, setCount] = useState('');

  ipcRenderer.on('stdout', (event, arg) => {
    setCount(output + '\n' + arg)
  })

  return (
    <div>
      <p>{output}</p>
      <button onClick={() => ipcRenderer.send('cmd', ['git', 'status'])}>
        Press me
      </button>
    </div>
  );
}

export default function App() {
  return (
    <Console />
  );
}