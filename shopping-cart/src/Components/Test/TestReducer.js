const initalstate = {
    1           : [],

  };

  function TestReducer(state = initalstate, action) {
  const { type, payload } = action;
  switch (type) {
      
  case 'RETURN_INITAL_STATE':
  return {
     ...initalstate
  };
  
      default:
      return {
          ...state
      };
    }
}
    export default TestReducer;
