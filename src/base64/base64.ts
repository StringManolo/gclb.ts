// @ts-shebang
import minimist from "minimist";
import getPippedInput from "../_libs/getPippedInput";
import loadFile from "../_libs/loadFile";

const argv = minimist(process.argv.slice(2));
const argc = process.argv.length - 2;

const usage = `Usage: base64 [-d] [FILE]

Base64 encode or decode FILE to standard output

-d      Decode data
`;

(async() => { 
  const pippedInput = await getPippedInput();

  if (!argc) {
    // Encode pippedInput
    if (pippedInput) {
      const encoded = Buffer.from(pippedInput as string).toString("base64");
      console.log(encoded);
    } else {
    // if not pipped input, show usage
      console.log("base64: no input to process");
      console.log(usage);
    }
  } else if (argc === 1 && argv?.d) {
    // Decode pippedInput
    const decoded = Buffer.from(pippedInput as string, "base64").toString("ascii");
    console.log(decoded);
  } else if (argc === 2 && argv?.d) {
    // Decode from file even if pipped input
    if (argv.d !== true) {
      const fileContent = loadFile(argv.d);
      if (fileContent) {
        const decoded = Buffer.from(fileContent, "base64").toString("ascii");
	// TODO: check if content can be decoded
	console.log(decoded);
      } else {
        console.log(`base64: ${argv.d}: No such file or directory`);
      }
    } else {
      const fileContent = loadFile(argv?._[0]);
      if (fileContent) {
        const decoded = Buffer.from(fileContent, "base64").toString("ascii");
        // TODO: check if content can be decoded
        console.log(decoded); 
      } else {
        console.log(`base64: ${argv._[0]}: No such file or directory`);
      }
    }
  } else if (argc === 1) {
    console.log("Encode file...");
    const fileContent = loadFile(argv?._[0]);
    if (fileContent) {
      const encoded = Buffer.from(fileContent).toString("base64");
      console.log(encoded);
    } else {
      console.log(`base64: ${argv?._[0]}: No such file or directory`);
    }
  } else {
    console.log("base64: unrecognized arguments");
    console.log(usage);
  }

})();
