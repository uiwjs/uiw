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

const docsPath = join(process.cwd(), '..', '..', 'website', 'build');
const libPath = join(process.cwd(), '..', 'uiw');
const docRepoPath = join(process.cwd(), '..', 'doc');
const uiwPkg = join(libPath, 'package.json');
const docPkg = join(docRepoPath, 'package.json');

(async () => {
  try {
    // Modify document version data.
    const uiwPkgContent = await fs.readJson(uiwPkg);
    /**
     * Create a document website for `package.json`
     * path => `packages/doc/package.json`
     */
    await fs.writeFile(
      docPkg,
      JSON.stringify(
        {
          name: '@uiw/doc',
          version: uiwPkgContent.version,
          description: 'UIW documentation website.',
          homepage: uiwPkgContent.homepage,
          authors: uiwPkgContent.authors,
          files: ['web'],
          repository: uiwPkgContent.repository,
          keywords: uiwPkgContent.keywords,
          author: uiwPkgContent.author,
          license: uiwPkgContent.license,
        },
        null,
        2,
      ) + '\n',
    );
    await fs.emptyDir(join(docRepoPath, 'web'));
    await fs.copy(docsPath, join(docRepoPath, 'web'));
    console.log(`> Copy From: \x1b[32;1m${docsPath}\x1b[0m`);
    console.log(`> To: \x1b[32;1m${join(docRepoPath, 'web')}\x1b[0m`);
    console.log(`> Update to v\x1b[32;1m${uiwPkgContent.version}\x1b[0m`);
  } catch (error) {
    const message = error && error.message ? error.message : '';
    console.log('\x1b[31;1m UIW:RELEASED:ERROR: \x1b[0m\n', error);
    new Error(`UIW:RELEASED:ERROR: \n ${message}`);
    process.exit(1);
  }
})();
