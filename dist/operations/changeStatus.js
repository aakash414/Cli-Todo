import inquirer from 'inquirer';
import { collection } from '../dataModules/collections.js';
async function changeStatus() {
    console.log('');
    await inquirer
        .prompt([
        {
            type: 'checkbox',
            name: 'status',
            message: 'Toggle todo status',
            choices: collection.getTodoItems(true).map((item) => ({
                name: item.todo,
                value: item.id,
                checked: item.complete,
            })),
        },
    ])
        .then((answers) => {
        let selectedTasks = answers['status'];
        collection
            .getTodoItems(true)
            .forEach((item) => collection.changeStatus(item.id, selectedTasks.find((id) => id === item.id) != undefined));
    });
}
export { changeStatus };
