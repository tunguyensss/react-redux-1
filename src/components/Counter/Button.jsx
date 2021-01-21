import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment, reset } from '../../redux/actions/Counter';

function Button(props) {
  const dispatch = useDispatch();

  function handleCounter() {
    switch (props.action) {
      case 'increment':
        dispatch(increment());
        break;
      case 'decrement':
        dispatch(decrement());
        break;
      case 'reset':
        dispatch(reset());
        break;
      default:
    }
  }

  const btnClass = `px-4 py-2 capitalize rounded mx-2 font-semibold text-lg text-white bg-${props.color}-400 hover:bg-${props.color}-500`;

  return (
    <div>
      <button className={btnClass} onClick={handleCounter} color={props.color}>
        {props.name}
      </button>
    </div>
  );
}

export default Button;
