import Markdown from '../../libs/markdown/';

export default class Checkbox extends Markdown {
  document(locale) {
    return require(`../../md/${locale}/checkbox.md`);
  }
}
