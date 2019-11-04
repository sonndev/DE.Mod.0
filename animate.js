'use strict';
/*
 * second.mjs
 */
import {Canvas} from './canvas.js';
import {$, animate} from './nQuery.js';
import {Rect, Circle} from './shapes.js';

let things = [];
let startStop;
const MILLISECS = 5;

let cv = Object.create(Canvas);
cv.init('mycv', 'silver');

let ost = Object.create(Circle);
ost.init(cv, 31, 375, 10, 0, Math.PI * 2, 'yellow', false);
things.push(ost);

animate(things, startStop, MILLISECS);