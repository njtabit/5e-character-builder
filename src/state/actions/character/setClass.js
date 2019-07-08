export default async (c, dispatch) => {

  console.log('class', c)
  dispatch({
    type: 'SET_CLASS',
    payload: c
  })
}
