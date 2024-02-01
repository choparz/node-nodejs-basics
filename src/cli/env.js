const parseEnv = () => {
    const variables = Object.keys(process.env)
        .filter(variable => variable.startsWith('RSS_'))
        .map(variable => `${variable}=${process.env[variable]}`)
        .join('; ');
    console.log(variables);
};

parseEnv();