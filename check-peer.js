import { execSync } from "child_process";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

try {
    require.resolve("clcolors");
    console.log("clcolors is already installed.");
    rl.close();
} catch (e) {
    // If clcolors is not installed, prompt the user to install it
    rl.question("clcolors is not installed. Would you like to install it? (y/n) ", (answer) => {
        if (answer.toLowerCase() === "y" || answer.toLowerCase() === "yes") {
            try {
                console.log("Installing clcolors...");
                execSync("npm install clcolors", { stdio: "inherit" });
                console.log("clcolors has been successfully installed.");
            } catch (error) {
                console.error("An error occurred while installing clcolors:", error.message);
            }
        } else {
            console.log("clcolors was not installed.");
        }
        rl.close();
    });
}
