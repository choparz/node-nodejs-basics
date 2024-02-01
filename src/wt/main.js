import { cpus } from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
    // Write your code here
    const createWorker = data => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(path.join(__dirname, '/worker.js'), {
                workerData: data
            });

            worker.on('message', message => {
                resolve({ status: 'resolved', data: message });
            });

            worker.on('error', error => {
                resolve({ status: 'error', data: null });
            });
        });
    }

    const cpusCount = cpus().length;
    const workers = Array.from({ length: cpusCount }).map((_, index) => createWorker(index + 10));

    const result = await Promise.all(workers);
    console.log(result);
};

await performCalculations();