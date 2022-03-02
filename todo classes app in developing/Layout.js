'use strict';
class Layout{
    constructor() {
        this.layout = document.querySelector( '.layout' )
        this.todo ={
            totitle : '',
            totext : ''
        }
        this.CreatCard()
    }
    CreatCard(){
        let todo = document.createElement('div')
        todo.className = 'todo'
        let todoTitle=document.createElement('div')
        todoTitle.className = 'todo-title'
        let todoText=document.createElement('div')
        todoText.className = 'todo-title'
        let todolist = this.layout.querySelector('.todolist')
        todo.append(todoTitle)
        todo.append(todoText)
        todolist.append(todo)

    }
}

