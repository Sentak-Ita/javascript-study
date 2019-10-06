import GameScreen from './GameScreen.js';
import MainGameScene from './MainGameScene.js';	

var mainScene = new MainGameScene(null);
var gameScreen = new GameScreen();

function action() {
    mainScene.action();
    gameScreen.action(mainScene);

    window.requestAnimationFrame(action);
}

window.requestAnimationFrame(action);