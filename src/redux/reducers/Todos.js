const initialState = null;

const todolistReducer = (state = initialState, action) => {
  if (state === null) {
    return [];
  }
  switch (action.type) {
    case 'ADD_NEW_NOTE':
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default todolistReducer;
