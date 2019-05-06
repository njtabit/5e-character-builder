const defaultState = {
  tab: 'Race', // should be 'home' for production
  character: {}
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_TAB':
      return {
        ...state,
        tab: action.payload
      }
/*
    case '__INIT__':
      return {
        ...state,
        tab: action.payload.tab,
        character: action.payload.character
      }
*/
    default:
      return state
  }
}
