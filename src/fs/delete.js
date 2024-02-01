import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files/fileToRemove.txt');

const remove = async () => {
    // Write your code here 
    if (!fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
    }
    fs.unlink(filePath, (error) => {
        if (error) {
            throw new Error('FS operation failed');
        }
    })
};

await remove();