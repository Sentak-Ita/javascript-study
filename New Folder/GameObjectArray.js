import GameObject from './GameObject.js';

export default class GameObjectArray extends GameObject {

    constructor(parent) {
        super(parent);

        this.gameObjects = [];
    }

    add(item) {
        this.gameObjects.push(item);
    }

    remove(item) {
        var index = this.gameObjects.indexOf(item);
        this.gameObjects.splice(index, 1);
    }

    action() {
        this.gameObjects.forEach(function(item, index, array) {
            item.action();
        });
    }

}