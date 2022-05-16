import CodePreviewLayout, { CodeLayoutProps } from 'react-code-preview-layout';
export interface CodesProps extends CodeLayoutProps {
  version: string;
  codePen: boolean;
  codeSandbox?: boolean;
  noCode?: boolean;
}

export default function Code({ version, codePen, codeSandbox, noCode, ...other }: CodesProps) {
  const props: CodeLayoutProps = { ...other };
  if (codePen) {
    props.codePenOptions = {
      title: `uiw${version} - demo`,
      includeModule: ['uiw'],
      js: `${(props.copyNodes || '').replace(
        'export default',
        'const APP_Default = ',
      )}\nReactDOM.createRoot(document.getElementById("container")).render(<APP_Default />)`,
      html: '<div id="container" style="padding: 24px"></div>',
      css_external: `https://unpkg.com/uiw@${version}/dist/uiw.min.css`,
      js_external: `https://unpkg.com/react@18.x/umd/react.development.js;https://unpkg.com/react-dom@18.x/umd/react-dom.development.js;https://unpkg.com/classnames@2.2.6/index.js;https://unpkg.com/uiw@${version}/dist/uiw.min.js;https://unpkg.com/@uiw/codepen-require-polyfill@1.1.3/index.js`,
    };
  }
  if (codeSandbox) {
    props.codeSandboxOptions = {
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
          content: props.copyNodes,
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
  }
  if (typeof noCode === 'boolean') {
    props.noButton = noCode;
  }
  return <CodePreviewLayout {...props} codePadding={0} />;
  // return <CodePreview {...props} dependencies={dependencies} style={{ marginBottom: 0 }} />;
}
