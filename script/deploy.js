const ghpages = require('gh-pages');
const path = require('path');
const del = require('del');
const loading = require('loading-cli');
require('colors-cli/toxic');
const pkg = require('../package.json');

const ORIGIN = 'git@github.com:uiw-react/uiw-react.github.io.git';
// const BRANCH = 'gh-pages';
console.log('  Start public to your git repo'.green); // eslint-disable-line
console.log(`  ${ORIGIN}\n`.green); // eslint-disable-line

function pushDirToBranch(dir, branch, callback) {
  const load = loading({
    text: `Push to ${branch}, Please wait ...`.blue,
    color: 'blue',
    interval: 100,
    stream: process.stdout,
  }).start();
  // 将 mocker 模拟 API 文件推送到一个新的分支
  ghpages.publish(path.resolve(path.join(process.cwd(), dir)), {
    branch,
    repo: ORIGIN,
    message: `Update dms v${pkg.version}., ${new Date()}!`,
  }, (err) => {
    load.stop();
    if (err) {
      return console.log(err); // eslint-disable-line
    }
    console.log(`\n  Push to ${branch} success!\n`.green.bold); // eslint-disable-line
    if (callback && typeof callback === 'function') callback();
  });
}

del(['node_modules/gh-pages/.cache/**']).then(() => {
  pushDirToBranch('dist', 'gh-pages', () => {
    console.log(`\n  Push to ${branch} done!\n`.green.bold); // eslint-disable-line
  });
});
