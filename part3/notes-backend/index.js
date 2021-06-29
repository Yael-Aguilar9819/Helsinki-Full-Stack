const express = require('express')
const app = express()
app.use(express.json())

app.use(express.static('build'))

const cors = require('cors')
app.use(cors())
//Middleware function
const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
} 

app.use(requestLogger)

const mongoose = require('mongoose')
const Note = require('./models/note.js')

app.get('/', (request, response) => {
  response.send('<h1>Hello World!!</h1>');
}) 

app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
})

app.get('/api/notes/:id', (request, response, next) => {
  Note.findById(request.params.id).then(note => {
    if (note) {
      response.json(note)
    } else {
      response.status(404).end()
    }
  }).catch(err => next(error))
})


app.post('/api/notes', (request, response) => {
  const body = request.body;
  console.log(body.content)

  if (!body.content) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

  const newNote = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date(),
  })

  newNote.save().then(savedNote => {
    response.json(savedNote)
  })
})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end();
})

//Unkwon url response
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}

// this has to be the last loaded middleware.
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})