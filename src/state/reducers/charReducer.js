const defaultState = {
  race: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_RACE':
      console.log('state', state)
      console.log('payload', action.payload)
      return {
        ...state,
        race: action.payload
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
