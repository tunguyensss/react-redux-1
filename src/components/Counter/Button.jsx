import React from 'react';
import { useDispatch } from 'react-redux';
import { increment } from '../../redux/actions/Counter';

function Button(props) {
  const dispatch = useDispatch();
  function handleCounter() {}
  return (
    <div>
      <button className='btn' onClick={handleCounter}>
        {props.name}
      </button>
    </div>
  );
}

export default Button;
