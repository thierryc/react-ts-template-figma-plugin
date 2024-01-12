// This shows the HTML page in "ui.html".
figma.showUI(__html__, { themeColors: true, height: 280 })
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.

figma.ui.onmessage = ({ msg }: { msg: string }) => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  console.log(msg);
  // figma.closePlugin();
};

