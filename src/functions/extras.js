// Creates an object with all the fields in the Races, Classes, etc. JSON passed to it, and the types their values can be
export const fieldTypes = list => {
  const fields = {}
  list.map( (thing) => {
    for (const key in thing) {
      const field = fields[key]
      let kvType = typeof thing[key]
      if (kvType === 'object' && Array.isArray(thing[key])) {
        kvType = 'array'
      }

      if (!field) {
        fields[key] = {[kvType]: thing.name}
      } else if (!fields[key][kvType]) {
        fields[key][kvType] = thing.name
      }
    }
  })
  console.log('fields: ', fields)
}
