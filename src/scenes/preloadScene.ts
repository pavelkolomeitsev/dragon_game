export class PreloadScene extends Phaser.Scene {
    constructor() {
        super({key: "preload-scene"});
    }

    protected preload() {
        this.load.atlas("dragon", "assets/images/dragon.png", "assets/images/dragon.json");
        this.load.atlas("enemy", "assets/images/enemy.png", "assets/images/enemy.json");
        this.load.image("fire", "assets/images/fire.png");
        this.load.image("bullet", "assets/images/bullet.png");
    }

    protected create() {
        this.scene.start("start-scene");
    }
}