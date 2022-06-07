#!/usr/bin/env node

const { Command } = require('commander');

const program = new Command();

program
    .name('gendiff')
    .description('CLI to some JavaScript string utilities')
    .version('0.8.0');

program.command('split')
    .description('Split a string into substrings and display as an array')

.action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
});

program.parse();