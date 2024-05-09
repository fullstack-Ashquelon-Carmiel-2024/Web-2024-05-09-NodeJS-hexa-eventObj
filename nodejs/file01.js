const fs = require('fs');

// fs - File System package
// js asks from Operational System
//    to perform some actions on files
//    and directories - it uses for this
//   the methods of fs package

let data1 = fs.readFileSync('./avocado.txt','utf-8');

console.log(data1);