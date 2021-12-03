import React from "react"
import { useSelector } from 'react-redux';

const Greeting = () => {
  const message = useSelector((state) => state.message);

  return (
    <React.Fragment>
      Greeting: { message }
    </React.Fragment>
  );
}

export default Greeting