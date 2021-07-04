import { FlyingObject } from "./flyingObject";
import { Fires } from "./fires";
import { StartPosition } from "../utils";
import { BrowserResolution } from "../utils";
import { DRAGON_SPEED } from "../utils";

export class Dragon extends FlyingObject {
    private _cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;
    public fires: Fires;

    constructor(scene: Phaser.Scene, position: StartPosition, flyingType: string, cursors?: Phaser.Types.Input.Keyboard.CursorKeys) {
        super(scene, position, "dragon", flyingType); // "dragon" - texture`s name
        this.scene = scene;
        this._cursors = cursors;
        this.init();
        // 1. this line generate a list of textures. "dragon" (key) has to be the same as a texture`s name
        const frames: Phaser.Types.Animations.AnimationFrame[] = this.scene.anims.generateFrameNames("dragon", {
            prefix: "dragon", // it means "dragon1", "dragon2" etc...
            start: 1,
            end: 6
        });
        // 2. create an animation on the scene with a list of frames
        this.scene.anims.create({
            key: "fly", // to identify this animation
            frames: frames, // a list of textures
            frameRate: 10, // a number of frames per second
            repeat: -1, // a number of times of animations, -1 means infinitly
        });
        // 3. run animation
        this.play("fly"); // define by the key
    }

    protected init() {
        super.init();
        this.fires = new Fires(this.scene.physics.world, this.scene);
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
        this.fires?.createFire(this);
    }
}