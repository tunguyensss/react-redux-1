const initialState = {
  count: 0,
  increment: 0,
  decrement: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        increment: state.increment + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        decrement: state.decrement + 1,
      };
    case 'RESET':
      return {
        ...state,
        count: 0,
        increment: 0,
        decrement: 0,
      };
    default:
      return state;
  }
};

export default counterReducer;
