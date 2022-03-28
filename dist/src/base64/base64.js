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
const loadFile_1 = __importDefault(require("../_libs/loadFile"));
const argv = (0, minimist_1.default)(process.argv.slice(2));
const argc = process.argv.length - 2;
const usage = `Usage: base64 [-d] [FILE]

Base64 encode or decode FILE to standard output

-d      Decode data
`;
(() => __awaiter(void 0, void 0, void 0, function* () {
    const pippedInput = yield (0, getPippedInput_1.default)();
    if (!argc) {
        // Encode pippedInput
        if (pippedInput) {
            const encoded = Buffer.from(pippedInput).toString("base64");
            console.log(encoded);
        }
        else {
            // if not pipped input, show usage
            console.log("base64: no input to process");
            console.log(usage);
        }
    }
    else if (argc === 1 && (argv === null || argv === void 0 ? void 0 : argv.d)) {
        // Decode pippedInput
        const decoded = Buffer.from(pippedInput, "base64").toString("ascii");
        console.log(decoded);
    }
    else if (argc === 2 && (argv === null || argv === void 0 ? void 0 : argv.d)) {
        // Decode from file even if pipped input
        if (argv.d !== true) {
            const fileContent = (0, loadFile_1.default)(argv.d);
            if (fileContent) {
                const decoded = Buffer.from(fileContent, "base64").toString("ascii");
                // TODO: check if content can be decoded
                console.log(decoded);
            }
            else {
                console.log(`base64: ${argv.d}: No such file or directory`);
            }
        }
        else {
            const fileContent = (0, loadFile_1.default)(argv === null || argv === void 0 ? void 0 : argv._[0]);
            if (fileContent) {
                const decoded = Buffer.from(fileContent, "base64").toString("ascii");
                // TODO: check if content can be decoded
                console.log(decoded);
            }
            else {
                console.log(`base64: ${argv._[0]}: No such file or directory`);
            }
        }
    }
    else if (argc === 1) {
        console.log("Encode file...");
        const fileContent = (0, loadFile_1.default)(argv === null || argv === void 0 ? void 0 : argv._[0]);
        if (fileContent) {
            const encoded = Buffer.from(fileContent).toString("base64");
            console.log(encoded);
        }
        else {
            console.log(`base64: ${argv === null || argv === void 0 ? void 0 : argv._[0]}: No such file or directory`);
        }
    }
    else {
        console.log("base64: unrecognized arguments");
        console.log(usage);
    }
}))();
