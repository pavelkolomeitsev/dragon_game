import { StartPosition } from "../utils";
import { Enemy } from "./enemy";

export class Boom extends Phaser.GameObjects.Sprite {
    constructor(scene: Phaser.Scene, position: StartPosition, textureType: string) {
        super(scene, position.x, position.y, textureType);
        this.scene = scene;
        this.init();
        this.boomAnimation();
    }

    protected init() {
        this.scene.add.existing(this);
    }

    private boomAnimation(): void {
        const frames: Phaser.Types.Animations.AnimationFrame[] = this.scene.anims.generateFrameNames("boom", {
            prefix: "boom",
            start: 1,
            end: 4
        });
        this.scene.anims.create({
            key: "boom-anim",
            frames: frames,
            frameRate: 10,
            repeat: 0, // to play animation only once
        });
        this.play("boom-anim");
        this.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => this.destroy());
    }

    public static generateBoom(scene: Phaser.Scene, enemy: Enemy): void {
        const position: StartPosition = {
            x: enemy.x,
            y: enemy.y
        };
        new Boom(scene, position, "boom");
    }
}