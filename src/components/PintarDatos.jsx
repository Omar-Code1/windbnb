import React, { useContext } from 'react';
import Stays from '../components/Stays';
import { StaysContext } from '../context/StaysProvider';

const PintarDatos = () => {
  const { stays } = useContext(StaysContext);
  return (
    <div className="row">
      {stays.map((item, index) => (
        <Stays key={index} stay={item} />
      ))}
    </div>
  );
};

export default PintarDatos;
