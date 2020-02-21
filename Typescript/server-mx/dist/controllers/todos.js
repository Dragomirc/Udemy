"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todos_1 = require("../models/todos");
var TODOS = [];
exports.createTodo = function (req, res, next) {
    var text = req.body.text;
    var newTodo = new todos_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'Created the todo.', createTodo: newTodo });
};
exports.getTodos = function (req, res, next) {
    res.status(200).json({ todos: TODOS });
};
exports.updateTodos = function (req, res, next) {
    var id = req.params.id;
    var text = req.body.text;
    var todoIndex = TODOS.findIndex(function (todo) { return todo.id === id; });
    if (todoIndex < 0) {
        throw new Error('Could not find the todo!');
    }
    TODOS[todoIndex].text = text;
    res.status(200).json({
        message: 'Todo succesfully updated',
        updatedTodo: TODOS[todoIndex]
    });
};
exports.deleteTodo = function (req, res, next) {
    var id = req.params.id;
    var todoIndex = TODOS.findIndex(function (todo) { return todo.id === id; });
    if (todoIndex < 0) {
        throw new Error('Could not find the todo!');
    }
    TODOS.splice(todoIndex, 1);
    res.status(200).json({
        message: 'Todo succesfully deleted'
    });
};
