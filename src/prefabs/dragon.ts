import { StartPosition } from "../utils";

export class Dragon extends Phaser.GameObjects.Sprite {
    private _cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;

    constructor(scene: Phaser.Scene, cursors: Phaser.Types.Input.Keyboard.CursorKeys) {
        super(scene, StartPosition.x, StartPosition.y, "dragon", "dragon1");
        this.scene = scene;
        this._cursors = cursors;
        this.init();
    }

    private init() {
        this.scene.add.existing(this); // add sprite to the scene
        this.scene.physics.add.existing(this); // add sprite as physic object to Phaser engine
        this.body.enable = true; // the physic body of "dragon" will be available for physic impacts
    }

    public move() {
        if (this._cursors?.left.isDown) {
            console.log("Left key is pressed!");
        }else if (this._cursors?.right.isDown) {
            console.log("Right key is pressed!");
        }else if (this._cursors?.down.isDown){
            console.log("Down key is pressed!");
        }else if (this._cursors?.up.isDown){
            console.log("Up key is pressed!");
        }else if (this._cursors?.space.isDown){
            console.log("Space key is pressed!");
        }else if (this._cursors?.shift.isDown){
            console.log("Shift key is pressed!");
        }
    }
}