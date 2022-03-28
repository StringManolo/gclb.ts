import readline from "readline";

const getPippedInput = async() => {
  return new Promise( (resolve, reject) => {
    if (!process.stdin.isTTY) {
      const rl = readline.createInterface({
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
          if (lines[lines.length-1] === "\n") {
            lines = lines.substring(0, lines.length-1);
          }
        }
        resolve(lines);
      });
    }
  })
} 

export default getPippedInput; 

/*
(async() => { 
  const pippedInput = await getPippedInput();
  console.log(pippedInput); 
})()
*/


