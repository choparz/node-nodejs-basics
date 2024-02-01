import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import zlib from 'zlib';
import util from 'util';
import { pipeline } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    const sourceFile = path.join(__dirname, '/files/fileToCompress.txt');
    const destinationFile = path.join(__dirname, '/files/archive.gz');

    const source = fs.createReadStream(sourceFile);
    const destination = fs.createWriteStream(destinationFile);

    const gzip = zlib.createGzip();

    const pipe = util.promisify(pipeline);

    await pipe(source, gzip, destination);
};

await compress();