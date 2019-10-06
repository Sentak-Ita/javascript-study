import GameScene from './GameScene.js';
import SubGameScene from './SubGameScene.js';

export default class MainGameScene extends GameScene {

    constructor(parent) {
        super(parent);

        this.childScene = new SubGameScene(this);
    }
}