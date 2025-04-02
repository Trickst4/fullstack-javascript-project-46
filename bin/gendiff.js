#!/usr/bin/env node
import { Command } from 'commander';
import path from 'path';
import fs from 'fs';

const program = new Command();

const gendiff = program
    .argument('<filepath1>')
    .argument('<filepath2>')
    .description(`Compares two configuration files and shows a difference.`)
    .option('-V, --version', 'output the version number')
    .option('-f, --format [type]', 'output format');

gendiff
    .command('generate')
    .description('generate template for project')
    .action(() => {
        const srcDir = path.join(process.cwd(), 'src');
        const indexFile = path.join(srcDir, 'index.js');
        const parserFile = path.join(srcDir, 'parser.js');

        if (!fs.existsSync(srcDir)) {
            fs.mkdirSync(srcDir);
        }

        const parserContent = 'export default () => {\n     console.log("parser");\n}';
        fs.writeFileSync(parserFile, parserContent);

        const indexContent = 'import parser from "./parser.js";\n\nexport default () => {\n console.log("gendiff");\n  parser();\n}';
        fs.writeFileSync(indexFile, indexContent);

        console.log('Project structure generated successfully');
    });

gendiff.parse();