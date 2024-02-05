import inquirer from 'inquirer';
import { collection } from '../dataModules/collections.js';
async function addTodo() {
    console.log('');
    await inquirer.prompt([
        {
            type: 'input',
            name: 'add',
            message: 'Enter new Todo:',
            validate(input) {
                if (input !== '') {
                    collection.addTodo(input);
                    return true;
                }
                else {
                    return 'Enter some valid todo';
                }
            },
        },
    ]);
}
export { addTodo };
