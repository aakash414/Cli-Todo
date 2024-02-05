import { collection } from '../dataModules/collections.js';
async function removeCompleted(): Promise<void> {
  collection.removeComplete();
}
export { removeCompleted };