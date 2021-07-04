import { BrowserResolution, StartData } from "../utils";

export class StartScene extends Phaser.Scene {

    constructor() {
        super({key: "start-scene"});
    }

    protected create(data: StartData): void {
        this.createBackground();
        if (data.continue_game) this.showPopup(data);
        this.createText();
    }

    private createBackground(): void {
        this.add.sprite(0, 0, "bg").setOrigin(0, 0);
    }

    private createText(): void {
        const tapText: Phaser.GameObjects.Text = this.add.text(
            BrowserResolution.WIDTH / 2,
            BrowserResolution.HEIGHT / 2 + 150,
            "Tap to start",
            { fontFamily: "CurseCasual", fontSize: "60px", color: "#E62B0D", stroke: "#000000", strokeThickness: 3, }
        ).setOrigin(0.5);
        tapText.setInteractive({useHandCursor: true}); // make text clickable and with cursor on hover
        tapText.on("pointerdown", () => this.showGameScene());
    }

    private showGameScene(): void {
        this.scene.start("game-scene");
    }

    private showPopup(data: StartData): void {
        this.add.graphics()
            .fillStyle(0x000000, 0.5)
            .fillRoundedRect(BrowserResolution.WIDTH / 2 - 200, BrowserResolution.HEIGHT / 2 - 200, 400, 300, 16);
        const textTitle: string = data.user_wins ? "Level completed!" : "Game over!";
        let textScore: string = "";
        textScore = data.score > 1 ? `${data.score} enemies` : `${data.score} enemy`;
        textScore = "You`ve killed " + textScore;
        this.add.text(
            BrowserResolution.WIDTH / 2,
            BrowserResolution.HEIGHT / 2 - 100,
            textTitle,
            { fontFamily: "CurseCasual", fontSize: "55px", color: "#E62B0D", stroke: "#000000", strokeThickness: 3, }).setOrigin(0.5);
        this.add.text(
            BrowserResolution.WIDTH / 2,
            BrowserResolution.HEIGHT / 2,
            textScore,
            { fontFamily: "CurseCasual", fontSize: "40px", color: "#E62B0D", stroke: "#000000", strokeThickness: 3, }).setOrigin(0.5);
    }
}