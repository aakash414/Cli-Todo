import showBanner from 'node-banner';
async function title() {
    console.clear();
    return await new Promise(async (resolve) => {
        await showBanner(`Todo ' s`, '\t   CLI Todo App', 'blue', 'yellow');
        console.log('');
        resolve(true);
    });
}
export { title };
