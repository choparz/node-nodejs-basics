import { writeFile } from 'fs';
import { Buffer } from 'buffer';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    const data = new Uint8Array(Buffer.from('I am fresh and young'));
    const filePath = path.join(__dirname, '/files/fresh.txt');

    writeFile(filePath, data, { flag: 'wx' }, (error) => {
        if (error) {
            throw new Error('FS operation failed');
        }
        console.log('File has been created successfully!');
    })
};

await create();