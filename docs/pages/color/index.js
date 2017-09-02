import Markdown from '../../libs/markdown/';
import './style.less';
export default class Color extends Markdown {
  document(locale, fileName) {
    return require(`../../md/${locale}/${fileName}.md`);
  }
}