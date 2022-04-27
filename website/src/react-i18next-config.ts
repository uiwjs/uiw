import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
//i18next-browser-languagedetector插件
//这是一个 i18next 语言检测插件，用于检测浏览器中的用户语言，
//详情请访问：https://github.com/i18next/i18next-browser-languageDetector
import LanguageDetector from 'i18next-browser-languagedetector';
//引入需要实现国际化的简体、繁体、英文三种数据的json文件
import menuZhCn from './locale/menu/menu-zh-cn.json';
import menuEnUs from './locale/menu/menu-en-us.json';

const resources = {
  cn: { translation: { menu: JSON.stringify(menuZhCn), overview: { title: '概览 组件' } } },
  en: { translation: { menu: JSON.stringify(menuEnUs), overview: { title: 'Overview Components' } } },
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

export default i18n;
