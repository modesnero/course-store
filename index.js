const fs = require('fs')
const path = require('path')

const dirPath = path.join(__dirname, 'notes')
const filePath = path.join(__dirname, 'notes', 'my-notes.txt')
const newFilePath = path.join(__dirname, 'notes', 'notes.txt')

fs.mkdir(dirPath, err => {
  if (err) {
    const isCreated = err.errno === -4075
    if (isCreated) {
      console.log('* Dir already created')
    } else {
      throw new Error(err)
    }
  } else {
    console.log('* Dir was created')
  }
})

fs.writeFile(filePath, 'Hello World', err => {
  if (err) throw err
  else console.log('* File was created')

  fs.appendFile(filePath, '\nFrom append file', err => {
    if (err) throw err

    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) throw err
      console.log(data)
    })

    fs.rename(filePath, newFilePath, err => {
      if (err) throw err
      console.log('* File was renamed :)')
    })
  })
})
