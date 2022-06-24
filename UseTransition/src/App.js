import React, { useCallback, useState, useTransition } from 'react';

import { MappedInput } from './MappedInput';
import { Spinner } from '../../Suspense/src/utils';

import './App.css';

function App() {
  const [inputVal, setInputVal] = useState('');
  const [inputMapped, setInputMapped] = useState([]);

  const [isPending, startTransition] = useTransition();

  const handleChange = useCallback(e => {
    setInputVal(e.target.value);

    startTransition(() => {
      const mappedMapper = [];

      if (e.target.value === '') {
        setInputMapped([]);
        return;
      }

      for (let i = 0; i < 20000; i++) {
        mappedMapper.push(e.target.value);
      }

      setInputMapped(mappedMapper);
    });
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
      {isPending ? <Spinner /> : <MappedInput value={inputMapped} />}
    </div>
  );
}

export default App;
