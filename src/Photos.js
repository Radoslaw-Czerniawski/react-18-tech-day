import { useEffect, useState } from 'react';
import { Spinner } from './utils';

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

const Photos = () => {
  const [photos, setPhotos] = useState(null);
  useEffect(() => {
    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        throw Error;
      })
      .then(data => setPhotos(data))
      .catch(err => console.log(err));
  }, []);

  // const { data: photos } = useQuery('photos', () => fetchData(url));

  if (!photos) return <Spinner />;

  return (
    <>
      {photos.map((photo, index) => (
        <Photo key={index} url={photo.url} />
      ))}
    </>
  );
};

export default Photos;
