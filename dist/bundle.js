/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.gameConfig = void 0;
var startScene_1 = __webpack_require__(/*! ./scenes/startScene */ "./src/scenes/startScene.ts");
var bootScene_1 = __webpack_require__(/*! ./scenes/bootScene */ "./src/scenes/bootScene.ts");
var preloadScene_1 = __webpack_require__(/*! ./scenes/preloadScene */ "./src/scenes/preloadScene.ts");
var gameScene_1 = __webpack_require__(/*! ./scenes/gameScene */ "./src/scenes/gameScene.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
exports.gameConfig = {
    type: Phaser.AUTO,
    physics: {
        default: "arcade",
        arcade: { debug: false }
    },
    width: utils_1.BrowserResolution.WIDTH,
    height: utils_1.BrowserResolution.HEIGHT,
    scene: [
        new bootScene_1.BootScene(),
        new preloadScene_1.PreloadScene(),
        new startScene_1.StartScene(),
        new gameScene_1.GameScene()
    ]
};


/***/ }),

/***/ "./src/prefabs/dragon.ts":
/*!*******************************!*\
  !*** ./src/prefabs/dragon.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Dragon = void 0;
var flyingObject_1 = __webpack_require__(/*! ./flyingObject */ "./src/prefabs/flyingObject.ts");
var fires_1 = __webpack_require__(/*! ./fires */ "./src/prefabs/fires.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var utils_2 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var Dragon = (function (_super) {
    __extends(Dragon, _super);
    function Dragon(scene, position, flyingType, cursors) {
        var _this = _super.call(this, scene, position, "dragon", flyingType) || this;
        _this.scene = scene;
        _this._cursors = cursors;
        _this.init();
        return _this;
    }
    Dragon.prototype.init = function () {
        _super.prototype.init.call(this);
        this._fires = new fires_1.Fires(this.scene.physics.world, this.scene);
    };
    Dragon.prototype.move = function () {
        var _a, _b, _c, _d, _e, _f;
        this.body.setVelocityX(0);
        this.body.setVelocityY(0);
        if ((_a = this._cursors) === null || _a === void 0 ? void 0 : _a.left.isDown) {
            if (this.body.x < 0)
                return;
            this.body.setVelocityX(-utils_2.DRAGON_SPEED);
        }
        else if ((_b = this._cursors) === null || _b === void 0 ? void 0 : _b.right.isDown) {
            if (this.body.x > utils_1.BrowserResolution.WIDTH - 160)
                return;
            this.body.setVelocityX(utils_2.DRAGON_SPEED);
        }
        if ((_c = this._cursors) === null || _c === void 0 ? void 0 : _c.down.isDown) {
            if (this.body.y > utils_1.BrowserResolution.HEIGHT - 120)
                return;
            this.body.setVelocityY(utils_2.DRAGON_SPEED);
        }
        else if ((_d = this._cursors) === null || _d === void 0 ? void 0 : _d.up.isDown) {
            if (this.body.y < 0)
                return;
            this.body.setVelocityY(-utils_2.DRAGON_SPEED);
        }
        if ((_e = this._cursors) === null || _e === void 0 ? void 0 : _e.space.isDown) {
            this.fire();
        }
        if ((_f = this._cursors) === null || _f === void 0 ? void 0 : _f.shift.isDown) {
            console.log("Shift key is pressed!");
        }
    };
    Dragon.prototype.fire = function () {
        var _a;
        (_a = this._fires) === null || _a === void 0 ? void 0 : _a.createFire(this);
    };
    return Dragon;
}(flyingObject_1.FlyingObject));
exports.Dragon = Dragon;


/***/ }),

/***/ "./src/prefabs/enemies.ts":
/*!********************************!*\
  !*** ./src/prefabs/enemies.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Enemies = void 0;
var enemy_1 = __webpack_require__(/*! ../prefabs/enemy */ "./src/prefabs/enemy.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var Enemies = (function (_super) {
    __extends(Enemies, _super);
    function Enemies(world, scene) {
        var _this = _super.call(this, world, scene) || this;
        _this._createdEnemies = 0;
        _this.scene = scene;
        _this._timer = _this.scene.time.addEvent({
            delay: 1000,
            loop: true,
            callback: _this.tick,
            callbackScope: _this
        });
        return _this;
    }
    Enemies.prototype.createEnemies = function () {
        var enemy = this.getFirstDead();
        if (!enemy) {
            enemy = enemy_1.Enemy.generateEnemy(this.scene);
            this.add(enemy);
        }
        else {
            enemy.reset();
        }
        enemy.move();
        ++this._createdEnemies;
    };
    Enemies.prototype.tick = function () {
        var _a;
        this._createdEnemies < utils_1.ENEMIES_AMOUNT ? this.createEnemies() : (_a = this._timer) === null || _a === void 0 ? void 0 : _a.remove();
    };
    return Enemies;
}(Phaser.Physics.Arcade.Group));
exports.Enemies = Enemies;


/***/ }),

