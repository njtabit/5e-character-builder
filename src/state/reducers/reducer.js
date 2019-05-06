const defaultState = {
  tab: 'race', // should be 'home' for production
  character: {}
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_TAB':
      return {
        ...state,
        tab: action.payload
      }

    default:
      return state
  }
}
