import React, { useState, useEffect } from 'react';
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
        <div className='tabs'>
          <div className='tree-tab'>
            <span className='tab-text'>ПРОВОДНИК</span>
          </div>
          <div className='feed-tab'>
            <span className='tab-text'>ЛЕНТА</span>
          </div>
        </div>
      </div>
      <div className='workspace'>
        <div className='workspace-tab'></div>
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