import { useEffect, useState } from 'react';
import { CodeBlockData } from 'markdown-react-code-preview-loader';
import { useTranslation } from 'react-i18next';

const useMdData = (path?: (lang?: string) => Promise<CodeBlockData>, name: string = 'md-language-name') => {
  const init = useTranslation();
  const [mdData, setMdData] = useState<CodeBlockData>({
    source: '',
    components: {},
    codeBlock: {},
    languages: {},
  });
  const lang = init.t(name);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getMd = async () => {
      if (path) {
        setLoading(() => true);
        try {
          const result = await path(lang);
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
  }, [lang]);
  return { mdData, loading };
};

export default useMdData;
