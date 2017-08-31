#!/bin/bash


if [ $? = 0 ]; then
  # purge dist
  rm -fr es5

  # babel transform es6 into es5
  babel src --out-dir ./es5 --copy-files

else
  echo '!!!!'
fi
