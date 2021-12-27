export enum BrowserResolution {
    WIDTH = 1536,
    HEIGHT = 726
};

export const DragonStartPosition = {
    x: 150,
    y: BrowserResolution.HEIGHT / 2
};

export type StartPosition = {
    x: number,
    y: number
};

export type Sounds = {
    theme: Phaser.Sound.BaseSound,
    boom: Phaser.Sound.BaseSound
};

export type StartData = {
    continue_game: boolean,
    score: number,
    user_wins: boolean
};

export const FlyingType = {
    0: "dragon1",
    1: "enemy1",
    2: "enemy2",
    3: "enemy3",
    4: "enemy4",
};

export const DRAGON_SPEED: number = 500;
export const ENEMY_SPEED: number = 250;
export const ENEMIES_AMOUNT: number = 20;

export class LoadingBar {
    private scene: Phaser.Scene;
    private style: any;
    private progressBox: Phaser.GameObjects.Graphics;
    private progressBar: Phaser.GameObjects.Graphics;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
        this.style = {
            boxColor: 0xD3D3D3,
            barColor: 0xFFF8DC,
            x: BrowserResolution.WIDTH / 2 - 450,
            y: BrowserResolution.HEIGHT / 2 + 250,
            width: 900,
            height: 25
        };
        this.progressBox = new Phaser.GameObjects.Graphics(this.scene);
        this.progressBox = this.scene.add.graphics();
        this.progressBar = this.scene.add.graphics();

        this.showProgressBox();
        this.setEvents();
    }

    setEvents() {
        this.scene.load.on("progress", this.showProgressBar, this);
        this.scene.load.on("complete", this.onLoadComplete, this);
    }

    showProgressBox() {
        this.progressBox
            .fillStyle(this.style.boxColor) // grey color
            .fillRect(this.style.x, this.style.y, this.style.width, this.style.height);
    }

    showProgressBar(value: number) {
        this.progressBar
            .clear()
            .fillStyle(this.style.barColor) // yellow color
            .fillRect(this.style.x, this.style.y, this.style.width * value, this.style.height);
    }

    onLoadComplete() {
        this.progressBox.destroy();
        this.progressBar.destroy();
    }
}