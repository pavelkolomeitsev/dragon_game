export class PreloadScene extends Phaser.Scene {
    constructor() {
        super({key: "preload-scene"});
    }

    protected preload() {
       
    }

    protected create() {
        this.scene.start("start-scene");
    }
}