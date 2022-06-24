// @ts-ignore
import spinner from './spinner.gif';

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
