import { useState } from 'react';

export const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = (e, counter1, setForm, from) => {
    setCounter((state) => {
      if (e.target.innerText === '+') {
        setForm(() => ({
          ...from,
          formGuests: state + counter1,
        }));
        return (state = counter + 1);
      } else if (e.target.innerText === '-') {
        if (state > 1) {
          setForm(() => ({
            ...from,
            formGuests: state + counter1,
          }));
          return (state = counter - 1);
        } else if (state === 1) {
          setForm(() => ({
            ...from,
            formGuests: counter1 > 0 ? counter1 : '',
          }));
          return (state = counter - 1);
        } else {
          setForm(() => ({
            ...from,
            formGuests: counter1 > 0 ? counter1 : '',
          }));
          return state;
        }
      }
    });
  };

  const handleReiniciarCounter = () => {
    setCounter(0);
  };
  return { handleCounter, counter, handleReiniciarCounter };
};
