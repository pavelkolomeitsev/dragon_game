import { FlyingObject } from "./flyingObject";
import { StartPosition } from "../utils";
import { ENEMY_SPEED } from "../utils";
import { BrowserResolution } from "../utils";

export class Enemy extends FlyingObject {
    constructor(scene: Phaser.Scene, position: StartPosition, flyingType: string, ) {
        super(scene, position, "enemy", flyingType);
        this.scene = scene;
        this.init();
    }

    protected init() {
        super.init();
    }

    public static generateEnemy(scene: Phaser.Scene): Enemy {
        const position: StartPosition = {
            x: BrowserResolution.WIDTH + 100,
            y: Phaser.Math.Between(60, 680) 
        };
        const helicopterType: string = `enemy${Phaser.Math.Between(1, 4)}`;
        return new Enemy(scene, position, helicopterType);
    }

    public move() {
        this.body.setVelocityX(-ENEMY_SPEED);
    }
}