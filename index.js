const fs = require('fs');
const { title } = require('qterm');

const args = require('minimist')(process.argv.slice(2));
const { dir, version } = args;

fs.readFile(dir, 'utf8', (err, data) => {
    if (err) {
        console.log(`Error reading file from disk: ${err}`);
    } else {
        let file = JSON.parse(data);
        file.version = version;

        title('Updating...', 'gradient-vice', 'Pagga');
        title('...', 'gradient-vice', 'Pagga');

        fs.writeFile(dir, JSON.stringify(file, null, 2), err => {

            if (err) throw err;

            title('Done !', 'gradient-vice', 'Pagga');
        });
    }
});
