import React, {useState, useEffect} from 'react';
import './App.css'

const Console = () => {
  // Объявление новой переменной состояния «count»
  const [output, setCount] = useState('');

  return (
    <div className='console'>
      <p>
      </p>
    </div>
  );
}

const DirTree = () => {

  return (
    <>
    <div className='left-side-bar'>
    </div>
    <div className='workspace'>
    <Console />
    </div>
    </>
    
  )

}

export default function App() {
  return (
    <DirTree />
  );
}