import GameObject from './GameObject.js';

export default class Fps extends GameObject {

    constructor(parent) {
        super(parent);

        this.updateCount = 0;
        this.startTime = Date.now();
        this.nowTime;
        this.displayUpdateCount = 0;
    }

    action() {
        this.nowTime = Date.now();

        if ((this.nowTime - this.startTime) >= 1000) {
            this.displayUpdateCount = 'fps : ' + this.updateCount;
            this.updateCount = 0;
            this.startTime = this.nowTime;
        }

        document.title = this.displayUpdateCount;
        this.updateCount++;
    }
}