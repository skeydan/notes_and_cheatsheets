import { exec } from "child_process";
import { promisify } from "util";

// exec is asynchronous
// need either callback or Promise

// callback version
exec("ls -l", (err, stdout, stderr) => {
  //console.log(stdout);
  });

// Promise version
// use util.promisify to get a Promise-returning exec
const execP = promisify(exec);
const main = async () => {
  try {
    const { stdout, stderr }= await execP("ls -l");
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  } catch (e) {
    console.log(e);
  }
}

main()
