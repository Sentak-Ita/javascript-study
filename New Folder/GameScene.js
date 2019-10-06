import GameObject from './GameObject.js';
import GameObjectArray from './GameObjectArray.js';

//ゲームシーン
export default class GameScene extends GameObject {

    /**
      * コンストラクタ
      * @param {GameScene} parent 親シーン
      */
    constructor(parent) {
        super(parent);

        this.childScene;
        this.objects = new GameObjectArray(this); //シーン中のゲームオブジェクト
    }

    /**
      * 1フレーム毎の処理
      */
    action() {
        this.beforeChildSceneAction();

        if (this.childScene !== undefined && this.childScene !== null) {
            this.childScene.action();
        }

        this.afterChildSceneAction();

        this.beforeObjectsAction();
        this.objects.action();
        this.afterObjectsAction();
    }

    /**
      * 子シーン前処理
      */
    beforeChildSceneAction() {}

    /**
      * 子シーン後処理
      */
    afterChildSceneAction() {}

    /**
      * オブジェクト前処理
      */
    beforeObjectsAction() {}

    /**
      * オブジェクト前処理
      */
    afterObjectsAction() {}
}