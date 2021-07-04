import { Bullet } from "../prefabs/bullet";
import { Dragon } from "../prefabs/dragon";
import { Enemies } from "../prefabs/enemies";
import { Enemy } from "../prefabs/enemy";
import { Fire } from "../prefabs/fire";
import { BrowserResolution } from "../utils";
import { DragonStartPosition } from "../utils";
import { FlyingType } from "../utils";

export class GameScene extends Phaser.Scene {
    private _dragon: Dragon;
    private _enemies: Enemies;
    private _bg: Phaser.GameObjects.TileSprite;
    private _score: number = 0;
    private _scoreText: Phaser.GameObjects.Text | null;
    public cursors: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor() {
        super({ key: "game-scene" });
    }

    protected init() {
        this.cursors = this.input.keyboard.createCursorKeys();
        this._score = 0;
    }

    protected create() {
        this.createBackground();
        // hold in object "cursors" boardkeys - left, right, up, down, space, shift
        this._dragon = new Dragon(this, DragonStartPosition, FlyingType[0], this.cursors); // pass these cursors to dragon for control of it
        this._enemies = new Enemies(this.physics.world, this);
        this.createCompleteEvents();
        this.addOverlap();
        this.showScore();
    }

    private createCompleteEvents(): void {
        this._dragon.once("object_killed", this.onComplete, this);
        this.events.once("enemies_killed", this.onComplete, this);
    }

    private onComplete(): void {
        this.scene.start("start-scene", {
            continue_game: true,
            score: this._score,
            user_wins: this._dragon.active
        });
        // this._score = 0;
    }

    private addOverlap(): void {
        this.physics.add.overlap(this._dragon?.fires, this._enemies, this.onOverlapFiresEnemies, undefined, this);
        this.physics.add.overlap(this._enemies.bullets, this._dragon, this.onOverlapBulletsDragon, undefined, this);
        this.physics.add.overlap(this._dragon, this._enemies, this.onOverlapDragonEnemies, undefined, this);
    }

    private onOverlapFiresEnemies(fire: Fire, enemy: Enemy): void {
        ++this._score;
        this._scoreText?.setText(`Score: ${this._score}`);
        fire.setAlive(false);
        enemy.setAlive(false);
    }

    private onOverlapBulletsDragon(bullet: Bullet, dragon: Dragon): void {
        bullet.setAlive(false);
        dragon.setAlive(false);
    }

    private onOverlapDragonEnemies(dragon: Dragon, enemy: Enemy): void {
        dragon.setAlive(false);
        enemy.setAlive(false);
    }

    private createBackground(): void {
        this._bg = this.add.tileSprite(0, 0, BrowserResolution.WIDTH, BrowserResolution.HEIGHT,"bg").setOrigin(0, 0);
    }

    // this method is executed every millisecond
    public update() {
        this._dragon?.move();
        if (this._bg) this._bg.tilePositionX += 2; // make the background to move
    }

    private showScore(): void {
        this._scoreText = this.add.text(
            30, 30, `Score: ${this._score}`,
            { fontFamily: "CurseCasual", fontSize: "40px", color: "#E62B0D", stroke: "#000000", strokeThickness: 1, }
        );
    }
}