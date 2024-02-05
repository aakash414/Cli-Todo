import { TodoItem } from './todoItem.js';
type ItemCounts = {
  total: number;
  incomplete: number;
  complete: number;
};
class TodoCollection {
  private nextId: number = 1;
  protected itemMap = new Map<number, TodoItem>();
  constructor(public todoItems: TodoItem[] = []) {
    todoItems.forEach((item) => this.itemMap.set(item.id, item));
  }
  getTodoById(id: number): TodoItem | undefined {
    return this.itemMap.get(id);
  }
  addTodo(todo: string): number {
    while (this.getTodoById(this.nextId)) {
      this.nextId++;
    }
    this.itemMap.set(this.nextId, new TodoItem(this.nextId, todo));
    return this.nextId;
  }
  getTodoItems(includeComplete: boolean): TodoItem[] {
    return [...this.itemMap.values()].filter(
      (item) => includeComplete || !item.complete
    );
  }
  changeStatus(id: number, complete: boolean): void {
    const todoItem = this.getTodoById(id);
    if (todoItem) {
      todoItem.complete = complete;
    }
  }
  removeComplete(): void {
    this.itemMap.forEach((item) => {
      if (item.complete) {
        this.itemMap.delete(item.id);
      }
    });
  }
  getItemCounts(): ItemCounts {
    return {
      total: this.itemMap.size,
      incomplete: this.getTodoItems(false).length,
      complete: this.itemMap.size - this.getTodoItems(false).length,
    };
  }
}
export { TodoCollection };