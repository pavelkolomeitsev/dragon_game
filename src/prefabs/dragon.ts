import { StartPosition } from "../utils";
import { BrowserResolution } from "../utils";
import { DRAGON_SPEED } from "../utils";

export class Dragon extends Phaser.GameObjects.Sprite {
    private _cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;

    constructor(scene: Phaser.Scene, cursors?: Phaser.Types.Input.Keyboard.CursorKeys) {
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
        // to stop dragon when button is overout
        this.body.setVelocityX(0);
        this.body.setVelocityY(0);

        if (this._cursors?.left.isDown) {
            if (this.body.x < 0) return;
            this.body.setVelocityX(-DRAGON_SPEED);
        } else if (this._cursors?.right.isDown) {
            if (this.body.x > BrowserResolution.WIDTH - 160) return;
            this.body.setVelocityX(DRAGON_SPEED);
        }

        if (this._cursors?.down.isDown) {
            if (this.body.y > BrowserResolution.HEIGHT - 120) return;
            this.body.setVelocityY(DRAGON_SPEED);
        } else if (this._cursors?.up.isDown) {
            if (this.body.y < 0) return;
            this.body.setVelocityY(-DRAGON_SPEED);
        }

        if (this._cursors?.space.isDown) {
            console.log("Space key is pressed!");
        }
        if (this._cursors?.shift.isDown) {
            console.log("Shift key is pressed!");
        }
    }
}