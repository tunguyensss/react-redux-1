import React from 'react';
import { useSelector } from 'react-redux';

function CounterField(props) {
  const count = useSelector((state) => state.counter.count);
  console.log(count);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default CounterField;
