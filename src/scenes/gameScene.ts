import { Dragon } from "../prefabs/dragon";
import { Enemies } from "../prefabs/enemies";
import { BrowserResolution } from "../utils";
import { DragonStartPosition } from "../utils";
import { FlyingType } from "../utils";

export class GameScene extends Phaser.Scene {
    private _dragon: Dragon | undefined;
    private _enemies: Enemies | undefined;
    private _bg: Phaser.GameObjects.TileSprite | undefined;
    public cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;

    constructor() {
        super({key: "game-scene"});
    }

    protected init() {
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    protected create() {
        this.createBackground();
        // hold in object "cursors" boardkeys - left, right, up, down, space, shift
        this._dragon = new Dragon(this, DragonStartPosition, FlyingType[0], this.cursors); // pass these cursors to dragon for control of it
        this._enemies = new Enemies(this.physics.world, this);
    }

    private createBackground(): void {
        this._bg = this.add.tileSprite(0, 0, BrowserResolution.WIDTH, BrowserResolution.HEIGHT,"bg").setOrigin(0, 0);
    }

    // this method is executed every millisecond
    public update() {
        this._dragon?.move();
        if (this._bg) this._bg.tilePositionX += 2; // make the background to move
    }
}