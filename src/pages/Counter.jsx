import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../components/Counter/Button';

function Counter() {
  const count = useSelector((state) => state.counter.count);

  console.log(count);

  const btnActions = [
    { name: 'increment', action: 'increment' },
    { name: 'decrement', action: 'decrement' },
    { name: 'reset', action: 'reset' },
  ];

  const btnActionsList = btnActions.map((item) => (
    <Button name={item.name} action={item.action} key={item.name} />
  ));

  return (
    <div>
      <h1>{count}</h1>

      <div className=''>{btnActionsList}</div>
    </div>
  );
}

export default Counter;
