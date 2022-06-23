import { Suspense } from 'react';
import { useQuery } from 'react-query';
import { Spinner } from './App';
import { fetchData } from './utils';

const Photo = ({ url }) => (
  <div
    style={{
      width: '400px',
    }}
  >
    <img
      style={{
        width: '100%',
        objectFit: 'cover',
      }}
      src={url}
    />
  </div>
);

const url = 'https://jsonplaceholder.typicode.com/photos';

const Photos = ({ resource }) => {
  const photos = resource.users.read().slice(4000);

  // const { data: photos } = useQuery('photos', () => fetchData(url));

  return (
    <>
      {photos.map((photo, index) => (
        <Photo key={index} url={photo.url} />
      ))}
    </>
  );
};

export default Photos;
