import styled from 'styled-components';

const CollapseWarp = styled.div`
  border-radius: 4px;
  line-height: 16px;
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  overflow: hidden;
  & > .w-collapse-item:last-child .w-collapse-header,
  & > .w-collapse-item:last-child {
    border-radius: 0 0 5px 5px;
  }
  .w-collapse-title {
    flex: 1;
  }
  .w-collapse-header {
    padding: 8px 10px;
    color: rgba(0, 0, 0, 0.85);
    background-color: #fafafa;
    cursor: pointer;
    position: relative;
    transition: all 0.3s;
    z-index: 1;
    display: flex;
    & > .w-icon:first-child {
      margin-top: -2px;
      margin-right: 5px;
      transform: scale(0.85) rotate(-90deg);
      transition: transform 0.24s;
      svg {
        display: block;
      }
    }
    & > * {
      vertical-align: middle;
      display: inline-block;
    }
  }
  .w-collapse-active .w-collapse-header {
    & > .w-icon:first-child {
      transform: scale(0.85) rotate(0);
    }
  }
  .w-collapse-panel {
    overflow: hidden;
    color: rgba(0, 0, 0, 0.65);
    padding: 0 10px;
    &:before,
    &:after {
      content: '';
      height: 10px;
      display: block;
      overflow: hidden;
    }
    &:before {
      border-top: 1px solid #d9d9d9;
      margin: 0 -10px;
      z-index: 1;
      position: relative;
    }
    &:after {
      border-bottom: 1px solid #d9d9d9;
      margin: 0 -10px;
      z-index: 1;
      position: relative;
    }
  }
  & > .w-collapse-item:last-child .w-collapse-panel:after {
    border-bottom: 0 solid #d9d9d9;
  }
  & > .w-collapse-item:not(.w-collapse-active):last-child .w-collapse-panel:before {
    border-top: 0 solid #d9d9d9;
  }
  .w-collapse-disabled .w-collapse-header {
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.25);
    background-color: #f7f7f7;
  }
  &.w-noborder .w-collapse-header {
    background-color: transparent;
  }
  &.w-noborder {
    border: 0;
  }
  &.w-noborder .w-collapse-item .w-collapse-panel {
    &:after,
    &:before {
      border: 0;
    }
  }
  &.w-noborder .w-collapse-item:last-child {
    border: 0;
  }
`;
export default CollapseWarp;
