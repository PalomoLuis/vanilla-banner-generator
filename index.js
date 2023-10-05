// import { input } from '@inquirer/prompts';
import { questionary } from './src/console/questionary.js'

// const answer = await input({ message: 'Enter your name' });
const init = async () => {
    const questions = await questionary()
}

init()