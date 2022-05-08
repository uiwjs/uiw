import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// i18next语言检测插件，用于检测浏览器中的用户语言
import LanguageDetector from 'i18next-browser-languagedetector';
import menuZhCn from './locale/menu/zh-cn.json';
import menuEnUs from './locale/menu/en-us.json';
import footerZhCn from './locale/footer/zh-cn.json';
import footerEnUs from './locale/footer/en-us.json';

const resources = {
  cn: {
    translation: {
      menu: JSON.stringify(menuZhCn),
      overview: { title: '概览 组件' },
      footer: footerZhCn,
    },
  },
  en: {
    translation: {
      menu: JSON.stringify(menuEnUs),
      overview: { title: 'Overview Components' },
      footer: footerEnUs,
    },
  },
};

i18n
  .use(LanguageDetector) //嗅探当前浏览器语言 zh-CN
  .use(initReactI18next) // 将 i18n 向下传递给 react-i18next
  .init({
    //初始化
    resources, //本地多语言数据
    fallbackLng: 'cn', //默认当前环境的语言
    detection: {
      caches: ['localStorage', 'sessionStorage', 'cookie'],
    },
  });

const DefLan = 'zh-CN';

export { DefLan };

export default i18n;
