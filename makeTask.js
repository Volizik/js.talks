const fs = require('fs');
const path = require('path');
const args = process.argv.slice(2);
const taskName = args[0];

const fileTestContent = `const ${taskName} = require('./${taskName}');

const params = '';
const result = '';

describe('${taskName}', () => {
    test('Should return [result] for [params]', () => {
        expect(${taskName}(params)).toEqual(result);
    })
});
`;
const fileScriptContent = `const ${taskName} = () => {
    // your code here...
}

module.exports = ${taskName};
`;

if (!fs.existsSync(taskName)){
    fs.mkdirSync(taskName);
    fs.writeFileSync(path.resolve(__dirname, taskName, `${taskName}.test.js`), fileTestContent);
    fs.writeFileSync(path.resolve(__dirname, taskName, `${taskName}.js`), fileScriptContent);
} else {
    console.error(`[MAKE TASK]: Directory "${taskName}" already exist!`)
}


