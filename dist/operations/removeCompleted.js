import { collection } from '../dataModules/collections.js';
async function removeCompleted() {
    collection.removeComplete();
}
export { removeCompleted };
