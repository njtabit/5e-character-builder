const fs = require('fs')


fs.readFile('./class/index.json', (err, data) => {
  if (err) throw err
  let values = []
  let classes = JSON.parse(data).classes

  for (const file in classes) {
    const path = './class/' + classes[file]

    fs.readFile(path, (err, data) => {
      if (err) throw err
      values.push([file, JSON.parse(data)])
      //console.log(values)
    })
  }

  function wait() {
    if (values.length !== Object.keys(classes).length) {
      console.log(values.length)
      setTimeout(() => {wait()}, 1000)
    } else {
      values.map( (val) => {
        classes[val[0]] = val[1]
      })
      fs.writeFile('../src/lists/classes.json', JSON.stringify(classes, null, 2), (err) => {
        if (err) throw err
      })
    }
  }

  wait()
})
