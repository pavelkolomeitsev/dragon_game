import { FlyingObject } from "./FlyingObject";
import { StartPosition } from "../utils";
import { ENEMY_SPEED } from "../utils";

export class Enemy extends FlyingObject {
    constructor(scene: Phaser.Scene, position: StartPosition, flyingType: string, ) {
        super(scene, position, "enemy", flyingType);
        this.scene = scene;
        this.init();
    }

    protected init() {
        super.init();
    }

    public move() {
        this.body.setVelocityX(-ENEMY_SPEED);
    }
}