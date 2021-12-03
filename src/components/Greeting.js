import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const message = useSelector((state) => state.message);

  return (
    <>
      Greeting:
      {' '}
      { message }
    </>
  );
};

export default Greeting;
