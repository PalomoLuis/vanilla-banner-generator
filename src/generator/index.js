import fs from 'fs'
import path from 'path'
import { textColor } from '../console/logger.js'

/**
 * 
 * @param {object} config Mandatory: Receive the configuration to create the files
 * @description The FileGenerator function creates files in the currect folder depending on the sizes, type and name provied in the configuration param. It will a new folder with the project name and all the banners folders inside for each size.
 */
const filesGenerator = async ( config ) => {
    const { sizes, type, name } = config
    const errorMsg = textColor('red')

    const currentDir = process.cwd()
    const bannerFolderExist = fs.readdirSync(currentDir, (error, files) => {
        if (error) {
            errorMsg(`Error reading files /${error}`)
            return;
        }

        return files
    }).find(value => value === name)

    if(!bannerFolderExist) {
        fs.mkdirSync(path.join(currentDir, '/', name), error => {
            if(error) errorMsg(`Error to create the folder /${error}`)
            else console.log(`folder created: ${name}`)
        })
    }

    sizes.map(size => {
        fs.mkdirSync(
            path.join(currentDir, '/', name, '/', size), error => {
                if(error) errorMsg(`Error to create folder ${size} / ${error}`)
                else console.log(`folder created: ${size}`)
            }
        )

        fs.writeFile(
            path.join(currentDir, '/', name, '/', size, `${name}_${size}.html`),
            `<html>
                <head>
                    <title>${name}_${size}</title>
                </head>
                <body>
                </body>
            </html>`, (err, bytes) => {
                if(err){ 
                    console.log(err.message); 
                }else{ 
                    console.log(bytes +' bytes written'); 
                }
            }
        )
    })
}

export { filesGenerator }