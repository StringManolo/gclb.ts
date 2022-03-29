import getPippedInput from "../_libs/getPippedInput";
import loadFile from "../_libs/loadFile";

const argv = minimist(process.argv.slice(2));
const argc = process.argv.length - 2;

const usage = `Usage: cat [OPTION]... [FILE]...

Concatenate FILE(s) to standard output.

-b      Print numbers (ignores blank lines)
-n      Print numbers

`;

console.log(1);

(async() => {
  console.log(2)
  const pippedInput = await getPippedInput();
  console.log(3);
  console.log("argv", argv);
  console.log(4);
})();
