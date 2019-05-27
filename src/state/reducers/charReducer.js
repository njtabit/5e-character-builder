const defaultState = {
  race: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_RACE':
      return {
        ...state,
        race: action.payload
      }
    default:
      return state
  }
}
