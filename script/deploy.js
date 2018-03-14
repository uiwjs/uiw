const ghpages = require('gh-pages');
const loading = require('loading-cli');
const color = require('colors-cli/toxic');
const pkg = require('../package.json');
const path = require('path');

const ORIGIN = 'https://github.com/uiw-react/uiw-react.github.io.git';
const BRANCH = 'master';

console.log('  Start public to your git repo'.green)
console.log(`  ${ORIGIN}\n`.green)
const load = loading({
  "text": "Please wait ...".blue,
  "color": "blue",
  "interval": 100,
  "stream": process.stdout,
}).start();

ghpages.publish(path.resolve(path.join(process.cwd(), 'dist')), {
  branch: BRANCH,
  repo: ORIGIN,
  message: `Update uiw v${pkg.version} document., ${new Date()}!`
}, function name(err) {
  load.stop();
  if (err) {
    return console.log(err);
  }
  console.log(`\n  Push to ${BRANCH} success!\n`.green.bold);
});
