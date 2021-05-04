import { BrowserResolution } from "../utils";

export class StartScene extends Phaser.Scene {

    private _tapText: Phaser.GameObjects.Text | undefined;

    constructor() {
        super({key: "start-scene"});
    }

    protected create(): void {
        this.createBackground();
        this.createText();
    }

    private createBackground(): void {
        this.add.sprite(0, 0, "bg").setOrigin(0, 0);
    }

    private createText() {
        this._tapText = this.add.text(
            BrowserResolution.WIDTH / 2,
            BrowserResolution.HEIGHT / 2,
            "Tap to start",
            { fontFamily: "CurseCasual", fontSize: "60px", color: "#E62B0D", stroke: "#000000", strokeThickness: 3, }
        ).setOrigin(0.5);
        this._tapText?.setInteractive({useHandCursor: true}); // make text clickable and with cursor on hover
        this._tapText?.on("pointerdown", () => this.showGameScene());
    }

    private showGameScene() {
        this.scene.start("game-scene");
    }
}