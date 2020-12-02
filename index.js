var xirr = require('xirr');
var rate = xirr([
   {amount: -1000, when: new Date(2016, 0, 15)},
   {amount: -2500, when: new Date(2016, 1, 8)},
   {amount: -1000, when: new Date(2016, 3, 17)},
   {amount: 5050, when: new Date(2016, 7, 24)},
]);
console.log(rate);

