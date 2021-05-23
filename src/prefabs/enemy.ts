import { FlyingObject } from "./flyingObject";
import { StartPosition } from "../utils";
import { ENEMY_SPEED } from "../utils";
import { BrowserResolution } from "../utils";

export class Enemy extends FlyingObject {
    constructor(scene: Phaser.Scene, position: StartPosition, flyingType: string) {
        super(scene, position, "enemy", flyingType);
        this.scene = scene;
        this.init();
    }

    protected init() {
        super.init();
        this.scene.events.on("update", this.update, this);
    }

    private static generateAttributes() {
        const position: StartPosition = {
            x: BrowserResolution.WIDTH + 100,
            y: Phaser.Math.Between(60, 680) 
        };
        const helicopterType: string = `enemy${Phaser.Math.Between(1, 4)}`;

        return { position: position, type: helicopterType };
    }

    public static generateEnemy(scene: Phaser.Scene): Enemy {
        const { position, type } = Enemy.generateAttributes();
        return new Enemy(scene, position, type);
    }

    public move() {
        this.body.setVelocityX(-ENEMY_SPEED);
    }

    public update() {
        // this.active means object is active or not
        if (this.active && this.body.x < -150) this.setAlive(false);
    }
    public reset(): void {
        const { position, type } = Enemy.generateAttributes();

        this.x = position.x;
        this.y = position.y;
        this.setFrame(type);
        
        this.setAlive(true);
    }
}