'use client';
import { useEffect } from 'react';

interface IErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error = ({ error, reset }: IErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  console.log(error);

  return (
    <div className="container">
      <h1>???</h1>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default Error;
