const { writeFileSync,mkdirSync } = require('fs');

const targetPAth = 'src/environments/environments.ts';

const envFileContent = `
export const environment = {
    production: true,
    API_KEY: "${process.env["API_KEY"]}"
};
`

mkdirSync('src/environments', {recursive: true});

writeFileSync(targetPAth,envFileContent)