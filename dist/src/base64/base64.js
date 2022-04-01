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
const loadFile_1 = __importDefault(require("../_libs/loadFile"));
const simpleargumentsparser_1 = __importDefault(require("simpleargumentsparser"));
const usage = `Usage: base64 [-d] [FILE]

Base64 encode or decode FILE to standard output

-d      Decode data
`;
(() => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const cli = yield (0, simpleargumentsparser_1.default)();
    if (!cli.argc) {
        // Encode cli.p
        if (cli.p) {
            const encoded = Buffer.from(cli.p).toString("base64");
            console.log(encoded);
        }
        else {
            // if not pipped input, show usage
            console.log("base64: no input to process");
            console.log(usage);
        }
    }
    else if (cli.argc === 1 && ((_a = cli.s) === null || _a === void 0 ? void 0 : _a.d)) {
        // Decode cli.p
        const decoded = Buffer.from(cli.p, "base64").toString("ascii");
        console.log(decoded);
    }
    else if (cli.argc === 2 && ((_b = cli.s) === null || _b === void 0 ? void 0 : _b.d)) {
        // Decode from file even if pipped input
        if (cli.s.d !== true) {
            const fileContent = (0, loadFile_1.default)(cli.s.d);
            if (fileContent) {
                const decoded = Buffer.from(fileContent, "base64").toString("ascii");
                // TODO: check if content can be decoded
                console.log(decoded);
            }
            else {
                console.log(`base64: ${cli.s.d}: No such file or directory`);
            }
        }
        else {
            const fileContent = (0, loadFile_1.default)((_d = (_c = cli.o) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d[0]);
            if (fileContent) {
                const decoded = Buffer.from(fileContent, "base64").toString("ascii");
                // TODO: check if content can be decoded
                console.log(decoded);
            }
            else {
                console.log(`base64: ${(_f = (_e = cli.o) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f[0]}: No such file or directory`);
            }
        }
    }
    else if (cli.argc === 1) {
        const fileContent = (0, loadFile_1.default)((_h = (_g = cli.o) === null || _g === void 0 ? void 0 : _g[0]) === null || _h === void 0 ? void 0 : _h[0]);
        if (fileContent) {
            const encoded = Buffer.from(fileContent).toString("base64");
            console.log(encoded);
        }
        else {
            console.log(`base64: ${(_k = (_j = cli.o) === null || _j === void 0 ? void 0 : _j[0]) === null || _k === void 0 ? void 0 : _k[0]}: No such file or directory`);
        }
    }
    else {
        console.log("base64: unrecognized arguments");
        console.log(usage);
    }
}))();
