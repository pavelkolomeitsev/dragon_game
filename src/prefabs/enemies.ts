import { Enemy } from "../prefabs/enemy";
import { ENEMIES_AMOUNT } from "../utils";
import { Bullets } from "./bullets";

export class Enemies extends Phaser.Physics.Arcade.Group {
    private _timer: Phaser.Time.TimerEvent | null;
    private _createdEnemies: number = 0;
    private _killedEnemies: number = 0;
    public bullets: Bullets;

    constructor(world: Phaser.Physics.Arcade.World, scene: Phaser.Scene) {
        super(world, scene);
        this.scene = scene;
        this.bullets = new Bullets(this.scene.physics.world, this.scene);
        this._timer = this.scene.time.addEvent({
            delay: 1000,
            loop: true,
            callback: this.tick,
            callbackScope: this
        });
    }

    private createEnemies(): void {
        let enemy: Enemy = this.getFirstDead();

        if (!enemy) {
            enemy = Enemy.generateEnemy(this.scene, this.bullets);
            enemy.on("object_killed", this.onEnemyKilled, this);
            this.add(enemy);
        } else {
            enemy.reset();
        }
        
        enemy.move();
        ++this._createdEnemies;
    }

    private onEnemyKilled(): void {
        ++this._killedEnemies;
        if (this._killedEnemies >= ENEMIES_AMOUNT) this.scene.events.emit("enemies_killed");
    }

    private tick(): void {
        this._createdEnemies < ENEMIES_AMOUNT ? this.createEnemies() : this._timer?.remove();
    }
}