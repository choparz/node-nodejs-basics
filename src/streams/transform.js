import { Transform } from 'stream';

const transform = async () => {
    const transformStream = new Transform({
        readableObjectMode: true,
        writableObjectMode: true,
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().split('').reverse().join(''));
            callback();
        }
    });

    process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();