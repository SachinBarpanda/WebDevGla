import { firstName,lastName } from "./export.js";

console.log(firstName,lastName);

import val1 from "./export.js"
console.log(val1)

import { firstName as first } from "./export.js";

console.log(first);

import {
    movie , song
} from './export.js'

console.log(movie,song);

