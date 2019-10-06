export default class GameScreen {

    constructor() {
        this.targetCanvas = document.getElementById('game_screen');

        this.bufferCanvas = document.createElement('canvas');
        this.bufferCanvas.width = this.targetCanvas.width;
        this.bufferCanvas.height = this.targetCanvas.height;

        this.bufferContext = this.bufferCanvas.getContext('2d');

        this.targetCanvasContext = this.targetCanvas.getContext('2d');
    }

    action(scene) {
        var targetScene = scene;
        var hoge = this;

        do {
            targetScene.objects.gameObjects.forEach(function(item, index, array) {
                if (item.image !== undefined && item.image !== null) {
                    hoge.bufferContext.drawImage(item.image, item.left, item.top);
                }
            });

            targetScene = targetScene.childScene;
        } while (targetScene !== undefined && targetScene !== null)

        this.targetCanvasContext.drawImage(this.bufferCanvas, 0, 0);

        this.clearBuffer();
    }

    clearBuffer() {
        var originalFillStyle = this.bufferContext.fillStyle;

        this.bufferContext.fillStyle = 'rgb(255, 255, 255)';
        this.bufferContext.fillRect(0, 0, this.bufferCanvas.width, this.bufferCanvas.height);
        this.bufferContext.fillStyle = originalFillStyle;
    }
}