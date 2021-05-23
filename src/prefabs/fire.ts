import { FlyingObject } from "./flyingObject";
import { Dragon } from "./dragon";
import { ENEMY_SPEED, BrowserResolution, StartPosition } from "../utils";

export class Fire extends FlyingObject {
    constructor(scene: Phaser.Scene, position: StartPosition) {
        super(scene, position, "fire");
        this.scene = scene;
        this.init();
    }

    protected init() {
        super.init();
        this.scene.events.on("update", this.update, this);
    }

    public update(): void {
        if (this.active && (this.body.x < -150 || this.body.x > BrowserResolution.WIDTH + 100)) this.setAlive(false);
    }

    public static generateFire(scene: Phaser.Scene, dragon: Dragon): Fire {
        const position: StartPosition = {
            x: dragon.x + 75,
            y: dragon.y + 15
        };
        return new Fire(scene, position);
    }

    public move(): void {
        this.body.setVelocityX(ENEMY_SPEED * 2);
    }

    public reset(parentObject: Dragon): void {
        this.x = parentObject.x + 75;
        this.y = parentObject.y + 15;
        this.setAlive(true);
    }
}