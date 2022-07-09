import CodePreviewLayout, { CodeLayoutProps } from 'react-code-preview-layout';
import Codepen from '@uiw/react-codepen';
import Codesandbox from '@uiw/react-codesandbox';
import React, { Fragment } from 'react';

export interface CodesProps extends CodeLayoutProps {
  version: string;
  codePen?: boolean | string;
  codeSandbox?: boolean | string;
  noCode?: boolean;
}

const getCodePenJs = (js: string, includeModule: string[]) => {
  let include = (includeModule || []).join('|');
  let resultJs = js.replace(/import([\s\S]*?)(?=['"])['"].*['"]( *;|;)?/gm, (str) => {
    // eslint-disable-next-line no-useless-escape
    if (include && new RegExp(`from\\s+['"](${include})['"](\s.+)?;?`).test(str)) {
      return str;
    }
    return `/** ${str} **/`;
  });
  return resultJs;
};

export default function Code({ version, codePen, codeSandbox, ...other }: CodesProps) {
  const props: Omit<CodeLayoutProps, 'ref'> = { ...other };

  let toolbarExtra: React.ReactNode[] = [];
  if (codePen) {
    const codePenOptions = {
      title: `uiw${version} - demo`,
      js: `${getCodePenJs(props.text || '', ['uiw']).replace(
        'export default',
        'const APP_Default = ',
      )}\nReactDOM.createRoot(document.getElementById("container")).render(<APP_Default />)`,
      html: '<div id="container" style="padding: 24px"></div>',
      css_external: `https://unpkg.com/uiw@${version}/dist/uiw.min.css`,
      js_external: `https://unpkg.com/react@18.x/umd/react.development.js;https://unpkg.com/react-dom@18.x/umd/react-dom.development.js;https://unpkg.com/classnames@2.2.6/index.js;https://unpkg.com/uiw@${version}/dist/uiw.min.js;https://unpkg.com/@uiw/codepen-require-polyfill@1.1.3/index.js`,
    };
    toolbarExtra.push(
      <Codepen key="Codepen" {...codePenOptions}>
        <svg style={{ fill: 'currentcolor' }} viewBox="0 0 1024 1024" width="18" height="18">
          <path
            d="M123.428571 668l344.571429 229.714286v-205.142857L277.142857 565.142857z m-35.428571-82.285714l110.285714-73.714286-110.285714-73.714286v147.428572z m468 312l344.571429-229.714286-153.714286-102.857143-190.857143 127.428572v205.142857z m-44-281.714286l155.428571-104-155.428571-104-155.428571 104zM277.142857 458.857143l190.857143-127.428572V126.285714L123.428571 356z m548.571429 53.142857l110.285714 73.714286V438.285714z m-78.857143-53.142857l153.714286-102.857143-344.571429-229.714286v205.142857z m277.142857-102.857143v312q0 23.428571-19.428571 36.571429l-468 312q-12 7.428571-24.571429 7.428571t-24.571429-7.428571L19.428571 704.571429q-19.428571-13.142857-19.428571-36.571429V356q0-23.428571 19.428571-36.571429L487.428571 7.428571q12-7.428571 24.571429-7.428571t24.571429 7.428571l468 312q19.428571 13.142857 19.428571 36.571429z"
            p-id="2071"
          ></path>
        </svg>
      </Codepen>,
    );
  }
  if (codeSandbox) {
    const codeSandboxOptions = {
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
        'src/app.js': {
          content: props.text,
        },
        'src/index.js': {
          content: `import React from "react";\nimport ReactClient from "react-dom/client";\nimport App from "./app";\nReactClient.createRoot(document.getElementById("container")).render(<App />);`,
        },
        // 'src/index.js': {
        //   content: (props.copyNodes || '').replace('_mount_', 'document.getElementById("container")'),
        // },
        '.kktrc.js': {
          content: `import lessModules from "@kkt/less-modules";\nexport default (conf, env, options) => {\nconf = lessModules(conf, env, options);\nreturn conf;\n};`,
        },
        'package.json': {
          content: {
            name: 'uiw-demo',
            description: `uiw v${version} - demo`,
            dependencies: {
              react: '18.1.0',
              'react-dom': '18.1.0',
              uiw: 'latest',
            },
            devDependencies: {
              '@kkt/less-modules': '~7.1.1',
              kkt: '~7.1.5',
            },
            license: 'MIT',
            scripts: {
              start: 'kkt start',
              build: 'kkt build',
              test: 'kkt test --env=jsdom',
            },
            browserslist: ['>0.2%', 'not dead', 'not ie <= 11', 'not op_mini all'],
          },
        },
      },
    };
    toolbarExtra.push(
      <Codesandbox key="Codesandbox" {...codeSandboxOptions}>
        <svg style={{ fill: 'currentcolor' }} viewBox="0 0 1024 1024" width="18" height="18">
          <path
            d="M85.333333 256l446.08-256L977.493333 256 981.333333 765.866667 531.413333 1024 85.333333 768V256z m89.088 105.856v202.965333l142.72 79.36v150.016l169.472 97.962667v-352.938667L174.421333 361.856z m714.197334 0l-312.192 177.365333v352.938667l169.472-97.962667V644.266667l142.72-79.402667V361.813333zM219.050667 281.642667l311.594666 176.810666 312.32-178.346666-165.162666-93.738667-145.493334 82.986667-146.346666-83.968L219.008 281.6z"
            p-id="4089"
          ></path>
        </svg>
      </Codesandbox>,
    );
  }
  return <CodePreviewLayout {...props} toolbarExtra={<Fragment>{toolbarExtra}</Fragment>} />;
}
