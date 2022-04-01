// @ts-shebang
import loadFile from "../_libs/loadFile";
import parseCLI from "simpleargumentsparser";

const usage = `Usage: base64 [-d] [FILE]

Base64 encode or decode FILE to standard output

-d      Decode data
`;

(async() => { 
  const cli = await parseCLI(); 

  if (!cli.argc) {
    // Encode cli.p
    if (cli.p) {
      const encoded = Buffer.from(cli.p).toString("base64");
      console.log(encoded);
    } else {
    // if not pipped input, show usage
      console.log("base64: no input to process");
      console.log(usage);
    }
  } else if (cli.argc === 1 && cli.s?.d) {
    // Decode cli.p
    const decoded = Buffer.from(cli.p as string, "base64").toString("ascii");
    console.log(decoded);
  } else if (cli.argc === 2 && cli.s?.d) {
    // Decode from file even if pipped input
    if (cli.s.d !== true) {
      const fileContent = loadFile(cli.s.d);
      if (fileContent) {
        const decoded = Buffer.from(fileContent, "base64").toString("ascii");
	// TODO: check if content can be decoded
	console.log(decoded);
      } else {
        console.log(`base64: ${cli.s.d}: No such file or directory`);
      }
    } else {
      const fileContent = loadFile(cli.o?.[0]?.[0]);
      if (fileContent) {
        const decoded = Buffer.from(fileContent, "base64").toString("ascii");
        // TODO: check if content can be decoded
        console.log(decoded); 
      } else {
        console.log(`base64: ${cli.o?.[0]?.[0]}: No such file or directory`);
      }
    }
  } else if (cli.argc === 1) {
    const fileContent = loadFile(cli.o?.[0]?.[0]);
    if (fileContent) {
      const encoded = Buffer.from(fileContent).toString("base64");
      console.log(encoded);
    } else {
      console.log(`base64: ${cli.o?.[0]?.[0]}: No such file or directory`);
    }
  } else {
    console.log("base64: unrecognized arguments");
    console.log(usage);
  }

})();
