#!/bin/bash


if [ $? = 0 ]; then
  # purge dist
  rm -fr es5
  rm -fr lib

  # babel transform es6 into es5
  babel src --out-dir ./es5 --copy-files
  # babel src --out-dir lib --copy-files

else
  echo '!!!!'
fi
