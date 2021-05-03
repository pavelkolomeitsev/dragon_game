export class MainScene extends Phaser.Scene {
    constructor() {
        super({key: "main-scene"});
    }

    protected preload(): void {
        this.load.image("bg", "assets/images/background.png");
    }

    protected create(): void {
        this.createBackground();
    }

    private createBackground(): void {
        this.add.sprite(0, 0, "bg").setOrigin(0, 0);
    }
}