import { StartPosition } from "../utils";

export class FlyingObject extends Phaser.GameObjects.Sprite {
    constructor(scene: Phaser.Scene, position: StartPosition, textureType: string, flyingType: string, ) {
        super(scene, position.x, position.y, textureType, flyingType);
        this.scene = scene;
        this.init();
    }

    protected init() {
        this.scene.add.existing(this); // add sprite to the scene
        this.scene.physics.add.existing(this); // add sprite as physic object to Phaser engine
        this.body.enable = true; // the physic body of "dragon" will be available for physic impacts
    }
}