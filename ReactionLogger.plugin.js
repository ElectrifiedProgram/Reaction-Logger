/**
 * @name ReactionLogger
 * @version 0.0.1
 * @description Logs reactions from users
 * @author miix#2022
*/

const config = {

    "info": {
        "name": "ReactionLogger",
        "description": "Logs reactions from users.",
        "version": "0.0.1",
        "authors": [
            { "name": "MixedInCode", "discord_id": "633494416560095232" }
        ],
        "github": "",
        "github_raw": ""
    }, "changelog": [
        {
            "title": "Initial Release", "items": [
                "This plugin is in its infancy, so expect many things to be improved/added/adjusted."
            ]
        }]

};

const [plugin, boundedLibrary] = global.ZeresPluginLibrary.buildPlugin(config);

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
            /******/
        };
        /******/
    })();
/******/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                    /******/
                }
                /******/
            }
            /******/
        };
        /******/
    })();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
        /******/
    })();
    /******/
    /************************************************************************/
    var __webpack_exports__ = {};

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
        "default": () => (/* binding */ ReactionLogger)
    });

    const bdApiReact = global["BdApi"]["React"];
    const bdApiReactDefault = __webpack_require__.n(external_BdApi_React_namespaceObject);
    console.log(bdApiReactDefault);

});

module.exports = class ReactionLogger {

    load() { }
    start() {



    }

    stop() {

    }
}