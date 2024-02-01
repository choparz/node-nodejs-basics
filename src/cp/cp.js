import { fork } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const spawnChildProcess = async (args) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const filePath = path.join(__dirname, '/files/script.js');

    const childProcess = fork(filePath, args);

    childProcess.on('close', code => {
        console.log('Child process closed with code ', code);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2', '...']);
