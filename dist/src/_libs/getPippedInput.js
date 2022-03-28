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
const readline_1 = __importDefault(require("readline"));
const getPippedInput = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        if (!process.stdin.isTTY) {
            const rl = readline_1.default.createInterface({
                input: process.stdin,
                output: process.stdout,
                terminal: false
            });
            let lines = "";
            let linesCounter = 0;
            rl.on("line", line => {
                lines += line + "\n";
                ++linesCounter;
            });
            rl.on("close", () => {
                if (linesCounter > 1) {
                    if (lines[lines.length - 1] === "\n") {
                        lines = lines.substring(0, lines.length - 1);
                    }
                }
                resolve(lines);
            });
        }
    });
});
exports.default = getPippedInput;
/*
(async() => {
  const pippedInput = await getPippedInput();
  console.log(pippedInput);
})()
*/
