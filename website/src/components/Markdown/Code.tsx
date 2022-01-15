import CodePreview, { CodePreviewProps } from '@uiw/react-code-preview';

export interface CodeProps extends CodePreviewProps {
  code: string;
  version: string;
  codePen: boolean;
  codeSandbox?: boolean;
  dependencies: any;
}

export default function Code({
  version,
  dependencies,
  codePen,
  codeSandbox,
  ...other
}: CodeProps) {
  const props: CodePreviewProps = { ...other };
  if (codePen) {
    props.codePenOption = {
      title: `uiw${version} - demo`,
      includeModule: ['uiw'],
      js: (props.code || '').replace(
        '_mount_',
        'document.getElementById("container")',
      ),
      html: '<div id="container" style="padding: 24px"></div>',
      css_external: `https://unpkg.com/uiw@${version}/dist/uiw.min.css`,
      js_external: `https://unpkg.com/react@16.x/umd/react.development.js;https://unpkg.com/react-dom@16.x/umd/react-dom.development.js;https://unpkg.com/classnames@2.2.6/index.js;https://unpkg.com/uiw@${version}/dist/uiw.min.js;https://unpkg.com/@uiw/codepen-require-polyfill@1.0.2/index.js`,
    };
  }
  if (codeSandbox) {
    props.codeSandboxOption = {
      files: {
        'sandbox.config.json': {
          content: `{
            "template": "node",
            "container": {
              "startScript": "start",
              "node": "14"
            }
          }`,
        },
        'public/index.html': {
          content: `<div id="container"></div>`,
        },
        'src/index.js': {
          content: (props.code || '').replace(
            '_mount_',
            'document.getElementById("container")',
          ),
        },
        '.kktrc.js': {
          content: `import webpack from "webpack";\nimport lessModules from "@kkt/less-modules";\nexport default (conf, env, options) => {\nconf = lessModules(conf, env, options);\nreturn conf;\n};`,
        },
        'package.json': {
          content: {
            name: 'uiw-demo',
            description: `uiw v${version} - demo`,
            dependencies: {
              react: 'latest',
              'react-dom': 'latest',
              uiw: 'latest',
            },
            devDependencies: {
              '@kkt/less-modules': '6.9.0',
              kkt: '6.9.0',
              typescript: '4.1.3',
            },
            license: 'MIT',
            scripts: {
              start: 'kkt start',
              build: 'kkt build',
              test: 'kkt test --env=jsdom',
            },
            browserslist: [
              '>0.2%',
              'not dead',
              'not ie <= 11',
              'not op_mini all',
            ],
          },
        },
      },
    };
  }
  return (
    <CodePreview
      {...props}
      dependencies={dependencies}
      style={{ marginBottom: 0 }}
    />
  );
}
