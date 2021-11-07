import { LoadingBar } from "../utils";

export class PreloadScene extends Phaser.Scene {
    constructor() {
        super({key: "preload-scene"});
    }

    protected preload() {
        this.add.sprite(0, 0, "bg").setOrigin(0, 0);
        const loadingBar: LoadingBar = new LoadingBar(this);
        this.preloadAssets();
    }

    protected preloadAssets() {
        this.load.atlas("dragon", "assets/images/dragon.png", "assets/images/dragon.json");
        this.load.atlas("enemy", "assets/images/enemy.png", "assets/images/enemy.json");
        this.load.atlas("boom", "assets/images/boom.png", "assets/images/boom.json");
        this.load.image("fire", "assets/images/fire.png");
        this.load.image("bullet", "assets/images/bullet.png");

        this.load.audio("theme", "assets/sounds/theme.mp3");
        this.load.audio("boom", "assets/sounds/boom.mp3");
    }

    protected create() {
        this.scene.start("start-scene");
    }
}