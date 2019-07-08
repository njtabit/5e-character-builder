export default async (race, dispatch) => {
  if (typeof race.speed === 'number') race.speed = { walk: race.speed }

  console.log('race', race)
  dispatch({
    type: 'SET_RACE',
    payload: race
  })
}
