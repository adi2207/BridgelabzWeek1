const fs = require('fs');

class FileManager {
    readFile(filename) {
        let rawdata = fs.readFileSync(filename);
        var array = JSON.parse(rawdata);
        return array;

    }
    writeFile(array, fileName) {
        let data = JSON.stringify(array, null, 2);
        fs.writeFileSync(fileName, data);
    }
}
module.exports={FileManager}