import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../components/Counter/Button';

function Counter() {
  const count = useSelector((state) => state.counter.count);

  const btnActions = [
    { name: 'increment', action: 'increment', color: 'green' },
    { name: 'decrement', action: 'decrement', color: 'red' },
    { name: 'reset', action: 'reset', color: 'gray' },
  ];

  const btnActionsList = btnActions.map((item) => (
    <Button
      name={item.name}
      action={item.action}
      key={item.name}
      color={item.color}
    />
  ));

  return (
    <div>
      <div className='container mx-auto my-8'>
        <h1 className='text-8xl font-semibold text-center'>{count}</h1>

        <div className='flex justify-center items-center'>{btnActionsList}</div>
      </div>
    </div>
  );
}

export default Counter;
