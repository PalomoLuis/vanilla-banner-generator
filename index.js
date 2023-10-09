// import { input } from '@inquirer/prompts';
import { config } from 'process'
import { questionary } from './src/console/questionary.js'
import { filesGenerator } from './src/generator/index.js'

// const answer = await input({ message: 'Enter your name' });
const init = async () => {
    const answers = await questionary()
    await filesGenerator(answers)
}

init()