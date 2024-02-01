import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '/files/fileToRead.txt');


const read = async () => {
    // Write your code here 
    fs.readFile(filePath, { encoding: 'utf8' }, (error, data) => {
        if (error) {
            throw new Error('FS operation failed');
        }
        console.log(data);
    })
};

await read();