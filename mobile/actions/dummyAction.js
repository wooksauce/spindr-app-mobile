export const doSomething = () => {
  return function(dispatch) {
    dispatch({ type: 'SOMETHING', payload: 1 });
  }
}