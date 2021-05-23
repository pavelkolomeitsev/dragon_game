import { FlyingObject } from "./flyingObject";
import { Fires } from "./fires";
import { StartPosition } from "../utils";
import { BrowserResolution } from "../utils";
import { DRAGON_SPEED } from "../utils";

export class Dragon extends FlyingObject {
    private _cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;
    private _fires: Fires | undefined;
    // private _timer: Phaser.Time.TimerEvent | null;

    constructor(scene: Phaser.Scene, position: StartPosition, flyingType: string, cursors?: Phaser.Types.Input.Keyboard.CursorKeys) {
        super(scene, position, "dragon", flyingType);
        this.scene = scene;
        this._cursors = cursors;
        this.init();
        // this._timer = this.scene.time.addEvent({
        //     delay: 1000,
        //     loop: true,
        //     callback: this.fire,
        //     callbackScope: this
        // });
    }

    protected init() {
        super.init();
        this._fires = new Fires(this.scene.physics.world, this.scene);
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
            this.fire();
        }
        if (this._cursors?.shift.isDown) {
            console.log("Shift key is pressed!");
        }
    }

    private fire(): void {
        this._fires?.createFire(this);
    }
}