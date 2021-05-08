export enum BrowserResolution {
    WIDTH = 1536,
    HEIGHT = 726
};

export const DragonStartPosition = {
    x: 150,
    y: BrowserResolution.HEIGHT / 2
};

export type StartPosition = {
    x: number,
    y: number
};

export const FlyingType = {
    0: "dragon1",
    1: "enemy1",
    2: "enemy2",
    3: "enemy3",
    4: "enemy4",
};

export const DRAGON_SPEED = 500;
export const ENEMY_SPEED = 250;