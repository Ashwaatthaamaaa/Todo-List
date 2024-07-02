/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background-color: rgb(110, 110, 110);
    color: white;
    height: 100vh;
    font-family: "Acme", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }

  

  .container{
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 1.4fr 9fr;
    grid-template-areas: 
    'header header'
    'sidebar main';
    height: 100vh;
    width: 100vw;
  }


  .header{
    grid-area: header;
    height: 100%;
    /* background-color: aqua; */
    font-family: "Acme", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 4rem;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.1);

  }

  .sidebar{
    grid-area: sidebar;
    /* background-color: bisque; */
    height: 100%;
    background-color: rgba(0, 0, 0, 0.05);
    padding: 30px 40px;
      
  }


  .main{
    grid-area: main;
    /* background-color: blue; */
    height: 100%;
    width: 100%;

    position: relative; /* This is necessary to position the button relative to this container */
    border: 1px solid #ccc;
  }


  ul{
    list-style: none;
    padding: 0px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 20px;
    cursor: pointer;
  }

  li{
    font-family: "Acme", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.42rem;
    text-align: center;
  }


  hr{
    margin: 20px 0px;
    border: 0;
    border-bottom: 1px solid #ccc;
    background: #999;
    width: 100%;
  }



  .btn{
    background-color: #BAFF39;
    color: black;
    font-family: "Acme", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1rem;
    text-align: center;
  }

  .project-btn{
    padding: 8px;
    font-size: 1.42rem;
    margin: 0px auto;
    width: 100%;
    font-size: 1.42rem;
    cursor: pointer;
  }



  .task-btn{
    position: absolute; /* Absolute positioning for the button */
    bottom: 10px; /* Adjust the value as needed for spacing from the bottom */
    right: 10px;
    padding: 10px;
    font-size: 1.42rem;
    width: 15%;
    cursor: pointer;
  }


  #modal,#task-modal{
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
  }


  .modal-content {
    background-color: yellowgreen;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
    position: relative;
  }
  
  .close-modal,.project-close-modal {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    cursor: pointer;
    color: #000;
  }


  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  label {
    margin-bottom: 10px;
    color: white;
    margin-right: 10px;
  }
  
  input {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button[type="submit"] {
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
   h1{
    font-family: "Acme", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1rem;
    text-align: center;
    color: black;
   }


   .form-container{
     margin-top: 10px;
   }


   .selected{
    background-color: rgba(255, 255, 255, 0.5);
   }

   .task{
      /* background-color: wheat; */
      width: 100%;
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      min-height:75px;
      align-items: center;
      padding: 20px;
   }

   .lessDetail {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
   }

   .taskList{
    height: 100%;
    width: 100%;
    padding: 5px;
   }

   .task input{
    margin-bottom: 0px;
    padding: 0px;
    width: 30px;
    height: 30px;
  }

  .task:hover{
    border-color: #4CAF50;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
    background-color: rgba(255, 255, 255, 0.5);
  }

  /* .editGrid{
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(3,1fr);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
    background-color: #f9f9f9;
  }

  .editGrid.active{
    max-height: 200px;
    padding: 10px;
    border: 1px solid #ddd;
    border-top: none;
  } */


.task-item {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    width: 100%;
}

.task-name {
    grid-column: 1 / 3;
}

.task-date, .task-time, .task-important, .task-save, .task-edit, .task-delete {
    width: 100%;
}

.task-important {
    display: flex;
    align-items: center;
}

.task-important input {
    margin-right: 5px;
}

.active{
  display: none;
}



`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*, *::before, *::after {\n    box-sizing: border-box;\n  }\n  * {\n    margin: 0;\n  }\n  body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n    background-color: rgb(110, 110, 110);\n    color: white;\n    height: 100vh;\n    font-family: \"Acme\", sans-serif;\n    font-weight: 400;\n    font-style: normal;\n  }\n  img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n  }\n  input, button, textarea, select {\n    font: inherit;\n  }\n  p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n  }\n  #root, #__next {\n    isolation: isolate;\n  }\n\n  \n\n  .container{\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: 1.4fr 9fr;\n    grid-template-areas: \n    'header header'\n    'sidebar main';\n    height: 100vh;\n    width: 100vw;\n  }\n\n\n  .header{\n    grid-area: header;\n    height: 100%;\n    /* background-color: aqua; */\n    font-family: \"Acme\", sans-serif;\n    font-weight: 400;\n    font-style: normal;\n    font-size: 4rem;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.1);\n\n  }\n\n  .sidebar{\n    grid-area: sidebar;\n    /* background-color: bisque; */\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.05);\n    padding: 30px 40px;\n      \n  }\n\n\n  .main{\n    grid-area: main;\n    /* background-color: blue; */\n    height: 100%;\n    width: 100%;\n\n    position: relative; /* This is necessary to position the button relative to this container */\n    border: 1px solid #ccc;\n  }\n\n\n  ul{\n    list-style: none;\n    padding: 0px;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    gap: 20px;\n    cursor: pointer;\n  }\n\n  li{\n    font-family: \"Acme\", sans-serif;\n    font-weight: 400;\n    font-style: normal;\n    font-size: 1.42rem;\n    text-align: center;\n  }\n\n\n  hr{\n    margin: 20px 0px;\n    border: 0;\n    border-bottom: 1px solid #ccc;\n    background: #999;\n    width: 100%;\n  }\n\n\n\n  .btn{\n    background-color: #BAFF39;\n    color: black;\n    font-family: \"Acme\", sans-serif;\n    font-weight: 400;\n    font-style: normal;\n    font-size: 1rem;\n    text-align: center;\n  }\n\n  .project-btn{\n    padding: 8px;\n    font-size: 1.42rem;\n    margin: 0px auto;\n    width: 100%;\n    font-size: 1.42rem;\n    cursor: pointer;\n  }\n\n\n\n  .task-btn{\n    position: absolute; /* Absolute positioning for the button */\n    bottom: 10px; /* Adjust the value as needed for spacing from the bottom */\n    right: 10px;\n    padding: 10px;\n    font-size: 1.42rem;\n    width: 15%;\n    cursor: pointer;\n  }\n\n\n  #modal,#task-modal{\n    display: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    justify-content: center;\n    align-items: center;\n  }\n\n\n  .modal-content {\n    background-color: yellowgreen;\n    padding: 20px;\n    border-radius: 5px;\n    text-align: center;\n    position: relative;\n  }\n  \n  .close-modal,.project-close-modal {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    font-size: 24px;\n    cursor: pointer;\n    color: #000;\n  }\n\n\n  form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  \n  label {\n    margin-bottom: 10px;\n    color: white;\n    margin-right: 10px;\n  }\n  \n  input {\n    margin-bottom: 20px;\n    padding: 10px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n  }\n  \n  button[type=\"submit\"] {\n    padding: 10px 20px;\n    background-color: #007BFF;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n  }\n   h1{\n    font-family: \"Acme\", sans-serif;\n    font-weight: 400;\n    font-style: normal;\n    font-size: 1rem;\n    text-align: center;\n    color: black;\n   }\n\n\n   .form-container{\n     margin-top: 10px;\n   }\n\n\n   .selected{\n    background-color: rgba(255, 255, 255, 0.5);\n   }\n\n   .task{\n      /* background-color: wheat; */\n      width: 100%;\n      margin-bottom: 10px;\n      display: flex;\n      flex-direction: column;\n      gap: 20px;\n      min-height:75px;\n      align-items: center;\n      padding: 20px;\n   }\n\n   .lessDetail {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 100%;\n   }\n\n   .taskList{\n    height: 100%;\n    width: 100%;\n    padding: 5px;\n   }\n\n   .task input{\n    margin-bottom: 0px;\n    padding: 0px;\n    width: 30px;\n    height: 30px;\n  }\n\n  .task:hover{\n    border-color: #4CAF50;\n    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);\n    background-color: rgba(255, 255, 255, 0.5);\n  }\n\n  /* .editGrid{\n    grid-template-columns: repeat(2,1fr);\n    grid-template-rows: repeat(3,1fr);\n    max-height: 0;\n    overflow: hidden;\n    transition: max-height 0.3s ease-out;\n    background-color: #f9f9f9;\n  }\n\n  .editGrid.active{\n    max-height: 200px;\n    padding: 10px;\n    border: 1px solid #ddd;\n    border-top: none;\n  } */\n\n\n.task-item {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(3, auto);\n    gap: 10px;\n    padding: 10px;\n    border: 1px solid #ccc;\n    width: 100%;\n}\n\n.task-name {\n    grid-column: 1 / 3;\n}\n\n.task-date, .task-time, .task-important, .task-save, .task-edit, .task-delete {\n    width: 100%;\n}\n\n.task-important {\n    display: flex;\n    align-items: center;\n}\n\n.task-important input {\n    margin-right: 5px;\n}\n\n.active{\n  display: none;\n}\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).

var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }
  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");


/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  //
  // Note to future-self: No, you can't remove the `toLowerCase()` call.
  // REF: https://github.com/uuidjs/uuid/pull/677#issuecomment-1757351351
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
  var uuid = unsafeStringify(arr, offset);
  // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields
  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }
  return uuid;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");

function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/addDOM.js":
/*!***********************!*\
  !*** ./src/addDOM.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEventListener: () => (/* binding */ addEventListener),
/* harmony export */   currentProject: () => (/* binding */ currentProject),
/* harmony export */   selectedProject: () => (/* binding */ selectedProject)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProject */ "./src/addProject.js");
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getData */ "./src/getData.js");
/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addTask */ "./src/addTask.js");
/* harmony import */ var _updateUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateUI */ "./src/updateUI.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage */ "./src/storage.js");







let currentProject = "Default Project";


function addEventListener(){

    addTaskListener();
    addProjectListener();
    selectedProject();
    editForm();

} 


function addTaskListener(){
    const task = document.querySelector('.task-btn')
    const taskModal = document.querySelector('#task-modal')
    const close_btn = document.querySelector("#task-modal .close-modal");
    const modalForm = document.querySelector('#taskModalForm');

    close_btn.addEventListener('click',()=>{
        taskModal.style.display="none";
    });


    task.addEventListener('click', () => {
        taskModal.style.display = 'flex';
      });

      window.addEventListener('click', (event) => {
        if (event.target === modal) {
          taskModal.style.display = 'none';
        }
      });
    
      modalForm.addEventListener('submit', (event) => {
        event.preventDefault();
        (0,_addTask__WEBPACK_IMPORTED_MODULE_3__.addTask)();
        (0,_updateUI__WEBPACK_IMPORTED_MODULE_4__.updateTaskList)(currentProject);
        taskModal.style.display = 'none';
      });
}



function addProjectListener(){
    const openModal = document.querySelector('.project-btn');
    const closeModal = document.querySelector('.project-close-modal');
    const modal = document.querySelector('#modal');
    const modalForm = document.querySelector('#projectModalForm');

    openModal.addEventListener('click', () => {
        modal.style.display = 'flex';
      });

    
      closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
      });
  
      modalForm.addEventListener('submit',(event)=>{
        event.preventDefault();
        (0,_addProject__WEBPACK_IMPORTED_MODULE_1__.addProject)();
        modal.style.display = 'none';
      })
}


function selectedProject(){
    const projects = document.querySelector('.projects');
    projects.addEventListener('click',(e)=>{
        if(e.target && e.target.nodeName == "LI"){
            const items = document.querySelectorAll('.projects li');
            items.forEach(item => item.classList.remove('selected'));
            e.target.classList.add('selected');
            currentProject = e.target.textContent;
            console.log('addDom');
            (0,_updateUI__WEBPACK_IMPORTED_MODULE_4__.updateTaskList)(currentProject);
        }
    })
}


function editForm() {
  const taskList = document.querySelector('.taskList');

  // Event listener on taskList for click events
  taskList.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('task')) {
      let taskId = event.target.getAttribute('id');
      let editForm = event.target.querySelector('.task-item');

      if (!editForm) {
        // If no edit form exists, create and append it
        event.target.appendChild((0,_updateUI__WEBPACK_IMPORTED_MODULE_4__.createEditForm)((0,_storage__WEBPACK_IMPORTED_MODULE_5__.taskFinder)(taskId, currentProject)));
      } else {
        // Toggle edit form visibility
        editForm.classList.toggle('active');

        // Check if edit form should be hidden
      }
    }
  });
}

// function taskListDisplay(){
//     const projects = document.querySelector('.projects');
//     projects.addEventListener('click',(e)=>{
//         if(e.target && e.target.nodeName == "LI"){
//             const items = document.querySelectorAll('.projects li');
//             items.forEach(item => item.addEventListener());
//             e.target.classList.add('selected');
//             currentProject = e.target.textContent;
//         }
//     })
// }

/***/ }),

/***/ "./src/addProject.js":
/*!***************************!*\
  !*** ./src/addProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject)
/* harmony export */ });
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ "./src/getData.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _updateUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateUI */ "./src/updateUI.js");




function addProject(){

    let projectArray = _storage__WEBPACK_IMPORTED_MODULE_1__.projects;
    let projectName = (0,_getData__WEBPACK_IMPORTED_MODULE_0__.getProject)();
    projectArray.push(projectName);
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.storeProjects)(projectName);
    console.log(projectArray);
    (0,_updateUI__WEBPACK_IMPORTED_MODULE_2__.updateProjectList)(projectArray);
}

/***/ }),

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   getAllTask: () => (/* binding */ getAllTask)
/* harmony export */ });
/* harmony import */ var _addDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addDOM */ "./src/addDOM.js");
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ "./src/getData.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/storage.js");





function addTask(){
    let task = (0,_getData__WEBPACK_IMPORTED_MODULE_1__.getTask)();
    let projectName = _addDOM__WEBPACK_IMPORTED_MODULE_0__.currentProject;
    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.storeTask)(projectName,task);
}

function getAllTask(){
    
}

/***/ }),

/***/ "./src/getData.js":
/*!************************!*\
  !*** ./src/getData.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProject: () => (/* binding */ getProject),
/* harmony export */   getTask: () => (/* binding */ getTask)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


function generateUUID() {
  return (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
}



function getProject(){
    const projectNameField = document.querySelector('#name');
    const projectName = projectNameField.value;
    console.log(projectName);
    return projectName;
}



function getTask(){
    const taskName = document.querySelector('#task-name').value;
    const dueDate = document.querySelector('#due-date').value;
    const dueTime = document.querySelector('#due-time').value;

    let taskObj = {
        name: taskName,
        id: generateUUID(),
        dueDate: dueDate,
        dueTime: dueTime
    }
    console.log(taskObj);
    return taskObj;


}

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProjects: () => (/* binding */ getProjects),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   storeProjects: () => (/* binding */ storeProjects),
/* harmony export */   storeTask: () => (/* binding */ storeTask),
/* harmony export */   taskFinder: () => (/* binding */ taskFinder)
/* harmony export */ });



const projects = [];


function getProjects(){
    //let arr = [];
        if(localStorage.length == 0){
            storeProjects("Default Project")
        }
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i); // Get the key
            projects.push(key);
        }
        
    return projects;
}


function storeProjects(projectName){

    localStorage.setItem(projectName,JSON.stringify([]));
}

function storeTask(projectName,obj){
    let taskList = JSON.parse(localStorage.getItem(projectName));
    if (taskList === null) {
        taskList = [];
    }
    
    taskList.push(obj);
    console.log(taskList);
    localStorage.setItem(projectName,JSON.stringify(taskList));
}

function taskFinder(taskId,currentProject){
    let objList = JSON.parse(localStorage.getItem(currentProject));
    console.log(objList);
    let obj = objList.find(task => task.id === taskId);
    return obj;

}

/***/ }),

/***/ "./src/updateUI.js":
/*!*************************!*\
  !*** ./src/updateUI.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEditForm: () => (/* binding */ createEditForm),
/* harmony export */   updateProjectList: () => (/* binding */ updateProjectList),
/* harmony export */   updateTaskList: () => (/* binding */ updateTaskList)
/* harmony export */ });






function updateProjectList(arr){
    const projectList = document.querySelector('.projects');

    projectList.innerHTML = " ";
    arr.forEach(name => {
        let listItem = document.createElement('li');
        listItem.textContent = name;
        projectList.appendChild(listItem);
    });
}



function updateTaskList(projectName){
    const container = document.querySelector('.taskList');
    container.innerHTML = ""

    // for (let i = 0; i < localStorage.length; i++) {
    //     let key = localStorage.key(i); // Get the key
    //     let value = JSON.parse(localStorage.getItem(key));

    // }

    let value = JSON.parse(localStorage.getItem(projectName));

    console.log(value);


    value.forEach(task => {
        const taskCard = document.createElement('div');
        const lessDetail = document.createElement('div');

        lessDetail.classList.add('lessDetail')
        taskCard.classList.add('task');
        console.log(task.id);
        taskCard.setAttribute('id',task.id);

        const completeCheck = document.createElement('input');
        completeCheck.type = 'checkbox';

        const description = document.createElement('h2');
        description.textContent = task.name;

        const importantIndicator = document.createElement('input');
        importantIndicator.type = 'checkbox';



        // const importantCheck = document.createElement('')
        lessDetail.appendChild(completeCheck);
        lessDetail.appendChild(description);
        lessDetail.appendChild(importantIndicator);
        taskCard.appendChild(lessDetail);
        container.appendChild(taskCard);
    })


}


function createEditForm(task){
    // const editGrid = document.createElement('div');
    // const nameField =document.createElement('input');
    // const dueDate = document.createElement('input');
    // const dueTime = document.createElement('input');
    // const importantCheckbox = document.createElement('input');
    // const saveEdit = document.createElement('button');
    // const deleteTask = document.createElement('button');



    // const labelName = document.createElement('label');
    // labelName.for = ""

    // editGrid.classList.add('editGrid');




    // nameField.type ="text";
    // dueDate.type ="date";
    // dueTime.type = "time";
    // importantCheckbox.type = "checkbox";



    // saveEdit.textContent = "Save Edit";
    // deleteTask.textContent ="Delete Task";



    // editGrid.appendChild(nameField);
    // editGrid.appendChild(dueDate);
    // editGrid.appendChild(dueTime);
    // editGrid.appendChild(importantCheckbox);
    // editGrid.appendChild(saveEdit);
    // editGrid.appendChild(deleteTask);

    // return editGrid;


    const taskDiv = document.createElement('div');
    taskDiv.className = 'task-item';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.value = task.name || '';
    nameInput.placeholder = 'Task Name';
    nameInput.className = 'task-name';

    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.value = task.dueDate || '';
    dateInput.className = 'task-date';

    const timeInput = document.createElement('input');
    timeInput.type = 'time';
    timeInput.value = task.dueTime || '';
    timeInput.className = 'task-time';

    const importantDiv = document.createElement('div');
    importantDiv.className = 'task-important';

    const importantCheckbox = document.createElement('input');
    importantCheckbox.type = 'checkbox';
    importantCheckbox.checked = task.important || false;
    importantCheckbox.id = `important-${task.id}`;

    const importantLabel = document.createElement('label');
    importantLabel.htmlFor = `important-${task.id}`;
    importantLabel.textContent = 'Important';

    importantDiv.appendChild(importantCheckbox);
    importantDiv.appendChild(importantLabel);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'task-edit';
    editButton.onclick = () => editTask(task.id);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'task-delete';
    deleteButton.onclick = () => deleteTask(task.id);

    taskDiv.appendChild(nameInput);
    taskDiv.appendChild(dateInput);
    taskDiv.appendChild(timeInput);
    taskDiv.appendChild(importantDiv);
    taskDiv.appendChild(editButton);
    taskDiv.appendChild(deleteButton);

    return taskDiv;

}

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _addDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addDOM */ "./src/addDOM.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _updateUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateUI */ "./src/updateUI.js");






function app(){
  (0,_storage__WEBPACK_IMPORTED_MODULE_2__.getProjects)();
  (0,_updateUI__WEBPACK_IMPORTED_MODULE_3__.updateProjectList)(_storage__WEBPACK_IMPORTED_MODULE_2__.projects);
  (0,_addDOM__WEBPACK_IMPORTED_MODULE_1__.addEventListener)();
}

app();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQSx3QkFBd0I7QUFDeEIsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUEsT0FBTyxnRkFBZ0YsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksU0FBUyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGNBQWMsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLFdBQVcsd0JBQXdCLGFBQWEsUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxTQUFTLEtBQUssd0JBQXdCLHVCQUF1QixXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLGtCQUFrQixPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxV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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFFBQVE7O0FBRWhEO0FBQ0EsMENBQTBDLFFBQVE7QUFDbEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7OztVQ2hLQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN1QjtBQUNtQjtBQUNoQjs7O0FBRy9DO0FBQ0EsRUFBRSxxREFBVztBQUNiLEVBQUUsNERBQWlCLENBQUMsOENBQVE7QUFDNUIsRUFBRSx5REFBZ0I7QUFDbEI7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FkZERPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWRkUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYWRkVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZ2V0RGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdXBkYXRlVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gICoge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBib2R5IHtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTAsIDExMCwgMTEwKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBmb250LWZhbWlseTogXCJBY21lXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cbiAgaW1nLCBwaWN0dXJlLCB2aWRlbywgY2FudmFzLCBzdmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuICBpbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSwgc2VsZWN0IHtcbiAgICBmb250OiBpbmhlcml0O1xuICB9XG4gIHAsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIH1cbiAgI3Jvb3QsICNfX25leHQge1xuICAgIGlzb2xhdGlvbjogaXNvbGF0ZTtcbiAgfVxuXG4gIFxuXG4gIC5jb250YWluZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjRmciA5ZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgJ2hlYWRlciBoZWFkZXInXG4gICAgJ3NpZGViYXIgbWFpbic7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gIH1cblxuXG4gIC5oZWFkZXJ7XG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWE7ICovXG4gICAgZm9udC1mYW1pbHk6IFwiQWNtZVwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG4gIH1cblxuICAuc2lkZWJhcntcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlOyAqL1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIHBhZGRpbmc6IDMwcHggNDBweDtcbiAgICAgIFxuICB9XG5cblxuICAubWFpbntcbiAgICBncmlkLWFyZWE6IG1haW47XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgKi9cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIHBvc2l0aW9uIHRoZSBidXR0b24gcmVsYXRpdmUgdG8gdGhpcyBjb250YWluZXIgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICB9XG5cblxuICB1bHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIGxpe1xuICAgIGZvbnQtZmFtaWx5OiBcIkFjbWVcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEuNDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cblxuICBocntcbiAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICBiYWNrZ3JvdW5kOiAjOTk5O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cblxuXG4gIC5idG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JBRkYzOTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1mYW1pbHk6IFwiQWNtZVwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAucHJvamVjdC1idG57XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGZvbnQtc2l6ZTogMS40MnJlbTtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMS40MnJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuXG5cbiAgLnRhc2stYnRue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyogQWJzb2x1dGUgcG9zaXRpb25pbmcgZm9yIHRoZSBidXR0b24gKi9cbiAgICBib3R0b206IDEwcHg7IC8qIEFkanVzdCB0aGUgdmFsdWUgYXMgbmVlZGVkIGZvciBzcGFjaW5nIGZyb20gdGhlIGJvdHRvbSAqL1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxLjQycmVtO1xuICAgIHdpZHRoOiAxNSU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cblxuICAjbW9kYWwsI3Rhc2stbW9kYWx7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cblxuICAubW9kYWwtY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLmNsb3NlLW1vZGFsLC5wcm9qZWN0LWNsb3NlLW1vZGFsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cblxuXG4gIGZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIFxuICBsYWJlbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIFxuICBpbnB1dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIFxuICBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdCRkY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICBoMXtcbiAgICBmb250LWZhbWlseTogXCJBY21lXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICB9XG5cblxuICAgLmZvcm0tY29udGFpbmVye1xuICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgfVxuXG5cbiAgIC5zZWxlY3RlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICB9XG5cbiAgIC50YXNre1xuICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7ICovXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMjBweDtcbiAgICAgIG1pbi1oZWlnaHQ6NzVweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgfVxuXG4gICAubGVzc0RldGFpbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgIH1cblxuICAgLnRhc2tMaXN0e1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICB9XG5cbiAgIC50YXNrIGlucHV0e1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICB9XG5cbiAgLnRhc2s6aG92ZXJ7XG4gICAgYm9yZGVyLWNvbG9yOiAjNENBRjUwO1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSg3NiwgMTc1LCA4MCwgMC41KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIH1cblxuICAvKiAuZWRpdEdyaWR7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsMWZyKTtcbiAgICBtYXgtaGVpZ2h0OiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzIGVhc2Utb3V0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIH1cblxuICAuZWRpdEdyaWQuYWN0aXZle1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICB9ICovXG5cblxuLnRhc2staXRlbSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIGF1dG8pO1xuICAgIGdhcDogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi50YXNrLW5hbWUge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbn1cblxuLnRhc2stZGF0ZSwgLnRhc2stdGltZSwgLnRhc2staW1wb3J0YW50LCAudGFzay1zYXZlLCAudGFzay1lZGl0LCAudGFzay1kZWxldGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udGFzay1pbXBvcnRhbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhc2staW1wb3J0YW50IGlucHV0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmFjdGl2ZXtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsbUNBQW1DO0lBQ25DLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osYUFBYTtJQUNiLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjs7OztFQUlBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0I7O2tCQUVjO0lBQ2QsYUFBYTtJQUNiLFlBQVk7RUFDZDs7O0VBR0E7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG9DQUFvQzs7RUFFdEM7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsa0JBQWtCOztF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QUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIH1cXG4gICoge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuICBib2R5IHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTAsIDExMCwgMTEwKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LWZhbWlseTogXFxcIkFjbWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuICBpbWcsIHBpY3R1cmUsIHZpZGVvLCBjYW52YXMsIHN2ZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuICBpbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSwgc2VsZWN0IHtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gIH1cXG4gIHAsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgfVxcbiAgI3Jvb3QsICNfX25leHQge1xcbiAgICBpc29sYXRpb246IGlzb2xhdGU7XFxuICB9XFxuXFxuICBcXG5cXG4gIC5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjRmciA5ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAnaGVhZGVyIGhlYWRlcidcXG4gICAgJ3NpZGViYXIgbWFpbic7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gIH1cXG5cXG5cXG4gIC5oZWFkZXJ7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWE7ICovXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQWNtZVxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG5cXG4gIH1cXG5cXG4gIC5zaWRlYmFye1xcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTsgKi9cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgICBwYWRkaW5nOiAzMHB4IDQwcHg7XFxuICAgICAgXFxuICB9XFxuXFxuXFxuICAubWFpbntcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIHBvc2l0aW9uIHRoZSBidXR0b24gcmVsYXRpdmUgdG8gdGhpcyBjb250YWluZXIgKi9cXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIH1cXG5cXG5cXG4gIHVse1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIGxpe1xcbiAgICBmb250LWZhbWlseTogXFxcIkFjbWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogMS40MnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcblxcbiAgaHJ7XFxuICAgIG1hcmdpbjogMjBweCAwcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XFxuICAgIGJhY2tncm91bmQ6ICM5OTk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcblxcblxcbiAgLmJ0bntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JBRkYzOTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LWZhbWlseTogXFxcIkFjbWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLnByb2plY3QtYnRue1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGZvbnQtc2l6ZTogMS40MnJlbTtcXG4gICAgbWFyZ2luOiAwcHggYXV0bztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMS40MnJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcblxcblxcbiAgLnRhc2stYnRue1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIEFic29sdXRlIHBvc2l0aW9uaW5nIGZvciB0aGUgYnV0dG9uICovXFxuICAgIGJvdHRvbTogMTBweDsgLyogQWRqdXN0IHRoZSB2YWx1ZSBhcyBuZWVkZWQgZm9yIHNwYWNpbmcgZnJvbSB0aGUgYm90dG9tICovXFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuNDJyZW07XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG5cXG4gICNtb2RhbCwjdGFzay1tb2RhbHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuXFxuICAubW9kYWwtY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvd2dyZWVuO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcbiAgXFxuICAuY2xvc2UtbW9kYWwsLnByb2plY3QtY2xvc2UtbW9kYWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTBweDtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogIzAwMDtcXG4gIH1cXG5cXG5cXG4gIGZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgXFxuICBsYWJlbCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgfVxcbiAgXFxuICBpbnB1dCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIH1cXG4gIFxcbiAgYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QkZGO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICAgaDF7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQWNtZVxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICB9XFxuXFxuXFxuICAgLmZvcm0tY29udGFpbmVye1xcbiAgICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICB9XFxuXFxuXFxuICAgLnNlbGVjdGVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICAgfVxcblxcbiAgIC50YXNre1xcbiAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHdoZWF0OyAqL1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGdhcDogMjBweDtcXG4gICAgICBtaW4taGVpZ2h0Ojc1cHg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgIH1cXG5cXG4gICAubGVzc0RldGFpbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgfVxcblxcbiAgIC50YXNrTGlzdHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgIH1cXG5cXG4gICAudGFzayBpbnB1dHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICB9XFxuXFxuICAudGFzazpob3ZlcntcXG4gICAgYm9yZGVyLWNvbG9yOiAjNENBRjUwO1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoNzYsIDE3NSwgODAsIDAuNSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIH1cXG5cXG4gIC8qIC5lZGl0R3JpZHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLDFmcik7XFxuICAgIG1heC1oZWlnaHQ6IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBlYXNlLW91dDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcXG4gIH1cXG5cXG4gIC5lZGl0R3JpZC5hY3RpdmV7XFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgfSAqL1xcblxcblxcbi50YXNrLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2stbmFtZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuLnRhc2stZGF0ZSwgLnRhc2stdGltZSwgLnRhc2staW1wb3J0YW50LCAudGFzay1zYXZlLCAudGFzay1lZGl0LCAudGFzay1kZWxldGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2staW1wb3J0YW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2staW1wb3J0YW50IGlucHV0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5hY3RpdmV7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtOF1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwfGZmZmZmZmZmLWZmZmYtZmZmZi1mZmZmLWZmZmZmZmZmZmZmZikkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5cbnZhciBnZXRSYW5kb21WYWx1ZXM7XG52YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcblxuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgLy9cbiAgLy8gTm90ZSB0byBmdXR1cmUtc2VsZjogTm8sIHlvdSBjYW4ndCByZW1vdmUgdGhlIGB0b0xvd2VyQ2FzZSgpYCBjYWxsLlxuICAvLyBSRUY6IGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzY3NyNpc3N1ZWNvbW1lbnQtMTc1NzM1MTM1MVxuICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICB2YXIgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7XG4gIC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cbiAgcmV0dXJuIHV1aWQ7XG59XG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gIH1cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcblxuICAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7XG5cbiAgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuICAgIHJldHVybiBidWY7XG4gIH1cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBhZGRQcm9qZWN0IH0gZnJvbSAnLi9hZGRQcm9qZWN0JztcbmltcG9ydCB7IGdldFRhc2sgfSBmcm9tICcuL2dldERhdGEnO1xuaW1wb3J0IHsgYWRkVGFzayB9IGZyb20gJy4vYWRkVGFzayc7XG5pbXBvcnQgeyBjcmVhdGVFZGl0Rm9ybSwgdXBkYXRlVGFza0xpc3QgfSBmcm9tICcuL3VwZGF0ZVVJJztcbmltcG9ydCB7IHRhc2tGaW5kZXIgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5leHBvcnQgbGV0IGN1cnJlbnRQcm9qZWN0ID0gXCJEZWZhdWx0IFByb2plY3RcIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcigpe1xuXG4gICAgYWRkVGFza0xpc3RlbmVyKCk7XG4gICAgYWRkUHJvamVjdExpc3RlbmVyKCk7XG4gICAgc2VsZWN0ZWRQcm9qZWN0KCk7XG4gICAgZWRpdEZvcm0oKTtcblxufSBcblxuXG5mdW5jdGlvbiBhZGRUYXNrTGlzdGVuZXIoKXtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stYnRuJylcbiAgICBjb25zdCB0YXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1tb2RhbCcpXG4gICAgY29uc3QgY2xvc2VfYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLW1vZGFsIC5jbG9zZS1tb2RhbFwiKTtcbiAgICBjb25zdCBtb2RhbEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza01vZGFsRm9ybScpO1xuXG4gICAgY2xvc2VfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICB0YXNrTW9kYWwuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcbiAgICB9KTtcblxuXG4gICAgdGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICB9KTtcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsKSB7XG4gICAgICAgICAgdGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIFxuICAgICAgbW9kYWxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhZGRUYXNrKCk7XG4gICAgICAgIHVwZGF0ZVRhc2tMaXN0KGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgdGFza01vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9KTtcbn1cblxuXG5cbmZ1bmN0aW9uIGFkZFByb2plY3RMaXN0ZW5lcigpe1xuICAgIGNvbnN0IG9wZW5Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWJ0bicpO1xuICAgIGNvbnN0IGNsb3NlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jbG9zZS1tb2RhbCcpO1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsJyk7XG4gICAgY29uc3QgbW9kYWxGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RNb2RhbEZvcm0nKTtcblxuICAgIG9wZW5Nb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIH0pO1xuXG4gICAgXG4gICAgICBjbG9zZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSk7XG4gIFxuICAgICAgbW9kYWxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsKGV2ZW50KT0+e1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhZGRQcm9qZWN0KCk7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9KVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RlZFByb2plY3QoKXtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuICAgIHByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcbiAgICAgICAgaWYoZS50YXJnZXQgJiYgZS50YXJnZXQubm9kZU5hbWUgPT0gXCJMSVwiKXtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RzIGxpJyk7XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FkZERvbScpO1xuICAgICAgICAgICAgdXBkYXRlVGFza0xpc3QoY3VycmVudFByb2plY3QpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuXG5mdW5jdGlvbiBlZGl0Rm9ybSgpIHtcbiAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0xpc3QnKTtcblxuICAvLyBFdmVudCBsaXN0ZW5lciBvbiB0YXNrTGlzdCBmb3IgY2xpY2sgZXZlbnRzXG4gIHRhc2tMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrJykpIHtcbiAgICAgIGxldCB0YXNrSWQgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgbGV0IGVkaXRGb3JtID0gZXZlbnQudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWl0ZW0nKTtcblxuICAgICAgaWYgKCFlZGl0Rm9ybSkge1xuICAgICAgICAvLyBJZiBubyBlZGl0IGZvcm0gZXhpc3RzLCBjcmVhdGUgYW5kIGFwcGVuZCBpdFxuICAgICAgICBldmVudC50YXJnZXQuYXBwZW5kQ2hpbGQoY3JlYXRlRWRpdEZvcm0odGFza0ZpbmRlcih0YXNrSWQsIGN1cnJlbnRQcm9qZWN0KSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVG9nZ2xlIGVkaXQgZm9ybSB2aXNpYmlsaXR5XG4gICAgICAgIGVkaXRGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIGVkaXQgZm9ybSBzaG91bGQgYmUgaGlkZGVuXG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuLy8gZnVuY3Rpb24gdGFza0xpc3REaXNwbGF5KCl7XG4vLyAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbi8vICAgICBwcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4vLyAgICAgICAgIGlmKGUudGFyZ2V0ICYmIGUudGFyZ2V0Lm5vZGVOYW1lID09IFwiTElcIil7XG4vLyAgICAgICAgICAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0cyBsaScpO1xuLy8gICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcigpKTtcbi8vICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4vLyAgICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xuLy8gICAgICAgICB9XG4vLyAgICAgfSlcbi8vIH0iLCJpbXBvcnQgeyBnZXRQcm9qZWN0IH0gZnJvbSBcIi4vZ2V0RGF0YVwiXG5pbXBvcnQgeyBwcm9qZWN0cyxnZXRQcm9qZWN0cyxzdG9yZVByb2plY3RzfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgeyB1cGRhdGVQcm9qZWN0TGlzdCB9IGZyb20gXCIuL3VwZGF0ZVVJXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0KCl7XG5cbiAgICBsZXQgcHJvamVjdEFycmF5ID0gcHJvamVjdHM7XG4gICAgbGV0IHByb2plY3ROYW1lID0gZ2V0UHJvamVjdCgpO1xuICAgIHByb2plY3RBcnJheS5wdXNoKHByb2plY3ROYW1lKTtcbiAgICBzdG9yZVByb2plY3RzKHByb2plY3ROYW1lKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpO1xuICAgIHVwZGF0ZVByb2plY3RMaXN0KHByb2plY3RBcnJheSk7XG59IiwiaW1wb3J0IHsgY3VycmVudFByb2plY3QgfSBmcm9tIFwiLi9hZGRET01cIjtcbmltcG9ydCB7IGdldFRhc2sgfSBmcm9tIFwiLi9nZXREYXRhXCI7XG5pbXBvcnQgeyBzdG9yZVRhc2sgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2soKXtcbiAgICBsZXQgdGFzayA9IGdldFRhc2soKTtcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBjdXJyZW50UHJvamVjdDtcbiAgICBzdG9yZVRhc2socHJvamVjdE5hbWUsdGFzayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxUYXNrKCl7XG4gICAgXG59IiwiaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVVVJRCgpIHtcbiAgcmV0dXJuIHV1aWR2NCgpO1xufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3QoKXtcbiAgICBjb25zdCBwcm9qZWN0TmFtZUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lRmllbGQudmFsdWU7XG4gICAgY29uc29sZS5sb2cocHJvamVjdE5hbWUpO1xuICAgIHJldHVybiBwcm9qZWN0TmFtZTtcbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrKCl7XG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1uYW1lJykudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZVRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlLXRpbWUnKS52YWx1ZTtcblxuICAgIGxldCB0YXNrT2JqID0ge1xuICAgICAgICBuYW1lOiB0YXNrTmFtZSxcbiAgICAgICAgaWQ6IGdlbmVyYXRlVVVJRCgpLFxuICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgICAgICBkdWVUaW1lOiBkdWVUaW1lXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRhc2tPYmopO1xuICAgIHJldHVybiB0YXNrT2JqO1xuXG5cbn0iLCJcblxuXG5leHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdHMoKXtcbiAgICAvL2xldCBhcnIgPSBbXTtcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgICAgIHN0b3JlUHJvamVjdHMoXCJEZWZhdWx0IFByb2plY3RcIilcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTsgLy8gR2V0IHRoZSBrZXlcbiAgICAgICAgICAgIHByb2plY3RzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICByZXR1cm4gcHJvamVjdHM7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlUHJvamVjdHMocHJvamVjdE5hbWUpe1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdE5hbWUsSlNPTi5zdHJpbmdpZnkoW10pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlVGFzayhwcm9qZWN0TmFtZSxvYmope1xuICAgIGxldCB0YXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdE5hbWUpKTtcbiAgICBpZiAodGFza0xpc3QgPT09IG51bGwpIHtcbiAgICAgICAgdGFza0xpc3QgPSBbXTtcbiAgICB9XG4gICAgXG4gICAgdGFza0xpc3QucHVzaChvYmopO1xuICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TmFtZSxKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFza0ZpbmRlcih0YXNrSWQsY3VycmVudFByb2plY3Qpe1xuICAgIGxldCBvYmpMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50UHJvamVjdCkpO1xuICAgIGNvbnNvbGUubG9nKG9iakxpc3QpO1xuICAgIGxldCBvYmogPSBvYmpMaXN0LmZpbmQodGFzayA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuICAgIHJldHVybiBvYmo7XG5cbn0iLCJcblxuXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUHJvamVjdExpc3QoYXJyKXtcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuXG4gICAgcHJvamVjdExpc3QuaW5uZXJIVE1MID0gXCIgXCI7XG4gICAgYXJyLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH0pO1xufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRhc2tMaXN0KHByb2plY3ROYW1lKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0xpc3QnKTtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIlxuXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgbGV0IGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7IC8vIEdldCB0aGUga2V5XG4gICAgLy8gICAgIGxldCB2YWx1ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG5cbiAgICAvLyB9XG5cbiAgICBsZXQgdmFsdWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3ROYW1lKSk7XG5cbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG5cblxuICAgIHZhbHVlLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGxlc3NEZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBsZXNzRGV0YWlsLmNsYXNzTGlzdC5hZGQoJ2xlc3NEZXRhaWwnKVxuICAgICAgICB0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2suaWQpO1xuICAgICAgICB0YXNrQ2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJyx0YXNrLmlkKTtcblxuICAgICAgICBjb25zdCBjb21wbGV0ZUNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29tcGxldGVDaGVjay50eXBlID0gJ2NoZWNrYm94JztcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5uYW1lO1xuXG4gICAgICAgIGNvbnN0IGltcG9ydGFudEluZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGltcG9ydGFudEluZGljYXRvci50eXBlID0gJ2NoZWNrYm94JztcblxuXG5cbiAgICAgICAgLy8gY29uc3QgaW1wb3J0YW50Q2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCcnKVxuICAgICAgICBsZXNzRGV0YWlsLmFwcGVuZENoaWxkKGNvbXBsZXRlQ2hlY2spO1xuICAgICAgICBsZXNzRGV0YWlsLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgbGVzc0RldGFpbC5hcHBlbmRDaGlsZChpbXBvcnRhbnRJbmRpY2F0b3IpO1xuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChsZXNzRGV0YWlsKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcbiAgICB9KVxuXG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWRpdEZvcm0odGFzayl7XG4gICAgLy8gY29uc3QgZWRpdEdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBjb25zdCBuYW1lRmllbGQgPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgLy8gY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgLy8gY29uc3QgZHVlVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgLy8gY29uc3QgaW1wb3J0YW50Q2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIC8vIGNvbnN0IHNhdmVFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgLy8gY29uc3QgZGVsZXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG5cblxuICAgIC8vIGNvbnN0IGxhYmVsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgLy8gbGFiZWxOYW1lLmZvciA9IFwiXCJcblxuICAgIC8vIGVkaXRHcmlkLmNsYXNzTGlzdC5hZGQoJ2VkaXRHcmlkJyk7XG5cblxuXG5cbiAgICAvLyBuYW1lRmllbGQudHlwZSA9XCJ0ZXh0XCI7XG4gICAgLy8gZHVlRGF0ZS50eXBlID1cImRhdGVcIjtcbiAgICAvLyBkdWVUaW1lLnR5cGUgPSBcInRpbWVcIjtcbiAgICAvLyBpbXBvcnRhbnRDaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuXG5cblxuICAgIC8vIHNhdmVFZGl0LnRleHRDb250ZW50ID0gXCJTYXZlIEVkaXRcIjtcbiAgICAvLyBkZWxldGVUYXNrLnRleHRDb250ZW50ID1cIkRlbGV0ZSBUYXNrXCI7XG5cblxuXG4gICAgLy8gZWRpdEdyaWQuYXBwZW5kQ2hpbGQobmFtZUZpZWxkKTtcbiAgICAvLyBlZGl0R3JpZC5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICAvLyBlZGl0R3JpZC5hcHBlbmRDaGlsZChkdWVUaW1lKTtcbiAgICAvLyBlZGl0R3JpZC5hcHBlbmRDaGlsZChpbXBvcnRhbnRDaGVja2JveCk7XG4gICAgLy8gZWRpdEdyaWQuYXBwZW5kQ2hpbGQoc2F2ZUVkaXQpO1xuICAgIC8vIGVkaXRHcmlkLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2spO1xuXG4gICAgLy8gcmV0dXJuIGVkaXRHcmlkO1xuXG5cbiAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0Rpdi5jbGFzc05hbWUgPSAndGFzay1pdGVtJztcblxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgbmFtZUlucHV0LnZhbHVlID0gdGFzay5uYW1lIHx8ICcnO1xuICAgIG5hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICdUYXNrIE5hbWUnO1xuICAgIG5hbWVJbnB1dC5jbGFzc05hbWUgPSAndGFzay1uYW1lJztcblxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgZGF0ZUlucHV0LnZhbHVlID0gdGFzay5kdWVEYXRlIHx8ICcnO1xuICAgIGRhdGVJbnB1dC5jbGFzc05hbWUgPSAndGFzay1kYXRlJztcblxuICAgIGNvbnN0IHRpbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGltZUlucHV0LnR5cGUgPSAndGltZSc7XG4gICAgdGltZUlucHV0LnZhbHVlID0gdGFzay5kdWVUaW1lIHx8ICcnO1xuICAgIHRpbWVJbnB1dC5jbGFzc05hbWUgPSAndGFzay10aW1lJztcblxuICAgIGNvbnN0IGltcG9ydGFudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltcG9ydGFudERpdi5jbGFzc05hbWUgPSAndGFzay1pbXBvcnRhbnQnO1xuXG4gICAgY29uc3QgaW1wb3J0YW50Q2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGltcG9ydGFudENoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIGltcG9ydGFudENoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmltcG9ydGFudCB8fCBmYWxzZTtcbiAgICBpbXBvcnRhbnRDaGVja2JveC5pZCA9IGBpbXBvcnRhbnQtJHt0YXNrLmlkfWA7XG5cbiAgICBjb25zdCBpbXBvcnRhbnRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgaW1wb3J0YW50TGFiZWwuaHRtbEZvciA9IGBpbXBvcnRhbnQtJHt0YXNrLmlkfWA7XG4gICAgaW1wb3J0YW50TGFiZWwudGV4dENvbnRlbnQgPSAnSW1wb3J0YW50JztcblxuICAgIGltcG9ydGFudERpdi5hcHBlbmRDaGlsZChpbXBvcnRhbnRDaGVja2JveCk7XG4gICAgaW1wb3J0YW50RGl2LmFwcGVuZENoaWxkKGltcG9ydGFudExhYmVsKTtcblxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgIGVkaXRCdXR0b24uY2xhc3NOYW1lID0gJ3Rhc2stZWRpdCc7XG4gICAgZWRpdEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gZWRpdFRhc2sodGFzay5pZCk7XG5cbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gJ3Rhc2stZGVsZXRlJztcbiAgICBkZWxldGVCdXR0b24ub25jbGljayA9ICgpID0+IGRlbGV0ZVRhc2sodGFzay5pZCk7XG5cbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGltZUlucHV0KTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGltcG9ydGFudERpdik7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgICByZXR1cm4gdGFza0RpdjtcblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgYWRkRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4vYWRkRE9NJztcbmltcG9ydCB7IHByb2plY3RzLGdldFByb2plY3RzLHN0b3JlUHJvamVjdHMgfSBmcm9tICcuL3N0b3JhZ2UnO1xuaW1wb3J0IHsgdXBkYXRlUHJvamVjdExpc3QgfSBmcm9tICcuL3VwZGF0ZVVJJztcblxuXG5mdW5jdGlvbiBhcHAoKXtcbiAgZ2V0UHJvamVjdHMoKTtcbiAgdXBkYXRlUHJvamVjdExpc3QocHJvamVjdHMpO1xuICBhZGRFdmVudExpc3RlbmVyKCk7XG59XG5cbmFwcCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9