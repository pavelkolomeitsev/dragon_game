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
var mainScene_1 = __webpack_require__(/*! ./mainScene */ "./src/mainScene.ts");
exports.gameConfig = {
    type: Phaser.AUTO,
    width: 1536,
    height: 726,
    scene: [new mainScene_1.MainScene()]
};


/***/ }),

/***/ "./src/mainScene.ts":
/*!**************************!*\
  !*** ./src/mainScene.ts ***!
  \**************************/
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
exports.MainScene = void 0;
var MainScene = (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        return _super.call(this, { key: "main-scene" }) || this;
    }
    MainScene.prototype.preload = function () {
        this.load.image("bg", "assets/images/background.png");
    };
    MainScene.prototype.create = function () {
        this.createBackground();
    };
    MainScene.prototype.createBackground = function () {
        this.add.sprite(0, 0, "bg").setOrigin(0, 0);
    };
    return MainScene;
}(Phaser.Scene));
exports.MainScene = MainScene;


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