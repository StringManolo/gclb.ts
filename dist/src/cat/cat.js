#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const minimist_1 = __importDefault(require("minimist"));
const getPippedInput_1 = __importDefault(require("../_libs/getPippedInput"));
const argv = (0, minimist_1.default)(process.argv.slice(2));
const argc = process.argv.length - 2;
const usage = `Usage: cat [OPTION]... [FILE]...

Concatenate FILE(s) to standard output.

-b      Print numbers (ignores blank lines)
-n      Print numbers

`;
console.log(1);
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log(2);
    const pippedInput = yield (0, getPippedInput_1.default)();
    console.log(3);
    console.log("argv", argv);
    console.log(4);
}))();
