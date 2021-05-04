export class PreloadScene extends Phaser.Scene {
    constructor() {
        super({key: "preload-scene"});
    }

    protected preload() {
        this.load.atlas("dragon", "assets/images/dragon.png", "assets/images/dragon.json");
    }

    protected create() {
        this.scene.start("start-scene");
    }
}