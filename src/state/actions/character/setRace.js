export default async (race, dispatch) => {
  dispatch({
    type: 'SET_RACE',
    payload: race
  })
}
