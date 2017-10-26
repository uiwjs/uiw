var childProcess = require("child_process");
var exec = childProcess.exec;
var spawn = childProcess.spawn;

function runTask(tasks, cb) {
  var current = 0
  var results = []
  var isSync = true

  function done (err) {
    function end () {
      if (cb) cb(err, results)
    }
    if (isSync) process.nextTick(end)
    else end()
  }

  function each (err, result) {
    results.push(result)
    if (++current >= tasks.length || err) done(err)
    else tasks[current](each)
  }

  if (tasks.length > 0) tasks[0](each)
  else done(null)

  isSync = false
}

var name = process.argv[2] || 'dist';
var branch = process.argv[3] || 'gh-pages';

function execCommand(command,options,callback){
  if(!callback && options) callback = options;
  let exc = exec(command,options, callback).stdout.on('data', (data,eee) => {
    console.log("-->>",data.toString());
  })
}

process.on('SIGINT', () => {
  console.log('Received SIGINT.  Press Control-D to exit.');
});

runTask([
  (cb) => exec(`git remote -v | awk '$1=="origin" && $3=="(push)" {print $2}'`, cb),
  (cb) => exec(`cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g'`, cb),
  (cb) => exec(`cd ${name} && rm -rf .git && pwd`, cb),
],(err, stdout) => {
  if (err) throw err;
  let origin  = stdout[0].replace(/\n/g,'');
  let version = stdout[1].replace(/\n/g,'');
  let cwd     =stdout[2].replace(/\n/g, '');
  runTask([
    (cb) => execCommand(`git init`,{ cwd }, cb),
    (cb) => execCommand(`git remote add origin ${origin}`,{ cwd }, cb),
    (cb) => execCommand(`git checkout -b ${branch}`,{ cwd }, cb),
    (cb) => execCommand(`git add . -A `,{ cwd }, cb),
    (cb) => execCommand(`git commit -m "v${version}" `,{ cwd }, cb),
    // (cb) => spawnCommand(`git`,['push','-f','origin','${branch}']),
    (cb) => execCommand(`git push -f origin ${branch}`,{ cwd }, cb),
    (cb) => execCommand(`rm -rf .git`,{ cwd }, cb),
    (cb) => execCommand(`pwd`,{ cwd }, cb),
  ],(err, stdout) => {
    if (err) throw err;
    // stdout.forEach((msg)=>{
    //   console.log("=3=>",msg);

    // })
    // console.log("=2=>",stdout);
    // console.log("=2=>",stdout[0]);
  })
})



