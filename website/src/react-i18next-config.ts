import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// i18next语言检测插件，用于检测浏览器中的用户语言
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector) //嗅探当前浏览器语言 zh-CN
  .use(initReactI18next) // 将 i18n 向下传递给 react-i18next
  .init({
    //初始化
    // resources, //本地多语言数据
    fallbackLng: 'zh-CN', //默认当前环境的语言
    load: 'currentOnly', // 定义要查找的语言代码策略
    detection: {
      caches: ['localStorage', 'sessionStorage', 'cookie'],
    },
    backend: {
      // @ts-ignore
      loadPath: `${LOADPATH}/locales/{{lng}}/{{ns}}.json`,
    },
  });

const DefLan = 'zh-CN';

export { DefLan };

export default i18n;
