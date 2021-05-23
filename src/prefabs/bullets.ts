import { Enemy } from "./enemy";
import { Bullet } from "./bullet";

export class Bullets extends Phaser.Physics.Arcade.Group {
    constructor(world: Phaser.Physics.Arcade.World, scene: Phaser.Scene) {
        super(world, scene);
        this.scene = scene;
    }

    public createBullet(helicopter: Enemy): void {
        let bullet: Bullet = this.getFirstDead();
        
        if (!bullet) {
            bullet = Bullet.generateBullet(this.scene, helicopter);
            this.add(bullet);
        } else {
            bullet.reset(helicopter);
        }

        bullet.move();
    }
}