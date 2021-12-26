require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const Person = require('./models/person')

const url = `mongodb+srv://fullstack:test123@cluster0.mdhmr.mongodb.net/phonebook-database?retryWrites=true&w=majority`

mongoose.connect(url)

const app = express()

morgan.token('req-body', (request, response) => {
    return JSON.stringify(request.body)
})

app.use(express.static('build'))
app.use(cors())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :req-body'))

const jsonParser = bodyParser.json()

// let persons = [
//     { 
//         "id": 1,
//         "name": "Arto Hellas", 
//         "number": "040-123456"
//     },
//     { 
//         "id": 2,
//         "name": "Ada Lovelace", 
//         "number": "39-44-5323523"
//     },
//     { 
//         "id": 3,
//         "name": "Dan Abramov", 
//         "number": "12-43-234345"
//     },
//     { 
//         "id": 4,
//         "name": "Mary Poppendieck", 
//         "number": "39-23-6423122"
//     }
// ]


app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons)
    })
})

app.get('/info', (request, response) => {
    const currentDate = new Date()
    console.log(currentDate)
    Person.find({}).then(persons => {
        response.write(`<p>Phonebook has info for ${persons.length} people</p>`)
        response.write(currentDate.toString())
        response.end()
    })
})

app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id).then(person => {
        response.json(person)
    })
})

app.delete('/api/persons/:id', (request, response, next) => {
    // const id = Number(request.params.id)
    // persons = persons.filter(p => p.id !== id)

    // response.status(204).end()

    Person.findByIdAndDelete(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))
})

const generateId = () =>  Math.floor(Math.random() * 1000000)


app.post('/api/persons', jsonParser, (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'name or number missing'
        })
    }
    
    // if (persons.find(p => p.name === body.name)) {
    //     return response.status(400).json({
    //         error: 'name must be unique'
    //     })
    // }

    const person = new Person({
        id: generateId(),
        name: body.name,
        number: body.number
    })
    
    // persons = persons.concat(person)
    person.save().then(savedPerson => {
        response.json(savedPerson)
    })
})

app.put('/api/persons/:id', jsonParser, (request, response, next) => {
    console.log('The PUT method is working')
    const body = request.body

    const person = {
        id: request.params.id,
        name: body.name,
        number: body.number
    }

    Person.findByIdAndUpdate(request.params.id, person, {new: true, runValidators: true})
        .then(updatedPerson => {
            response.json(updatedPerson)
        })
        .catch(error => next(error))
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).send({error: error.message})
    }

    next(error)
}

app.use(errorHandler)