#!usr/bin/env node

const music = require("./lib/music");

const args = process.argv.slice(2);
const [song] = args;
music(song).then(console.log).catch(console.error);
