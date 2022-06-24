import React from 'react';

import Photos from './Photos';

import './App.css';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        gap: '15px',
      }}
    >
      <Photos />
    </div>
  );
}

export default App;
