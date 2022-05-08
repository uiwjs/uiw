import Codepen, { CodePenOption } from '@uiw/react-codepen';

const Code = (props: CodePenOption & { includeModule?: string[] }) => {
  const { includeModule, ...rest } = props;
  if (rest && rest.js) {
    let include = (includeModule || []).join('|');
    rest.js = rest.js.replace(/import([\s\S]*?)(?=['"])['"].*['"]( *;|;)?/gm, (str) => {
      // eslint-disable-next-line no-useless-escape
      if (include && new RegExp(`from\\s+['"](${include})['"](\s.+)?;?`).test(str)) {
        return str;
      }
      return `/** ${str} **/`;
    });
  }
  return (
    <div className="preview-button-ccs">
      <Codepen {...rest}>
        <svg
          className="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2070"
          width="18"
          height="18"
        >
          <path
            d="M123.428571 668l344.571429 229.714286v-205.142857L277.142857 565.142857z m-35.428571-82.285714l110.285714-73.714286-110.285714-73.714286v147.428572z m468 312l344.571429-229.714286-153.714286-102.857143-190.857143 127.428572v205.142857z m-44-281.714286l155.428571-104-155.428571-104-155.428571 104zM277.142857 458.857143l190.857143-127.428572V126.285714L123.428571 356z m548.571429 53.142857l110.285714 73.714286V438.285714z m-78.857143-53.142857l153.714286-102.857143-344.571429-229.714286v205.142857z m277.142857-102.857143v312q0 23.428571-19.428571 36.571429l-468 312q-12 7.428571-24.571429 7.428571t-24.571429-7.428571L19.428571 704.571429q-19.428571-13.142857-19.428571-36.571429V356q0-23.428571 19.428571-36.571429L487.428571 7.428571q12-7.428571 24.571429-7.428571t24.571429 7.428571l468 312q19.428571 13.142857 19.428571 36.571429z"
            p-id="2071"
          ></path>
        </svg>
      </Codepen>
    </div>
  );
};

export default Code;
