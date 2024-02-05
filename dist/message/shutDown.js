import chalk from 'chalk';
import ora from 'ora';
function shutDown() {
    return new Promise((resolve) => {
        console.log('');
        const spinner = ora(chalk.red(' Shutting Down '));
        spinner.spinner = 'triangle';
        spinner.color = 'red';
        spinner.start();
        setTimeout(() => {
            spinner.stop();
            console.clear();
            resolve(true);
        }, 1000);
    });
}
export { shutDown };
