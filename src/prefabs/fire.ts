import { Dragon } from "./dragon";
import { ENEMY_SPEED, BrowserResolution } from "../utils";

export class Fire extends Phaser.GameObjects.Sprite {
    constructor(scene: Phaser.Scene, dragon: Dragon) {
        super(scene, dragon.x + 75, dragon.y + 15, "fire");
        this.scene = scene;
        this.init();
    }

    protected init() {
        this.scene.add.existing(this); // add sprite to the scene
        this.scene.physics.add.existing(this); // add sprite as physic object to Phaser engine
        this.body.enable = true;
        this.scene.events.on("update", this.update, this);
    }

    public update(): void {
        if (this.active && (this.body.x < -150 || this.body.x > BrowserResolution.WIDTH + 100)) this.setAlive(false);
    }

    public static generateFire(scene: Phaser.Scene, dragon: Dragon): Fire {
        return new Fire(scene, dragon);
    }

    public move(): void {
        this.body.setVelocityX(ENEMY_SPEED * 2);
    }

    private setAlive(status: boolean): void {
        this.body.enable = status;
        this.setVisible(status);
        this.setActive(status);
    }

    public reset(parentObject: Dragon): void {
        this.x = parentObject.x + 75;
        this.y = parentObject.y + 15;
        this.setAlive(true);
    }
}