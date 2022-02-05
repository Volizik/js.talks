const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const taskName = args[0];

const fileTestContent = `const ${taskName}1 = require('./${taskName}1');

const params = '';
const result = '';

describe('${taskName}', () => {
    test('1', () => {
        expect(${taskName}1(params)).toEqual(result);
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
    fs.writeFileSync(path.resolve(__dirname, taskName, `${taskName}1.js`), fileScriptContent);
} else {
    console.error(`[MAKE TASK]: Directory "${taskName}" already exist!`)
}
