**vanilla-ts-template-figma-plugin**

**Kickstart your Figma plugin development with a clean and efficient TypeScript and vanilla JavaScript setup.**

**Getting Started:**

1. **Create Figma Plugin:**
   - In Figma, navigate to **Menu > Plugins > Development > New Plugin**.

2. **Download the Template:**
   - Click the green "Code" button above to download the latest ZIP of this repository.

3. **Replace Plugin Files:**
   - Unzip the downloaded template.
   - In your Figma plugin directory, replace all files **except** the `manifest.json` file with the template files.

4. **Install Dependencies:**
   - Open a terminal in your plugin directory and run:
     ```bash
     npm install
     ```

5. **Develop and Build:**
   - To start the development server (hot reloading):
     ```bash
     npm run dev
     ```
   - To build a production-ready version:
     ```bash
     npm run build
     ```

6. **Enjoy Plugin Creation!**
   - Start crafting your awesome Figma plugin with the power of TypeScript and vanilla JavaScript. 

**Features:**

- **TypeScript Support:** Enhance code maintainability and catch errors early with type safety.
- **Clean File Structure:** Navigate easily through organized folders for UI, logic, and types.
- **Manifest File Included:** Focus on plugin development without worrying about setup configurations.
- **Development and Build Scripts:** Streamline your workflow with convenient commands.

**Ready to unleash your plugin ideas? Dive in and start building!**


-- Figma MD --

Below are the steps to get your plugin running. You can also find instructions at:

  https://www.figma.com/plugin-docs/plugin-quickstart-guide/

This plugin template uses Typescript and NPM, two standard tools in creating JavaScript applications.

First, download Node.js which comes with NPM. This will allow you to install TypeScript and other
libraries. You can find the download link here:

  https://nodejs.org/en/download/

Next, install TypeScript using the command:

  npm install -g typescript

Finally, in the directory of your plugin, get the latest type definitions for the plugin API by running:

  npm install --save-dev @figma/plugin-typings

If you are familiar with JavaScript, TypeScript will look very familiar. In fact, valid JavaScript code
is already valid Typescript code.

TypeScript adds type annotations to variables. This allows code editors such as Visual Studio Code
to provide information about the Figma API while you are writing code, as well as help catch bugs
you previously didn't notice.

For more information, visit https://www.typescriptlang.org/

Using TypeScript requires a compiler to convert TypeScript (code.ts) into JavaScript (code.js)
for the browser to run.

We recommend writing TypeScript code using Visual Studio code:

1. Download Visual Studio Code if you haven't already: https://code.visualstudio.com/.
2. Open this directory in Visual Studio Code.
3. Compile TypeScript to JavaScript: Run the "Terminal > Run Build Task..." menu item,
    then select "npm: watch". You will have to do this again every time
    you reopen Visual Studio Code.

That's it! Visual Studio Code will regenerate the JavaScript file every time you save.
