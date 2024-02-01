import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const oldPath = path.join(__dirname, '/files/wrongFilename.txt');
const newPath = path.join(__dirname, '/files/properFilename.md');

const rename = async () => {
    // Write your code here 
    if (fs.existsSync(newPath)) {
        throw new Error('FS operation failed');
    }
    fs.rename(oldPath, newPath, (error) => {
        if (error) {
            throw new Error('FS operation failed');
        }
    })
};

await rename();