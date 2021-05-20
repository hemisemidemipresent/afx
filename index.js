const help = require('./montana2.json');
const fs = require('fs');
let mt = [];
for (let i = 0; i < help.length; i++) {
    let th = help[i];
    console.log(th);
    let grped = groupBy(th, 'county');
    mt.push(grped);
}
fs.writeFile('./montana.json', JSON.stringify(mt), () => {});
function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
        let key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}
