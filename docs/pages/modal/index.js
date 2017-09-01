import Markdown from '../../libs/markdown/';
export default class Modals extends Markdown {
  document(locale, fileName) {
    return require(`../../md/${locale}/${fileName}.md`);
  }
}