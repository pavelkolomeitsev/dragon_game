export class GameScene extends Phaser.Scene {
    constructor() {
        super({key: "game-scene"});
    }

    protected create() {
        this.createBackground();
    }

    private createBackground(): void {
        this.add.sprite(0, 0, "bg").setOrigin(0, 0);
    }
}