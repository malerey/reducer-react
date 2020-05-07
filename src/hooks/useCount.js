import { useState } from 'react';

const useCount = (param) => {
  const [count, setCount] = useState(param);

  return [
    count, 
    (e) => {
      if (e.target.id === "suma") {
        setCount(count + 1)
      } 
      else setCount(count - 1)
    }
  ]
};

export default useCount;
