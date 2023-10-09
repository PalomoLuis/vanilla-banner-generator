import checkbox from '@inquirer/checkbox'
import select from '@inquirer/select'
import input from '@inquirer/input'
import { textColor } from './logger.js'

const warningT = textColor('yellow')

const questionary = async () => {

    console.log('')
    warningT('Welcome to Vanilla Banner Generator'.toUpperCase())
    console.log('')

    //SIZE QUESTION
    // const sizeOptions = [
    //     { name: '300x250', value: '300x250' },
    //     { name: '300x600', value: '300x600' },
    //     { name: '160x600', value: '160x600' },
    //     { name: '728x90', value: '728x90' },
    //     { name: '970x250', value: '970x250' }
    // ]
    // const sizeSelectionQuestion = {
    //     message: 'Select the sizes',
    //     choices: sizeOptions
    // }
    // const sizeSelection = await checkbox(sizeSelectionQuestion)
    const sizeSelection = await sizeQuestion()

    //TYPE QUESTION
    const typeChoices = [
        { name: 'static', value: 'static' },
        { name: 'dynamic', value: 'dynamic' }
    ]
    const typeSelectionQuestion = {
        message: 'Select the type',
        choices: typeChoices
    }
    const typeSelection = await select(typeSelectionQuestion)

    //NAME QUESTION
    const nameSelection = await input({  message: 'Write the name for all the banners without the size' })


    return {
        sizes: sizeSelection,
        type: typeSelection,
        name: nameSelection
    }
}

const sizeQuestion = async () => {
    const sizeOptions = [
        { name: '300x250', value: '300x250' },
        { name: '300x600', value: '300x600' },
        { name: '160x600', value: '160x600' },
        { name: '728x90', value: '728x90' },
        { name: '970x250', value: '970x250' }
    ]
    const sizeSelectionQuestion = {
        message: 'Select the sizes',
        choices: sizeOptions
    }
    const sizeSelection = await checkbox(sizeSelectionQuestion)

    return sizeSelection
}

export { questionary }