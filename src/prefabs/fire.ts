import { Dragon } from "./dragon";
import { ENEMY_SPEED } from "../utils";

export class Fire extends Phaser.GameObjects.Sprite {
    constructor(scene: Phaser.Scene, dragon: Dragon) {
        super(scene, dragon.x + 75, dragon.y + 15, "fire");
        this.scene = scene;
        this.init();
    }

    protected init() {
        this.scene.add.existing(this); // add sprite to the scene
        this.scene.physics.add.existing(this); // add sprite as physic object to Phaser engine
        this.body.enable = true; // the physic body of "dragon" will be available for physic impacts
    }

    public static generateFire(scene: Phaser.Scene, dragon: Dragon): Fire {
        return new Fire(scene, dragon);
    }

    public move() {
        this.body.setVelocityX(ENEMY_SPEED * 2);
    }
}