import * as fs from "fs";

// Load a file as utf-8 encoding 
const loadFile = (filename: string): string | null => {
  let retValue: string | null;
  try {
    retValue = fs.readFileSync(filename, { encoding: "utf-8" })
  } catch(e) {
    retValue = null;
  }
  return retValue ? retValue.substring(0, retValue.length-1) : null;
}

export default loadFile;
