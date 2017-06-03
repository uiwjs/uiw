import Markdown from '../../libs/markdown/';
export default class Switch extends Markdown {
  document(locale,fileName) {
    return require(`../../md/${locale}/${fileName}.md`);
  }
}