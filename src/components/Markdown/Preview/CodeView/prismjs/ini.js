/* eslint-disable */
Prism.languages.ini = {
  'comment': /[ \t]*[;#].*/,
  'selector': /^[ \t]*\[.*?\]/m,
  'constant': /^[ \t]*[^\s=]+?(?=[ \t]*=)/m,
  'attr-value': {
    pattern: /=.*/,
    inside: {
      'punctuation': /^[=]/
    }
  }
};