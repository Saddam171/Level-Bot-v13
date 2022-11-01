const Enmap = require("enmap");

module.exports = async (client) => {

    client.settings = new Enmap({
        name: "settings",
        dataDir: "./databases/settings"
    });
    client.embedSettings = new Enmap({
        name: "embedDatabasing",
        dataDir: "./databases/embedDatabasing"
    });
    client.logger(`Loaded EnmapDB`.brightGreen);
}

