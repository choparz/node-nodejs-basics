import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '/files');

const list = async () => {
    fs.readdir(filePath, (error, files) => {
        if (error) {
            throw new Error('FS operation failed');
        }
        console.log(files);
    });
};

await list();