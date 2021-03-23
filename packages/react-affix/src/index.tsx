import React from 'react';
import { IProps, HTMLDivProps, getScroll } from '@uiw/utils';

export interface AffixProps extends IProps, Omit<HTMLDivProps, 'onChange'> {
  /**
   * 距离窗口顶部达到指定偏移量后触发
   */
  offsetTop?: number;
  /**
   * 距离窗口底部达到指定偏移量后触发
   */
  offsetBottom?: number;
  target?: () => Window | HTMLElement | null;
  /**
   * 固定状态改变时触发的回调函数
   */
  onChange?: (affixed?: boolean) => void;
}

export interface IAffixState {
  affixStyle?: React.CSSProperties;
  placeholderStyle?: React.CSSProperties;
}

function getTargetRect(target: HTMLElement | Window | null): ClientRect {
  return target !== window
    ? (target as HTMLElement).getBoundingClientRect()
    : ({ top: 0, left: 0, bottom: 0 } as ClientRect);
}

function getOffset(element: HTMLElement, target: HTMLElement | Window | null) {
  const elemRect = element.getBoundingClientRect();
  const targetRect = getTargetRect(target);
  const scrollTop = getScroll(target, true);
  const scrollLeft = getScroll(target);

  const docElem = window.document.body;
  const clientTop = docElem.clientTop || 0;
  const clientLeft = docElem.clientLeft || 0;

  return {
    top: elemRect.top - targetRect.top + scrollTop - clientTop,
    left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
    width: elemRect.width,
    height: elemRect.height,
  };
}

function noop() {}

function getDefaultTarget() {
  return typeof window !== 'undefined' ? window : null;
}

export default class Affix extends React.Component<AffixProps, IAffixState> {
  public static defaultProps: AffixProps = {
    prefixCls: 'w-affix',
    onChange: noop,
  };
  public state: IAffixState = {
    placeholderStyle: undefined,
    affixStyle: undefined,
  };
  private box: any;
  private target!: Window | HTMLElement | null;
  private readonly events = [
    'resize',
    'scroll',
    'touchstart',
    'touchmove',
    'touchend',
    'pageshow',
    'load',
  ];
  private eventHandlers: Record<string, any> = {};
  private timeout?: number;
  constructor(props: AffixProps & HTMLDivProps) {
    super(props);
    this.updatePosition = this.updatePosition.bind(this);
  }
  componentDidMount() {
    const target = this.props.target || getDefaultTarget;
    // Wait for parent component ref has its value
    this.timeout = window.setTimeout(() => {
      this.target = target();
      this.setTargetEventListeners();
    });
  }
  componentWillUnmount() {
    this.clearEventListeners();
    clearTimeout(this.timeout);
  }
  updatePosition() {
    let { offsetTop } = this.props;
    const { offsetBottom } = this.props;
    if (!this.box || !this.box.offsetParent) {
      return;
    }
    const elemSize = {
      width: this.box.clientWidth,
      height: this.box.clientHeight,
    };
    const offsetMode = { top: false, bottom: false };
    if (typeof offsetTop !== 'number' && typeof offsetBottom !== 'number') {
      offsetMode.top = true;
      offsetTop = 0;
    } else {
      offsetMode.top = typeof offsetTop === 'number';
      offsetMode.bottom = typeof offsetBottom === 'number';
    }
    const elemOffset = getOffset(this.box, this.target);
    const box = this.box.getBoundingClientRect();
    const bottom =
      document.documentElement.clientHeight - box.y - elemOffset.height;
    if (offsetMode.top && box.y < 0) {
      this.setPlaceholderStyle({ ...elemSize });
      this.setAffixStyle({
        position: 'fixed',
        top: offsetTop || 0,
        left: elemOffset.left,
        width: elemOffset.width,
      });
    } else if (bottom < 0) {
      this.setPlaceholderStyle({ ...elemSize });
      this.setAffixStyle({
        position: 'fixed',
        bottom: offsetBottom || 0,
        left: elemOffset.left,
        width: elemOffset.width,
      });
    } else {
      this.setPlaceholderStyle();
      this.setAffixStyle();
    }
  }
  setAffixStyle(affixStyle?: React.CSSProperties) {
    const { onChange } = this.props;
    const affixed = !!this.state.affixStyle;
    this.setState({ affixStyle }, () => {
      onChange && onChange(affixed);
    });
  }
  setPlaceholderStyle(placeholderStyle?: React.CSSProperties) {
    this.setState({ placeholderStyle });
  }
  // 设置监听事件
  setTargetEventListeners() {
    this.clearEventListeners();
    this.events.forEach((eventName) => {
      this.eventHandlers[eventName] = this.updatePosition;
      this.target &&
        this.target.addEventListener(eventName, this.updatePosition, false);
    });
  }
  clearEventListeners() {
    this.events.forEach((eventName) => {
      const handler = this.eventHandlers[eventName];
      this.target && this.target.removeEventListener(eventName, handler, false);
    });
  }
  getInstance = (node: HTMLDivElement) => {
    if (node) {
      this.box = node;
    }
  };
  public render() {
    const {
      prefixCls,
      className,
      children,
      offsetTop,
      offsetBottom,
      target,
      onChange,
      ...resetProps
    } = this.props;
    const cls = [className, prefixCls].filter(Boolean).join(' ').trim();
    return (
      <div
        {...resetProps}
        ref={this.getInstance}
        style={{ ...this.state.placeholderStyle, ...this.props.style }}
      >
        <div className={cls} style={this.state.affixStyle}>
          {children}
        </div>
      </div>
    );
  }
}
