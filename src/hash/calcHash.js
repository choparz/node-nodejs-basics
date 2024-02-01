import { createHash } from 'crypto';
import { createReadStream, readFile } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { stdout } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '/files/fileToCalculateHashFor.txt');

const calculateHash = async () => {
    // const hash = createHash('sha256');

    // hash.on('readable', () => {
    //     const data = hash.read();

    //     if (data) {
    //         console.log(data.toString('hex'));
    //     }

    // });

    // readFile(filePath, (error, data) => {
    //     if (error) {
    //         throw new Error('FS operation failed');
    //     }

    //     hash.write(data.toString());
    // });

    // hash.end();

    const hash = createHash('sha256');
    const input = createReadStream(filePath);
    input.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();
