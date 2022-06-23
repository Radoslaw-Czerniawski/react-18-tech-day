import { useDeferredValue } from 'react';

export const MappedInput = ({ value }) => {
  return (
    <>
      {value?.map((val, index) => (
        <span key={index}>{val}</span>
      ))}
    </>
  );
};
