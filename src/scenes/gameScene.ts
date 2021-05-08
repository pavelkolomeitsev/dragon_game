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
        this._enemies.createEnemies();
        this._enemies.createEnemies();
        this._enemies.createEnemies();
    }

    private createBackground(): void {
        this._bg = this.add.tileSprite(0, 0, BrowserResolution.WIDTH, BrowserResolution.HEIGHT,"bg").setOrigin(0, 0);
    }

    // this method is executed every millisecond
    public update() {
        this._dragon?.move();
        if (this._bg) this._bg.tilePositionX += 2; // make the background to move
    }

    // private getPosition(position: number): StartPosition {
    //     let pos: StartPosition | null = null;
    //     switch (position) {
    //         case 0:
    //             pos = { x: 150, y: BrowserResolution.HEIGHT / 2 };
    //             break;
    //         case 1:
    //             pos = { x: BrowserResolution.WIDTH + 50, y: 60 };
    //             break;
    //         case 2:
    //             pos = { x: BrowserResolution.WIDTH + 50, y: 200 };
    //             break;
    //         case 3:
    //             pos = { x: BrowserResolution.WIDTH + 50, y: 320 };
    //             break;
    //         case 4:
    //             pos = { x: BrowserResolution.WIDTH + 50, y: 440 };
    //             break;
    //         case 5:
    //             pos = { x: BrowserResolution.WIDTH + 50, y: 560 };
    //             break;
    //         case 6:
    //             pos = { x: BrowserResolution.WIDTH + 50, y: 680 };
    //             break;
    //         default:
    //             pos = { x: BrowserResolution.WIDTH + 50, y: 60 };
    //             break;
    //     }
    //     return pos;
    // }
}