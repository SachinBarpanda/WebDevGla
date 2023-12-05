
import { firstName as first,firstName,lastName } from "./export.js";

console.log(first);
console.log(firstName);
// console.log(firstName,lastName);

import val from "./export.js"
console.log(val);


import{
    year,msg
} from "./export.js"

console.log(msg,year);