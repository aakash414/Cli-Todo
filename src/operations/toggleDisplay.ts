import { showCompleted } from '../dataModules/collections.js';
async function toggleDisplay(): Promise<void> {
  showCompleted.show = !showCompleted.show;
}
export { toggleDisplay };