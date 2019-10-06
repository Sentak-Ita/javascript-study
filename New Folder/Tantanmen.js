import GameObject from './GameObject.js';

export default class Tantanmen extends GameObject {

    constructor(parent) {
        super(parent);

        this.image = new Image();
        this.image.src = './ramen_top_tantanmen.png';

        this.left = 100;
        this.top = 100;
    }

    action() {}
}