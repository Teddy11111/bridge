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
            <span className='tab-text'>Explorer</span>
          </div>
          <div className='feed-tab'>
            <span className='tab-text'>Feed</span>
          </div>
        </div>
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