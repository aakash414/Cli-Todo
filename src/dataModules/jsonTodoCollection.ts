import * as lowdb from 'lowdb';
import { TodoItem } from './todoItem.js';
import { TodoCollection } from './todoCollection.js';
import * as FileSync from 'lowdb/adapters/FileSync.js';
type schemaType = {
  todos: { id: number; todo: string; complete: boolean }[];
};
class JsonTodoCollection extends TodoCollection {
  private database: lowdb.LowdbSync<schemaType>;
  constructor(todoItems: TodoItem[] = []) {
    super([]);
    this.database = lowdb.default(new FileSync.default('Todo.json'));
    if (this.database.has('todos').value()) {
      let dbItems = this.database.get('todos').value();
      dbItems.forEach((item) =>
        this.itemMap.set(
          item.id,
          new TodoItem(item.id, item.todo, item.complete)
        )
      );
    } else {
      this.database.set('todos', todoItems).write();
      todoItems.forEach((item) => this.itemMap.set(item.id, item));
    }
  }
  private storetodos() {
    this.database.set('todos', [...this.itemMap.values()]).write();
  }
  addTodo(todo: string): number {
    let result = super.addTodo(todo);
    this.storetodos();
    return result;
  }
  changeStatus(id: number, complete: boolean): void {
    super.changeStatus(id, complete);
    this.storetodos();
  }
  removeComplete(): void {
    super.removeComplete();
    this.storetodos();
  }
}
export { JsonTodoCollection };