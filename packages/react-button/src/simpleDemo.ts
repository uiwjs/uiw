// import colors from 'colors';
// import * as fs from 'fs';
// import * as path from 'path';
// import * as os from 'os';
// import { TSDocParser, ParserContext, DocComment } from '@microsoft/tsdoc';
// import { Formatter } from './Formatter';
const fileBuffer: string = require('raw-loader!./index.d.ts');

/**
 * The simple demo does not rely on the TypeScript compiler API; instead, it parses the
 * source file directly.  It uses the default parser configuration.
 */
export function simpleDemo(): void {
  console.log('fileBuffer', fileBuffer);
}
