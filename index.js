const Raid = require("./lib/raid");
const config  = require("./config");

global.token = config.token;
const myRaid = new Raid();