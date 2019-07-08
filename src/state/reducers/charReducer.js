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

    case 'SET_CLASS':
      return {
        ...state,
        class: action.payload
      }
      
    default:
      return state
  }
}
