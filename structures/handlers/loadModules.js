module.exports = async (client) => {
        require(`${process.cwd()}/modules/leveling`)(client);
    
    client.logger(`Loaded Modules`.brightGreen);
}