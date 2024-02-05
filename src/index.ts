import { title } from './message/title.js';
import { shutDown } from './message/shutDown.js';
import { addTodo } from './operations/addTodo.js';
import { showTodos } from './display/showTodos.js';
import { changeStatus } from './operations/changeStatus.js';
import { toggleDisplay } from './operations/toggleDisplay.js';
import { optionSelection } from './userInput/optionSelection.js';
import { removeCompleted } from './operations/removeCompleted.js';
async function todos() {
  let todosLoop = true;
  while (todosLoop) {
    await title();
    await showTodos();
    let options = await optionSelection();
    switch (options) {
      case 'Add New Todo':
        await addTodo();
        break;
      case 'Show/Hide Completed':
        await toggleDisplay();
        break;
      case 'Change status of Todo':
        await changeStatus();
        break;
      case 'Remove Completed Todo':
        await removeCompleted();
        break;
      case 'Quit':
        todosLoop = false;
        await shutDown();
        break;
      default:
        break;
    }
  }
}
todos();