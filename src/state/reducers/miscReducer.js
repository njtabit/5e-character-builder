const defaultState = {
  tab: 'Race', // should be 'home' for production
  filters: {}
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_TAB':
      return {
        ...state,
        tab: action.payload
      }
    case 'SET_INFOBOX':
      return {
        ...state,
        infobox: action.payload
      }
    case 'SET_FILTERS':
      return {
        ...state,
        filters: action.payload
      }
    default:
      return state
  }
}
