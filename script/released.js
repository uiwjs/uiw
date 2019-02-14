#!/usr/bin/env node

// released `uiw`

// 1. Copy `README.md` to the `/packages/core/` directory.
// 2. Creacte document static resource.
// 3. Entry the `/packages/core/` and run the `npm run build` command.
// 4. Copy static resource to the `/packages/core/docs` directory.

const fs = require('fs-extra');
const { join } = require('path');
const { spawn } = require('child_process')

const libPath = join(process.cwd(), 'packages', 'core');
const libReadmePath = join(libPath, 'README.md');
const readmePath = join(process.cwd(), 'README.md');

const docsPath = join(process.cwd(), 'dist');
const docRepoPath = join(process.cwd(), 'packages', 'doc');

const uiwPkg = join(libPath, 'package.json');
const docVersion = join(process.cwd(), 'src', 'version.json');

(async () => {
  try {
    const readmeContent = await fs.readFile(readmePath);
    await fs.outputFile(libReadmePath, readmeContent);

    // Modify document version data.
    const uiwPkgContent = await fs.readJson(uiwPkg);
    console.log(`> Publish ${uiwPkgContent.version} v${uiwPkgContent.version}`);
    const versionList = await fs.readJson(docVersion);
    if (!versionList.includes(uiwPkgContent.version)) {
      versionList.unshift(uiwPkgContent.version);
      await fs.outputJson(docVersion, versionList);
    }
    /**
     * Create a document website for `package.json`
     * path => `packages/doc/package.json`
     */
    await fs.writeJson(join(docRepoPath, 'package.json'), {
      "name": "@uiw/doc",
      "version": uiwPkgContent.version,
      "description": "Uiw documentation website.",
      "homepage": uiwPkgContent.homepage,
      "authors": uiwPkgContent.authors,
      "repository": uiwPkgContent.repository,
      "keywords": uiwPkgContent.keywords,
      "author": uiwPkgContent.author,
      "license": uiwPkgContent.license
    });
    /**
     * Run babel over the `./packages/core/src` directory and output
     * compiled common js files to `./packages/core/lib/cjs`.
     */
    await execute(`cd ${libPath} && npm run build-cjs`);
    /**
     * Run babel over the `./packages/core/src directory` and output
     * compiled es modules (but otherwise es5) to `./packages/core/lib/esm`
     */
    await execute(`cd ${libPath} && npm run build-esm`);
    /**
     * Bundles a minified and unminified version of [uiw] including
     * all it's immediate dependencies (excluding React, ReactDOM, etc)
     */
    await execute(`cd ${libPath} && npm run bundle`);
    await execute(`cd ${libPath} && npm run bundle:min`);
    /**
     * Run KKT over the ./src directory and output compiled documents files to ./dist
     */
    await execute('npm run build');
    await fs.emptyDir(join(docRepoPath, 'web'))
    await fs.copy(docsPath, join(docRepoPath, 'web'));
    await execute(`cd ${docRepoPath} && npm publish`);
    /**
     * Publish the documentation website.
     * Repo => `git@github.com:uiwjs/uiwjs.github.io.git`
     */
    await execute('npm run deploy');
    await execute(`git tag -a v${uiwPkgContent.version} -m "released v${uiwPkgContent.version}"`);
    await execute('git push --tags');
    await execute(`cd ${libPath} && npm publish`);
  } catch (error) {
    console.log('error:', error);
  }
})();

function execute(command) {
  return new Promise((resolve, reject) => {
    const subProcess = spawn('bash');
    function onData(data) {
      process.stdout.write(data);
    }
    subProcess.on('error', (error) => {
      reject(new Error(`command failed: ${command}; ${error.message ? error.message : ''}`));
    });
    subProcess.stdout.on('data', onData);
    subProcess.stderr.on('data', onData);
    subProcess.on('close', (code) => { 
      resolve(code);
    });
    subProcess.stdin.write(`${command} \n`);
    subProcess.stdin.end();
  });
}
