import React, {useState, useEffect} from 'react';


const Console = () => {
  // Объявление новой переменной состояния «count»
  const [output, setCount] = useState('');

  return (
    <div>
      <p>{output}</p>
      <button>
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