import { FlyingObject } from "./flyingObject";
import { ENEMY_SPEED, StartPosition } from "../utils";
import { Enemy } from "./enemy";

export class Bullet extends FlyingObject {
    constructor(scene: Phaser.Scene, position: StartPosition) {
        super(scene, position, "bullet");
        this.scene = scene;
        this.init();
    }

    protected init() {
        super.init();
        this.scene.events.on("update", this.update, this);
    }

    public update(): void {
        if (this.active && this.body.x < -150) this.setAlive(false);
    }

    public static generateBullet(scene: Phaser.Scene, helicopter: Enemy): Bullet {
        const position: StartPosition = {
            x: helicopter.x - 45,
            y: helicopter.y + 10
        };
        return new Bullet(scene, position);
    }

    public move(): void {
        this.body.setVelocityX(-ENEMY_SPEED * 2);
    }

    public reset(parentObject: Enemy): void {
        this.x = parentObject.x - 45;
        this.y = parentObject.y + 10;
        this.setAlive(true);
    }
}