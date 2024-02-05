class TodoItem {
    public constructor(
      public id: number,
      public todo: string,
      public complete: boolean = false
    ) {}
  }
  export { TodoItem };