import checkbox from '@inquirer/checkbox'
import { textColor } from './logger.js'

const warningT = textColor('yellow')

const questionary = async () => {

    console.log('')
    warningT('Welcome to Vanilla Banner Generator'.toUpperCase())
    console.log('')

    //SIZE QUESTION
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
    const sizeSelected = await checkbox(sizeSelectionQuestion)

    //TYPE QUESTION
    //static, dynamic or video.

    return { sizeSelected }
}

export { questionary }