import { TodoItem } from './todoItem.js';
import { ShowCompleted } from './status.js';
import { TodoCollection } from './todoCollection.js';
import { JsonTodoCollection } from './jsonTodoCollection.js';
let todos: TodoItem[] = [];
let collection: TodoCollection = new JsonTodoCollection(todos);
let showCompleted = new ShowCompleted();
export { collection, showCompleted };