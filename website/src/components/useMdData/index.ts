import { useEffect, useState } from 'react';
import { CodeBlockData } from 'markdown-react-code-preview-loader';
import { useTranslation } from 'react-i18next';
import { DefLan } from 'react-i18next-config';

export const useFileSuffix = () => {
  const { i18n } = useTranslation();
  const fileSuffix = i18n.language === DefLan ? '' : '.' + i18n.language;
  return fileSuffix;
};

const useMdData = (path?: (lang?: string) => Promise<CodeBlockData>) => {
  const [mdData, setMdData] = useState<CodeBlockData>({
    source: '',
    components: {},
    codeBlock: {},
    languages: {},
  });
  const fileSuffix = useFileSuffix();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getMd = async () => {
      if (path) {
        setLoading(() => true);
        try {
          const result = await path(fileSuffix);
          if (result) {
            setMdData(result);
          }
        } catch (err) {
          console.warn(err);
        }
        setLoading(() => false);
      }
    };
    getMd();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileSuffix]);
  return { mdData, loading };
};

export default useMdData;
