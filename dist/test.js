"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
console.log(index_1.concatString(['One', 'Two', 'three'], ',', 'Numbers(', ');'));
console.log(index_1.concatString(['One', 'Two', 'three'], ' - ', '> ', ' <'));
var query = "\n    ?\n    &fields=id,name\n    &join=gestor||id,name\n    &filter=isActive||eq||true\n    &filter=name||$cont||Jhon Doe\n";
console.log(index_1.queryEncodeURI(query));
