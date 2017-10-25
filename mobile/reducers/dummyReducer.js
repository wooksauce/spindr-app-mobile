const initialState = {
  val: 0
}

const dummyReducer = (state = initialState, action) => {
  if (action.type === 'SOMETHING') {
    state = {...state, val: action.payload};
    console.log('State:', state);
  }
  return state;
}

export default dummyReducer;