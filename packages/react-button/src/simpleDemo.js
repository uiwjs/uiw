'use strict';
exports.__esModule = true;
exports.simpleDemo = void 0;
var colors_1 = require('colors');
var fs = require('fs');
var path = require('path');
var os = require('os');
var tsdoc_1 = require('@microsoft/tsdoc');
var Formatter_1 = require('./Formatter');
/**
 * The simple demo does not rely on the TypeScript compiler API; instead, it parses the
 * source file directly.  It uses the default parser configuration.
 */
function simpleDemo() {
  console.log(colors_1['default'].yellow('*** TSDoc API demo: Simple Scenario ***') + os.EOL);
  var inputFilename = path.resolve(path.join(__dirname, '..', 'assets', 'simple-input.ts'));
  console.log('Reading assets/simple-input.ts...');
  var inputBuffer = fs.readFileSync(inputFilename).toString();
  // NOTE: Optionally, can provide a TSDocConfiguration here
  var tsdocParser = new tsdoc_1.TSDocParser();
  var parserContext = tsdocParser.parseString(inputBuffer);
  console.log(os.EOL + colors_1['default'].green('Input Buffer:') + os.EOL);
  console.log(colors_1['default'].gray('<<<<<<'));
  console.log(inputBuffer);
  console.log(colors_1['default'].gray('>>>>>>'));
  console.log(os.EOL + colors_1['default'].green('Extracted Lines:') + os.EOL);
  console.log(
    JSON.stringify(
      parserContext.lines.map(function (x) {
        return x.toString();
      }),
      undefined,
      '  ',
    ),
  );
  console.log(os.EOL + colors_1['default'].green('Parser Log Messages:') + os.EOL);
  if (parserContext.log.messages.length === 0) {
    console.log('No errors or warnings.');
  } else {
    for (var _i = 0, _a = parserContext.log.messages; _i < _a.length; _i++) {
      var message = _a[_i];
      console.log(inputFilename + message.toString());
    }
  }
  console.log(os.EOL + colors_1['default'].green('DocComment parts:') + os.EOL);
  var docComment = parserContext.docComment;
  console.log(
    colors_1['default'].cyan('Summary: ') +
      JSON.stringify(Formatter_1.Formatter.renderDocNode(docComment.summarySection)),
  );
  if (docComment.remarksBlock) {
    console.log(
      colors_1['default'].cyan('Remarks: ') +
        JSON.stringify(Formatter_1.Formatter.renderDocNode(docComment.remarksBlock.content)),
    );
  }
  for (var _b = 0, _c = docComment.params.blocks; _b < _c.length; _b++) {
    var paramBlock = _c[_b];
    console.log(
      colors_1['default'].cyan('Parameter "'.concat(paramBlock.parameterName, '": ')) +
        JSON.stringify(Formatter_1.Formatter.renderDocNode(paramBlock.content)),
    );
  }
  if (docComment.returnsBlock) {
    console.log(
      colors_1['default'].cyan('Returns: ') +
        JSON.stringify(Formatter_1.Formatter.renderDocNode(docComment.returnsBlock.content)),
    );
  }
  console.log(
    colors_1['default'].cyan('Modifiers: ') +
      docComment.modifierTagSet.nodes
        .map(function (x) {
          return x.tagName;
        })
        .join(', '),
  );
}
exports.simpleDemo = simpleDemo;
simpleDemo();
