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

/***/ "./src/prefabs/FlyingObject.ts":
/*!*************************************!*\
  !*** ./src/prefabs/FlyingObject.ts ***!
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
var FlyingObject_1 = __webpack_require__(/*! ./FlyingObject */ "./src/prefabs/FlyingObject.ts");
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
            console.log("Space key is pressed!");
        }
        if ((_f = this._cursors) === null || _f === void 0 ? void 0 : _f.shift.isDown) {
            console.log("Shift key is pressed!");
        }
    };
    return Dragon;
}(FlyingObject_1.FlyingObject));
exports.Dragon = Dragon;


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
var FlyingObject_1 = __webpack_require__(/*! ./FlyingObject */ "./src/prefabs/FlyingObject.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
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
    };
    Enemy.prototype.move = function () {
        this.body.setVelocityX(-utils_1.ENEMY_SPEED);
    };
    return Enemy;
}(FlyingObject_1.FlyingObject));
exports.Enemy = Enemy;


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
var enemy_1 = __webpack_require__(/*! ../prefabs/enemy */ "./src/prefabs/enemy.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var utils_2 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
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
        this._dragon = new dragon_1.Dragon(this, this.getPosition(0), utils_2.FlyingType[0], this.cursors);
        this._enemy = new enemy_1.Enemy(this, this.getPosition(1), utils_2.FlyingType[1]);
    };
    GameScene.prototype.createBackground = function () {
        this._bg = this.add.tileSprite(0, 0, utils_1.BrowserResolution.WIDTH, utils_1.BrowserResolution.HEIGHT, "bg").setOrigin(0, 0);
    };
    GameScene.prototype.update = function () {
        var _a, _b;
        (_a = this._dragon) === null || _a === void 0 ? void 0 : _a.move();
        (_b = this._enemy) === null || _b === void 0 ? void 0 : _b.move();
        if (this._bg)
            this._bg.tilePositionX += 2;
    };
    GameScene.prototype.getPosition = function (position) {
        var pos = null;
        switch (position) {
            case 0:
                pos = { x: 150, y: utils_1.BrowserResolution.HEIGHT / 2 };
                break;
            case 1:
                pos = { x: utils_1.BrowserResolution.WIDTH + 50, y: 60 };
                break;
            case 2:
                pos = { x: utils_1.BrowserResolution.WIDTH + 50, y: 200 };
                break;
            case 3:
                pos = { x: utils_1.BrowserResolution.WIDTH + 50, y: 320 };
                break;
            case 4:
                pos = { x: utils_1.BrowserResolution.WIDTH + 50, y: 440 };
                break;
            case 5:
                pos = { x: utils_1.BrowserResolution.WIDTH + 50, y: 560 };
                break;
            case 6:
                pos = { x: utils_1.BrowserResolution.WIDTH + 50, y: 680 };
                break;
            default:
                pos = { x: utils_1.BrowserResolution.WIDTH + 50, y: 60 };
                break;
        }
        return pos;
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
exports.ENEMY_SPEED = exports.DRAGON_SPEED = exports.FlyingType = exports.BrowserResolution = void 0;
var BrowserResolution;
(function (BrowserResolution) {
    BrowserResolution[BrowserResolution["WIDTH"] = 1536] = "WIDTH";
    BrowserResolution[BrowserResolution["HEIGHT"] = 726] = "HEIGHT";
})(BrowserResolution = exports.BrowserResolution || (exports.BrowserResolution = {}));
exports.FlyingType = {
    0: "dragon1",
    1: "enemy1",
    2: "enemy2",
    3: "enemy3",
    4: "enemy4",
};
exports.DRAGON_SPEED = 500;
exports.ENEMY_SPEED = 250;


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