/***/ "./src/prefabs/enemy.ts":
/*!******************************!*\
  !*** ./src/prefabs/enemy.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Enemy = void 0;
var flyingObject_1 = __webpack_require__(/*! ./flyingObject */ "./src/prefabs/flyingObject.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var utils_2 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var Enemy = (function (_super) {
    __extends(Enemy, _super);
    function Enemy(scene, position, flyingType) {
        var _this = _super.call(this, scene, position, "enemy", flyingType) || this;
        _this.scene = scene;
        _this.init();
        return _this;
    }
    Enemy.prototype.init = function () {
        _super.prototype.init.call(this);
        this.scene.events.on("update", this.update, this);
    };
    Enemy.generateAttributes = function () {
        var position = {
            x: utils_2.BrowserResolution.WIDTH + 100,
            y: Phaser.Math.Between(60, 680)
        };
        var helicopterType = "enemy" + Phaser.Math.Between(1, 4);
        return { position: position, type: helicopterType };
    };
    Enemy.generateEnemy = function (scene) {
        var _a = Enemy.generateAttributes(), position = _a.position, type = _a.type;
        return new Enemy(scene, position, type);
    };
    Enemy.prototype.move = function () {
        this.body.setVelocityX(-utils_1.ENEMY_SPEED);
    };
    Enemy.prototype.update = function () {
        if (this.active && this.body.x < -150)
            this.setAlive(false);
    };
    Enemy.prototype.setAlive = function (status) {
        this.body.enable = status;
        this.setVisible(status);
        this.setActive(status);
    };
    Enemy.prototype.reset = function () {
        var _a = Enemy.generateAttributes(), position = _a.position, type = _a.type;
        this.x = position.x;
        this.y = position.y;
        this.setFrame(type);
        this.setAlive(true);
    };
    return Enemy;
}(flyingObject_1.FlyingObject));
exports.Enemy = Enemy;


/***/ }),

/***/ "./src/prefabs/fire.ts":
/*!*****************************!*\
  !*** ./src/prefabs/fire.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Fire = void 0;
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var Fire = (function (_super) {
    __extends(Fire, _super);
    function Fire(scene, dragon) {
        var _this = _super.call(this, scene, dragon.x + 75, dragon.y + 15, "fire") || this;
        _this.scene = scene;
        _this.init();
        return _this;
    }
    Fire.prototype.init = function () {
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.enable = true;
        this.scene.events.on("update", this.update, this);
    };
    Fire.prototype.update = function () {
        if (this.active && (this.body.x < -150 || this.body.x > utils_1.BrowserResolution.WIDTH + 100))
            this.setAlive(false);
    };
    Fire.generateFire = function (scene, dragon) {
        return new Fire(scene, dragon);
    };
    Fire.prototype.move = function () {
        this.body.setVelocityX(utils_1.ENEMY_SPEED * 2);
    };
    Fire.prototype.setAlive = function (status) {
        this.body.enable = status;
        this.setVisible(status);
        this.setActive(status);
    };
    Fire.prototype.reset = function (parentObject) {
        this.x = parentObject.x + 75;
        this.y = parentObject.y + 15;
        this.setAlive(true);
    };
    return Fire;
}(Phaser.GameObjects.Sprite));
exports.Fire = Fire;


/***/ }),

/***/ "./src/prefabs/fires.ts":
/*!******************************!*\
  !*** ./src/prefabs/fires.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Fires = void 0;
var fire_1 = __webpack_require__(/*! ./fire */ "./src/prefabs/fire.ts");
var Fires = (function (_super) {
    __extends(Fires, _super);
    function Fires(world, scene) {
        var _this = _super.call(this, world, scene) || this;
        _this._nextShoot = 0;
        _this.scene = scene;
        return _this;
    }
    Fires.prototype.createFire = function (dragon) {
        if (this._nextShoot > this.scene.time.now)
            return;
        var fire = this.getFirstDead();
        if (!fire) {
            fire = fire_1.Fire.generateFire(this.scene, dragon);
            this.add(fire);
        }
        else {
            fire.reset(dragon);
        }
        fire.move();
        this._nextShoot = this.scene.time.now + 1000;
    };
    return Fires;
}(Phaser.Physics.Arcade.Group));
exports.Fires = Fires;


/***/ }),

/***/ "./src/prefabs/flyingObject.ts":
/*!*************************************!*\
  !*** ./src/prefabs/flyingObject.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FlyingObject = void 0;
var FlyingObject = (function (_super) {
    __extends(FlyingObject, _super);
    function FlyingObject(scene, position, textureType, flyingType) {
        var _this = _super.call(this, scene, position.x, position.y, textureType, flyingType) || this;
        _this.scene = scene;
        _this.init();
        return _this;
    }
    FlyingObject.prototype.init = function () {
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.enable = true;
    };
    return FlyingObject;
}(Phaser.GameObjects.Sprite));
exports.FlyingObject = FlyingObject;


/***/ }),

