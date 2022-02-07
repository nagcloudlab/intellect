var express = require('express')
var route = express.Router()

const todos = [
    { id: 1, title: 'todo-1', completed: false },
    { id: 2, title: 'todo-2', completed: true },
    { id: 3, title: 'todo-3', completed: false },
    { id: 4, title: 'todo-4', completed: false },
    { id: 5, title: 'todo-5', completed: true },
    { id: 6, title: 'todo-6', completed: false },
    { id: 7, title: 'todo-7', completed: false },
    { id: 8, title: 'todo-8', completed: true },
    { id: 9, title: 'todo-9', completed: false }
]

route
    .param('todoId', (req, res, next) => {
        const todoId = req.params.todoId;
        req.todoId = Number.parseInt(todoId)
        next()
    })
    .get("/", (req, res) => {
        const limit = req.query.limit;
        if (!limit)
            res.json(todos);
        else {
            res.json(todos.slice(0, limit))
        }
    })
    .post("/", express.json(), (req, res) => {
        const newTodo = req.body
        todos.push(newTodo)
        res.status(201).json({ message: 'todo created' })
    })
    .get("/:todoId", (req, res) => {
        const todo = todos.find(t => t.id === req.todoId)
        if (todo)
            res.status(200).json(todo)
        else
            res.status(404).json({ message: 'requested todo not available' })
    })
    .delete("/:todoId", (req, res) => {
        const idx = todos.findIndex(t => t.id === req.todoId)
        todos.splice(idx, 1)
        res.status(200).json({ message: 'todo deleted' })
    })

module.exports = route;