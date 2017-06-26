import Markdown from '../../libs/markdown/';
export default class TimePicker extends Markdown {
  document(locale, fileName) {
    return require(`../../md/${locale}/${fileName}.md`);
  }
}