import { FlyingObject } from "./flyingObject";
import { StartPosition } from "../utils";
import { BrowserResolution } from "../utils";
import { DRAGON_SPEED } from "../utils";

export class Dragon extends FlyingObject {
    private _cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;

    constructor(scene: Phaser.Scene, position: StartPosition, flyingType: string, cursors?: Phaser.Types.Input.Keyboard.CursorKeys) {
        super(scene, position, "dragon", flyingType);
        this.scene = scene;
        this._cursors = cursors;
        this.init();
    }

    protected init() {
        super.init();
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