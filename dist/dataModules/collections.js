import { ShowCompleted } from './status.js';
import { JsonTodoCollection } from './jsonTodoCollection.js';
let todos = [];
let collection = new JsonTodoCollection(todos);
let showCompleted = new ShowCompleted();
export { collection, showCompleted };
