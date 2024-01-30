import {firstName , lastName } from './export.js'
console.log(firstName);
console.log(lastName);

import naam from './export.js'
console.log(naam);

import {firstName as first } from './export.js'
console.log(first);

import {
    sp , ground
} from './export.js'

console.log(`We can play ${sp} in ${ground}`);
