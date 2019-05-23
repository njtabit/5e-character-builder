export default async (info, dispatch) => {
  dispatch({
    type: 'SET_INFOBOX',
    payload: info
  })
}
