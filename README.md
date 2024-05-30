## Web Template

Use this template to develop a website in HTML and CSS.

This template includes:

- Basic web development folder structure (`img`, `css`, etc.)
- Extensions to help write HTML, CSS, JavaScript, and TypeScript
- NodeJS preinstalled
- Live Preview for static websites (if it does not work, click on the 𝌆 button at the top right → Open In Browser)
- Integration for diagrams.net (for files ending in `.drawio`)
- Integrated image editor (Photopea)

## How to run your code

Once your Codespace has loaded, you can open your project in the following ways:

### Static websites

- click on the Live Server icon at the bottom-right. This will load whichever HTML file is currently active in the editor.

### TypeScript-based website

- click on the Terminal menu
- select "Run Task"
- select "typescript"
- select "tsc: watch"
- click on the Live Server icon at the bottom-right. This will load whichever HTML file is currently active in the editor.

### NodeJS code

To run TypeScript code on the server:

- click on the Terminal menu
- select "Run Task"
- select "npm"
- select "npm: start:watch"

**Note**: you will need to replace the sample code in `index.ts` before you try this. For example:

```ts
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Enter your name: ", function(name: String) {
    console.log("Hello, %s!", name)
    rl.close()
})
```