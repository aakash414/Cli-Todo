import chalk from 'chalk';
import ora, { Ora } from 'ora';
function shutDown(): Promise<true> {
  return new Promise<true>((resolve) => {
    console.log('');
    const spinner: Ora = ora(chalk.red(' Shutting Down '));
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