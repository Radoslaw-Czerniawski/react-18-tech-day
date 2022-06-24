import React, { Suspense, useState, lazy } from 'react';

import Photos from './Photos';

import { photoFetcher } from './utils';

import './App.css';
import { Spinner } from '../../Suspense/src/utils';

// import { QueryClient, QueryClientProvider } from 'react-query';

// const Photos = lazy(() => import('./Photos'));

// const Photos = lazy(
//   () =>
//     new Promise(resolve =>
//       setTimeout(() => {
//         resolve(import('./Photos'));
//       }, 5000)
//     )
// );

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       suspense: true,
//     },
//   },
// });

const url = 'https://jsonplaceholder.typicode.com/photos';

function App() {
  const [resource, setResource] = useState(photoFetcher(url));
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        gap: '15px',
      }}
    >
      {/* <Suspense fallback={<Spinner />}> */}
      <Photos resource={resource} />
      {/* </Suspense> */}
    </div>
  );
}

export default App;