/***/ "./src/scenes/bootScene.ts":
/*!*********************************!*\
  !*** ./src/scenes/bootScene.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BootScene = void 0;
var BootScene = (function (_super) {
    __extends(BootScene, _super);
    function BootScene() {
        return _super.call(this, { key: "boot-scene" }) || this;
    }
    BootScene.prototype.preload = function () {
        this.load.image("bg", "assets/images/background.png");
    };
    BootScene.prototype.create = function () {
        this.scene.start("preload-scene");
    };
    return BootScene;
}(Phaser.Scene));
exports.BootScene = BootScene;


/***/ }),

/***/ "./src/scenes/gameScene.ts":
/*!*********************************!*\
  !*** ./src/scenes/gameScene.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameScene = void 0;
var dragon_1 = __webpack_require__(/*! ../prefabs/dragon */ "./src/prefabs/dragon.ts");
var enemies_1 = __webpack_require__(/*! ../prefabs/enemies */ "./src/prefabs/enemies.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var utils_2 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var utils_3 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        return _super.call(this, { key: "game-scene" }) || this;
    }
    GameScene.prototype.init = function () {
        this.cursors = this.input.keyboard.createCursorKeys();
    };
    GameScene.prototype.create = function () {
        this.createBackground();
        this._dragon = new dragon_1.Dragon(this, utils_2.DragonStartPosition, utils_3.FlyingType[0], this.cursors);
        this._enemies = new enemies_1.Enemies(this.physics.world, this);
    };
    GameScene.prototype.createBackground = function () {
        this._bg = this.add.tileSprite(0, 0, utils_1.BrowserResolution.WIDTH, utils_1.BrowserResolution.HEIGHT, "bg").setOrigin(0, 0);
    };
    GameScene.prototype.update = function () {
        var _a;
        (_a = this._dragon) === null || _a === void 0 ? void 0 : _a.move();
        if (this._bg)
            this._bg.tilePositionX += 2;
    };
    return GameScene;
}(Phaser.Scene));
exports.GameScene = GameScene;


/***/ }),

/***/ "./src/scenes/preloadScene.ts":
/*!************************************!*\
  !*** ./src/scenes/preloadScene.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PreloadScene = void 0;
var PreloadScene = (function (_super) {
    __extends(PreloadScene, _super);
    function PreloadScene() {
        return _super.call(this, { key: "preload-scene" }) || this;
    }
    PreloadScene.prototype.preload = function () {
        this.load.atlas("dragon", "assets/images/dragon.png", "assets/images/dragon.json");
        this.load.atlas("enemy", "assets/images/enemy.png", "assets/images/enemy.json");
        this.load.image("fire", "assets/images/fire.png");
    };
    PreloadScene.prototype.create = function () {
        this.scene.start("start-scene");
    };
    return PreloadScene;
}(Phaser.Scene));
exports.PreloadScene = PreloadScene;


/***/ }),

/***/ "./src/scenes/startScene.ts":
/*!**********************************!*\
  !*** ./src/scenes/startScene.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StartScene = void 0;
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var StartScene = (function (_super) {
    __extends(StartScene, _super);
    function StartScene() {
        return _super.call(this, { key: "start-scene" }) || this;
    }
    StartScene.prototype.create = function () {
        this.createBackground();
        this.createText();
    };
    StartScene.prototype.createBackground = function () {
        this.add.sprite(0, 0, "bg").setOrigin(0, 0);
    };
    StartScene.prototype.createText = function () {
        var _this = this;
        var _a, _b;
        this._tapText = this.add.text(utils_1.BrowserResolution.WIDTH / 2, utils_1.BrowserResolution.HEIGHT / 2, "Tap to start", { fontFamily: "CurseCasual", fontSize: "60px", color: "#E62B0D", stroke: "#000000", strokeThickness: 3, }).setOrigin(0.5);
        (_a = this._tapText) === null || _a === void 0 ? void 0 : _a.setInteractive({ useHandCursor: true });
        (_b = this._tapText) === null || _b === void 0 ? void 0 : _b.on("pointerdown", function () { return _this.showGameScene(); });
    };
    StartScene.prototype.showGameScene = function () {
        this.scene.start("game-scene");
    };
    return StartScene;
}(Phaser.Scene));
exports.StartScene = StartScene;


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ENEMIES_AMOUNT = exports.ENEMY_SPEED = exports.DRAGON_SPEED = exports.FlyingType = exports.DragonStartPosition = exports.BrowserResolution = void 0;
var BrowserResolution;
(function (BrowserResolution) {
    BrowserResolution[BrowserResolution["WIDTH"] = 1536] = "WIDTH";
    BrowserResolution[BrowserResolution["HEIGHT"] = 726] = "HEIGHT";
})(BrowserResolution = exports.BrowserResolution || (exports.BrowserResolution = {}));
;
exports.DragonStartPosition = {
    x: 150,
    y: BrowserResolution.HEIGHT / 2
};
exports.FlyingType = {
    0: "dragon1",
    1: "enemy1",
    2: "enemy2",
    3: "enemy3",
    4: "enemy4",
};
exports.DRAGON_SPEED = 500;
exports.ENEMY_SPEED = 250;
exports.ENEMIES_AMOUNT = 20;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var config_1 = __webpack_require__(/*! ./config */ "./src/config.ts");
new Phaser.Game(config_1.gameConfig);

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map