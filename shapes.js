'use strict';
/**
 * Shape object, parent
 */

import {Canvas} from './canvas.js';

const Shape = {
    initinit(cv, x, y, color) {
        this.cv = cv;
        this.ctx = cv.getContext("2d");
        this.x = x;
        this.y = y;
        this.color = color;
    },

    draw() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.closePath();

        this.ctx.lineWidth = 2;
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.stroke();        
    },

    move() {
        this.x += 0;
        this.y += 0;
    }
};

const Rect = {
    init(cv, x, y, width, height, color) {
        this.width = width;
        this.height = height;
        this.initinit(cv, x, y, color);
    }
};
Object.setPrototypeOf( Rect, Shape );

const Circle = {
    init(cv, x, y, r, startangle, endangle, color, dir, dx = 3, dy = 0) {
        this.r = r;
        this.startangle = startangle;
        this.endangle = endangle;
        this.direct = dir;
        this.dx = dx;
        this.dy = dy;
        this.initinit(cv, x, y, color);
    },

    draw() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        this.ctx.arc(this.x, this.y, this.r, this.startangle, this.endangle, this.direct);
        this.ctx.closePath();

        this.ctx.lineWidth = 2;
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        
    },

          

    move() {
        if (this.x + this.dx > this.cv.getWidth() - this.r - 20 || this.x + this.dx - this.r < 0)
      this.dx = 0, this.dy = -3;     
        if (this.y + this.dy + this.r > this.cv.getHeight() || this.y + this.dy - this.r < 20)
      this.dy = 0, this.dx = -3;
        if (this.x + this.dx < 20 + this.r || this.x + this.dx - this.r < 0)
        this.dx = 0, this.dy = 3;  
        if (this.y + this.dy + this.r > this.cv.getHeight() - this.r || this.y + this.dy - this.r < 0)
        this.dy = 0, this.dx = 3;  

this.x += this.dx;
this.y += this.dy;
    }
};
Object.setPrototypeOf( Circle, Shape );

const Ellipse = {
    init(cv, x, y, r, startangle, endangle, color, dir, scx, scy, rot) {
        this.r = r;
        this.startangle = startangle;
        this.endangle = endangle;
        this.direct = dir;
        this.scalex = scx;
        this.scaley = scy;
        this.rotate = rot;
        this.initinit(cv, x, y, color);
    },

    draw() {
        this.ctx.save();
        this.ctx.scale(this.scalex, this.scaley);
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        this.ctx.arc(this.x, this.y, this.r, this.startangle, this.endangle, this.direct);
        this.ctx.closePath();
        this.ctx.restore();
        
        this.ctx.rotate(this.rotate);
        this.ctx.lineWidth = 2;
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.stroke();
    }
};
Object.setPrototypeOf( Ellipse, Shape );

export {Rect, Circle, Ellipse};