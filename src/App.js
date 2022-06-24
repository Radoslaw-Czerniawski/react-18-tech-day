import React, { useCallback, useState } from 'react';

import { MappedInput } from './MappedInput';

import './App.css';

function App() {
  const [inputVal, setInputVal] = useState('');
  const [inputMapped, setInputMapped] = useState([]);

  const handleChange = useCallback(e => {
    setInputVal(e.target.value);

    const mappedMapper = [];

    if (e.target.value === '') {
      setInputMapped([]);
      return;
    }

    for (let i = 0; i < 20000; i++) {
      mappedMapper.push(e.target.value);
    }

    setInputMapped(mappedMapper);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        gap: '15px',
      }}
    >
      <input style={{ fontSize: '20px' }} value={inputVal} onChange={handleChange} />
      <MappedInput value={inputMapped} />
    </div>
  );
}

export default App;
