import { Dragon } from "./dragon";
import { Fire } from "./fire";

export class Fires extends Phaser.Physics.Arcade.Group {
    constructor(world: Phaser.Physics.Arcade.World, scene: Phaser.Scene) {
        super(world, scene);
        this.scene = scene;
    }

    public createFire(dragon: Dragon) {
        let fire: Fire = this.getFirstDead();

        if (!fire) {
            fire = Fire.generateFire(this.scene, dragon);
            this.add(fire);
        } else {
            // fire.reset(dragon);
        }

        fire.move();
    }
}