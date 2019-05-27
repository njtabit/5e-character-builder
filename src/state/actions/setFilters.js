export default async (filters, dispatch) => {
  dispatch({
    type: 'SET_FILTERS',
    payload: filters
  })
}
