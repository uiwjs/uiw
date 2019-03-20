const path = require('path');
const fs = require('fs-extra');
const less = require('less');
const dirTree = require('directory-tree');
const LessPluginAutoPrefix = require('less-plugin-autoprefix');
const autoprefixPlugin = new LessPluginAutoPrefix({
  browsers: [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ]
});

function getLessFiles(folder) {
  return new Promise((resolve, reject) => {
    const lessPaths = [];
    dirTree(folder, {
      extensions: /\.(less)$/
    }, (item, PATH, stats) => {
      lessPaths.push(item.path);
    });
    resolve(lessPaths);
  });
}

function executeLess(lessPath) {
  const lessStr = fs.readFileSync(lessPath);
  return new Promise((resolve, reject) => {
    less.render(lessStr.toString(), {
      plugins: [autoprefixPlugin]
    }).then((output, ddd) => {
      output.less = lessStr.toString();
      resolve({ path: lessPath, output });
    }, error => reject(error));
  });
}

(async () => {
  const rootDir = path.join(process.cwd(), 'src');
  const outputDir = path.join(process.cwd(), 'lib', 'esm');
  try {
    const files = await getLessFiles(rootDir);
    const lessSource = await Promise.all(files.map(async (lessPath) => {
      return executeLess(lessPath);
    }));

    await Promise.all(lessSource.map(async (item) => {
      const logPathIn = item.path.replace(process.cwd(), '');
      item.path = item.path.replace(rootDir, outputDir).replace(/.less$/, '.css');
      const logPathOut = item.path.replace(process.cwd(), '');
      if (item.output && item.output.css) {
        await fs.outputFile(item.path, item.output.css);
        console.log('log:', logPathIn, '->', logPathOut);
      }
      if (item.output && item.output.imports && item.output.imports.length > 0) {
        console.log('imports:', item.output.imports);
      }
      return item;
    }));
  } catch (error) {
    console.log('error:', error);
  }
})();
