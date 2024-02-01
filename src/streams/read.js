import fs from 'fs';
import path from 'path';
import { stdout } from 'process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const filePath = path.join(__dirname, '/files/fileToRead.txt');
    fs.createReadStream(filePath).pipe(stdout);
};

await read();