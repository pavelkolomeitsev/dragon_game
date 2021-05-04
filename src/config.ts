import { StartScene } from "./scenes/startScene";
import { BootScene } from "./scenes/bootScene";
import { PreloadScene } from "./scenes/preloadScene";
import { GameScene } from "./scenes/gameScene";
import { BrowserResolution } from "./utils";

export const gameConfig: object = {
    type: Phaser.AUTO,
    physics: {
        default: "arcade",
        arcade: { debug: false}
    },
    width: BrowserResolution.WIDTH,
    height: BrowserResolution.HEIGHT,
    scene: [
        // The order matters!
        new BootScene(),
        new PreloadScene(),
        new StartScene(),
        new GameScene()
    ]
};