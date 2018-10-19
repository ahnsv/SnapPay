"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express = __importStar(require("express"));
var addRouter_1 = __importDefault(require("./addRouter"));
var cartRouter_1 = __importDefault(require("./cartRouter"));
var removeRouter_1 = __importDefault(require("./removeRouter"));
module.exports = (function () {
    var r = express.Router();
    r.use('/add/:id', addRouter_1.default);
    r.use('/card', cartRouter_1.default);
    r.use('/remove', removeRouter_1.default);
});
