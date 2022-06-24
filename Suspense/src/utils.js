// @ts-ignore
import spinner from './spinner.gif';

export const fetchData = async url => {
  const req = await fetch(url);
  const resp = await req.json();

  return resp;
};

export const photoFetcher = url => {
  const getPhotos = fetchData(url);

  return {
    users: wrapPromise(getPhotos),
  };
};

export const wrapPromise = promise => {
  let status = 'pending';
  let result;
  let suspender = promise.then(
    r => {
      status = 'success';
      result = r;
    },
    e => {
      status = 'error';
      result = e;
    }
  );

  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        return result;
      } else if (status === 'success') {
        return result;
      }
    },
  };
};

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
