import * as lowdb from 'lowdb';
import { TodoItem } from './todoItem.js';
import { TodoCollection } from './todoCollection.js';
import * as FileSync from 'lowdb/adapters/FileSync.js';
class JsonTodoCollection extends TodoCollection {
    database;
    constructor(todoItems = []) {
        super([]);
        this.database = lowdb.default(new FileSync.default('Todo.json'));
        if (this.database.has('todos').value()) {
            let dbItems = this.database.get('todos').value();
            dbItems.forEach((item) => this.itemMap.set(item.id, new TodoItem(item.id, item.todo, item.complete)));
        }
        else {
            this.database.set('todos', todoItems).write();
            todoItems.forEach((item) => this.itemMap.set(item.id, item));
        }
    }
    storetodos() {
        this.database.set('todos', [...this.itemMap.values()]).write();
    }
    addTodo(todo) {
        let result = super.addTodo(todo);
        this.storetodos();
        return result;
    }
    changeStatus(id, complete) {
        super.changeStatus(id, complete);
        this.storetodos();
    }
    removeComplete() {
        super.removeComplete();
        this.storetodos();
    }
}
export { JsonTodoCollection };
