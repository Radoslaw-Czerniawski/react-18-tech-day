import React, {
  lazy,
  Suspense,
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from 'react';

import { MappedInput } from './MappedInput';
import Photos from './Photos';

import { photoFetcher } from './utils';

import './App.css';

import spinner from './spinner.gif';
import { QueryClient, QueryClientProvider } from 'react-query';

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

export const Spinner = () => (
  <div
    style={{
      width: '50px',
    }}
  >
    <img
      style={{
        width: '100%',
        objectFit: 'cover',
      }}
      src={spinner}
      alt='loading...'
    />
  </div>
);

function App() {
  const [inputVal, setInputVal] = useState('');
  const [inputMapped, setInputMapped] = useState([]);
  const [resource, setResource] = useState(photoFetcher(url));

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
    // <QueryClientProvider client={queryClient}>
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
      <Suspense fallback={<Spinner />}>
        <Photos resource={resource} />
      </Suspense>
    </div>
    // </QueryClientProvider>
  );
}

export default App;
