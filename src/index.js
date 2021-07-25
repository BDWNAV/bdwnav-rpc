const rpc = require("discord-rpc");
const client = new rpc.Client({ transport: 'ipc' });
const clientId = "858334083176333362";

client.on("ready", () => {
  client.setActivity({
    details: "Doing something, mainly coding maybe some gaming.",
    state: "Vibing :3",
    startTimestamp: new Date(),
    largeImageKey: "nav_main",
    largeImageText: "Vibing dm me if you need me.",
    smallImageKey: "nav_main",
    buttons: [{ label: "GitHub", url: "https://github.com/BDWNAV" }]
  });

  console.log("Ready, and on your profile.");
});

client.login({ clientId });