var fs = require('fs');
var path = require('path');

//返回 MD 所有路径的 Array
function readSrcSync(filepath, ret){
    var ret = ret || [],
        files = fs.readdirSync(filepath);
    for (var i = 0; i < files.length; i++) {
      let curPath = path.resolve(filepath,files[i]);
      if(isDir(curPath) ){

        if(files[i] !=='style' || files[i] !=='font'){

          readSrcSync(curPath, ret);
        }

      }
      else if(/\.(js)$/.test(files[i])) {
        ret.push(curPath);
      }
    }
    return ret;
}
//判断是不是目录
function isDir(_path){
    return exists(_path) && fs.statSync(_path).isDirectory();
}
//检查指定路径的文件或者目录是否存在
function exists(_path){
    return fs.existsSync(_path);
}


module.exports = {
  readSrcSync
}