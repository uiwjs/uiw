import styled, { keyframes } from 'styled-components';

interface WarpProps {
  theme: {
    boxShadowColorBadge: string;
    colorBadge: string;
    fontSizeDefault: string;
    fontSizeSmall: string;
  };
}

const keyframesStatusProcessing = keyframes`
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
`;

const Warp = styled.span<WarpProps>`
  position: relative;
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
  & sup.w-badge-count {
    position: absolute;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    top: -10px;
    height: 16px;
    border-radius: 10px;
    min-width: 16px;
    background: #f04134;
    color: ${(props) => props.theme.colorBadge};
    line-height: 16px;
    text-align: center;
    padding: 0 5px;
    font-size: ${(props) => props.theme.fontSizeSmall};
    white-space: nowrap;
    -webkit-transform-origin: -10% center;
    transform-origin: -10% center;
    font-family: tahoma;
    box-shadow: 0 0 0 1px ${(props) => props.theme.boxShadowColorBadge};
  }
  &.nowrap sup.w-badge-count {
    top: auto;
    display: block;
    position: relative;
    -webkit-transform: none !important;
    transform: none !important;
    overflow: hidden;
  }
  & sup.dot {
    position: absolute;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    -webkit-transform-origin: 0 center;
    transform-origin: 0 center;
    overflow: hidden;
    color: transparent;
    top: -4px;
    height: 6px;
    width: 6px;
    padding: 0;
    border-radius: 100%;
    background: #f04134;
    z-index: 10;
    box-shadow: 0 0 0 1px ${(props) => props.theme.boxShadowColorBadge};
  }
  .w-badge-dot {
    line-height: inherit;
    vertical-align: baseline;
    font-size: ${(props) => props.theme.fontSizeDefault};
    margin: 0 4px;
    width: 6px;
    height: 6px;
    display: inline-block;
    border-radius: 50%;
    vertical-align: middle;
    position: relative;
    top: -1px;
  }
  .w-badge-processing .w-badge-dot {
    position: relative;
    background-color: '#007bff';
  }
  .w-badge-processing .w-badge-dot:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: inherit;
    content: '';
    -webkit-animation: ${keyframesStatusProcessing} 1.2s infinite ease-in-out;
    animation: ${keyframesStatusProcessing} 1.2s infinite ease-in-out;
  }
`;

Warp.defaultProps = {
  theme: {
    boxShadowColorBadge: '#fff',
    colorBadge: '#fff',
    fontSizeDefault: '14px',
    fontSizeSmall: '12px',
  },
};

export default Warp;
