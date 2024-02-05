import { showCompleted } from '../dataModules/collections.js';
async function toggleDisplay() {
    showCompleted.show = !showCompleted.show;
}
export { toggleDisplay };
