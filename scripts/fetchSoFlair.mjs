// console.log('siteInfo: ', siteInfo)

import { readFile, writeFile } from 'fs/promises'
import { join } from 'path'

const downloadImage = async (jsonFilePath, outputFolder, outputFilename) => {
  try {
    // Read and parse JSON file
    const jsonData = await readFile(jsonFilePath, 'utf-8')
    const { stackExchangeUserId } = JSON.parse(jsonData)
    if (!stackExchangeUserId) throw new Error('No stackExchangeUserId property found in JSON file')

    // Fetch the image from the URL
    const response = await fetch(`https://stackexchange.com/users/flair/${stackExchangeUserId}.png`)
    if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`)

    const arrayBuffer = await response.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Write the image to the specified local folder
    const filePath = join(outputFolder, outputFilename)
    await writeFile(filePath, buffer)
    console.log(`Image downloaded and saved to ${filePath}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
  }
}

// Usage example
const jsonFilePath = './src/site-info.json'  // Path to the JSON file
const outputFolder = './src/resources'
const outputFilename = 'StackExchangeFlair.jpg'         // Output filename

downloadImage(jsonFilePath, outputFolder, outputFilename)

// Usage example
const imageUrl = `https://stackexchange.com/users/flair/1375993.png`
