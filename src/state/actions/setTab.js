export default async (tab, dispatch) => {
  dispatch({
    type: 'SET_TAB',
    payload: tab
  })
}
