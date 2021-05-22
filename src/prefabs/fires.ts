import { Dragon } from "./dragon";
import { Fire } from "./fire";

export class Fires extends Phaser.Physics.Arcade.Group {
    private _nextShoot: number = 0;

    constructor(world: Phaser.Physics.Arcade.World, scene: Phaser.Scene) {
        super(world, scene);
        this.scene = scene;
    }

    public createFire(dragon: Dragon): void {
        if (this._nextShoot > this.scene.time.now) return; // to prevent toans of fires

        let fire: Fire = this.getFirstDead();
        
        if (!fire) {
            fire = Fire.generateFire(this.scene, dragon);
            this.add(fire);
        } else {
            fire.reset(dragon);
        }

        fire.move();

        this._nextShoot = this.scene.time.now + 1000; // instead one fire per second
    }
}