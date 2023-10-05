/**
 * @param { string } color - Options: red, blue, green, yellow
 * @param { string } text - Text
 */
const textColor = (color) => {
    const options = [
        {name: "red", value: '\x1b[31m%s\x1b[0m'},
        {name: "blue", value: '\x1b[34m%s\x1b[0m'},
        {name: "green", value: '\x1b[32m%s\x1b[0m'},
        {name: "yellow", value: '\x1b[33m%s\x1b[0m'}
    ]
    const colorSelect = options.filter(value => value.name === color)[0]
    
    if(!colorSelect) {
        console.error(options[0].value, 'color not found')
        return null
    }

    return (text) => {
        console.log(colorSelect.value, text)
        return text
    }
}

export { textColor }