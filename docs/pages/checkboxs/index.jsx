import Markdown from '../../libs/markdown/';
export default class Checkboxs extends Markdown {
  document(locale,fileName) {
    return require(`../../md/${locale}/${fileName}.md`);
  }
}