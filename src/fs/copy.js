import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourcePath = path.join(__dirname, '/files');
const destinationPath = path.join(__dirname, '/files_copy');

const copy = async () => {
    // Write your code here 
    fs.copyFile(sourcePath, destinationPath, (error) => {
        if (error) {
            throw new Error('FS operation failed');
        }
        console.log('Files have been copied successfully!');
    })
};

await copy();
