import { Enemy } from "../prefabs/enemy";

export class Enemies extends Phaser.Physics.Arcade.Group {
    constructor(world: Phaser.Physics.Arcade.World, scene: Phaser.Scene) {
        super(world, scene);
        this.scene = scene;
    }

    public createEnemies() {
        const enemy: Enemy = Enemy.generateEnemy(this.scene);
        this.add(enemy);
        enemy.move();
    }
}