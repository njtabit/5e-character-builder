const defaultState = {test: 'foo', name: '', posted: false, entries: []}

export default (state = defaultState, action) => {

  switch (action.type) {
    /*case 'entryRetrieved':
      const newEntries = [...state.entries]
      newEntries.push(action.payload)
      return {...state, entries: newEntries}*/

    default:
      return state
  }
}
