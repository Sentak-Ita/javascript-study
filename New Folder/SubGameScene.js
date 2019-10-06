import GameScene from './GameScene.js';
import Fps from './Fps.js';
import Tantanmen from './Tantanmen.js';

export default class SubGameScene extends GameScene {

    constructor(parent) {
        super(parent);

        this.objects.add(new Fps(this));
        this.objects.add(new Tantanmen(this));
    }

    afterObjectsAction() {
        document.title += ' - hoge';
    }
}