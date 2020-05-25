#!/usr/bin/env node

/**
 * released `uiw`
 * 1. ~~Copy `README.md` to the `/packages/core/` directory~~.
 * 2. Creacte document static resource.
 * 3. Entry the `/packages/core/` and run the `npm run build` command.
 * 4. Copy static resource to the `/packages/core/docs` directory.
 */

const fs = require('fs-extra');
const { join } = require('path');

const docsPath = join(process.cwd(), '..', '..', 'website', 'uiw', 'build');
const libPath = join(process.cwd(), '..', 'uiw');
const docRepoPath = join(process.cwd(), '..', 'doc');
const uiwPkg = join(libPath, 'package.json');
const docPkg = join(docRepoPath, 'package.json');

;(async () => {
  try {

    // Modify document version data.
    const uiwPkgContent = await fs.readJson(uiwPkg);
    console.log(`> Publish ${uiwPkgContent.version} v${uiwPkgContent.version}`);
    /**
     * Create a document website for `package.json`
     * path => `packages/doc/package.json`
     */
    await fs.writeFile(docPkg, JSON.stringify({
      "name": "@uiw/doc",
      "version": uiwPkgContent.version,
      "description": "UIW documentation website.",
      "homepage": uiwPkgContent.homepage,
      "authors": uiwPkgContent.authors,
      "files": [ "web" ],
      "repository": uiwPkgContent.repository,
      "keywords": uiwPkgContent.keywords,
      "author": uiwPkgContent.author,
      "license": uiwPkgContent.license
    }, null, 2) + '\n');
    await fs.emptyDir(join(docRepoPath, 'web'));
    await fs.copy(docsPath, join(docRepoPath, 'web'));
  } catch (error) {
    console.log('error:', error);
  }
})();
