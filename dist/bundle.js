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
exports.GameScene = void 0;
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        return _super.call(this, { key: "game-scene" }) || this;
    }
    GameScene.prototype.create = function () {
        this.createBackground();
    };
    GameScene.prototype.createBackground = function () {
        this.add.sprite(0, 0, "bg").setOrigin(0, 0);
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
        this._tapText = this.add.text(utils_1.BrowserResolution.WIDTH / 2, utils_1.BrowserResolution.HEIGHT / 2, "Tap to start", { fontFamily: "CurseCasual", fontSize: "60px", color: "#E62B0D", stroke: "#000000", strokeThickness: 3 }).setOrigin(0.5);
        (_a = this._tapText) === null || _a === void 0 ? void 0 : _a.setInteractive();
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
exports.BrowserResolution = void 0;
var BrowserResolution;
(function (BrowserResolution) {
    BrowserResolution[BrowserResolution["WIDTH"] = 1536] = "WIDTH";
    BrowserResolution[BrowserResolution["HEIGHT"] = 726] = "HEIGHT";
})(BrowserResolution = exports.BrowserResolution || (exports.BrowserResolution = {}));


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