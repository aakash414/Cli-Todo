import Table from 'cli-table';
import chalk from 'chalk';
import { collection, showCompleted } from '../dataModules/collections.js';
async function showTodos(): Promise<true> {
  return new Promise<true>((resolve) => {
    const todosTable = new Table({
      head: [
        chalk.blueBright('Id'),
        chalk.blueBright('Todo'),
        chalk.blueBright('Completed'),
      ],
    });
    if (collection.getItemCounts().total == 0) {
      console.log(chalk.bgMagentaBright(`Todos's list (complete)`));
      todosTable.push(['NA', 'There is no Todo in the List', 'NA']);
    } else {
      if (showCompleted.show) {
        console.log(chalk.bgMagentaBright(`Todos's list (complete)`));
        collection
          .getTodoItems(true)
          .forEach((item) =>
            todosTable.push([
              item.id.toString(),
              item.todo,
              item.complete ? chalk.green('Yes') : chalk.red('No'),
            ])
          );
      } else {
        console.log(chalk.bgMagentaBright(`Todos's list (masked)`));
        collection
          .getTodoItems(false)
          .forEach((item) =>
            todosTable.push([
              item.id.toString(),
              item.todo,
              item.complete ? chalk.green('Yes') : chalk.red('No'),
            ])
          );
      }
    }
    console.log(todosTable.toString());
    resolve(true);
  });
}
export { showTodos };