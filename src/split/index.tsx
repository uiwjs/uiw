import React from 'react';
import classnames from 'classnames';
import './style/index.less';
import { IProps, HTMLDivProps } from '../utils/props';

export interface ISplitProps extends IProps {
  onDragging?: (preSize: number, nextSize: number, paneNumber: number) => void;
  onDragEnd?: (preSize: number, nextSize: number, paneNumber: number) => void;
  lineBar?: boolean;
  visiable: boolean | number[];
  disable?: boolean | number[];
  mode: 'horizontal' | 'vertical';
}
export interface ISplitState extends HTMLDivProps {
  dragging: boolean;
}

export default class Split extends React.Component<ISplitProps> {
  public static defaultProps: ISplitProps = {
    prefixCls: 'w-split',
    visiable: true,
    mode: 'horizontal',
  }
  public state: ISplitState = {
    dragging: false,
  }
  public warpper!: HTMLDivElement | null;
  public paneNumber!: number;
  public startX!: number;
  public startY!: number;
  public move!: boolean;
  public target!: HTMLDivElement;

  public boxWidth!: number;
  public boxHeight!: number;
  public preWidth!: number;
  public nextWidth!: number;
  public preHeight!: number;
  public nextHeight!: number;

  public preSize!: number;
  public nextSize!: number;
  constructor(props: ISplitProps) {
    super(props);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onDragging = this.onDragging.bind(this);
  }
  public componentWillUnmount() {
    this.removeEvent();
  }
  private removeEvent() {
    window.removeEventListener('mousemove', this.onDragging, false);
    window.removeEventListener('mouseup', this.onDragEnd, false);
  }
  onMouseDown(paneNumber: number, env: React.MouseEvent<HTMLDivElement>) {
    if (!env.target || !this.warpper) {
      return;
    }
    this.paneNumber = paneNumber;
    this.startX = env.clientX;
    this.startY = env.clientY;
    this.move = true;
    this.target = env.target as HTMLDivElement;
    const prevTarget = this.target.previousElementSibling;
    const nextTarget = this.target.nextElementSibling;
    this.boxWidth = this.warpper.clientWidth;
    this.boxHeight = this.warpper.clientHeight;
    if (prevTarget) {
      this.preWidth = prevTarget.clientWidth;
      this.preHeight = prevTarget.clientHeight;
    }
    if (nextTarget) {
      this.nextWidth = nextTarget.clientWidth;
      this.nextHeight = nextTarget.clientHeight;
    }
    window.addEventListener('mousemove', this.onDragging);
    window.addEventListener('mouseup', this.onDragEnd, false);
    this.setState({ dragging: true });
  }
  onDragging(env: Event) {
    if (!this.move) {
      return;
    }
    if (!this.state.dragging) {
      this.setState({ dragging: true });
    }
    const { mode, onDragging } = this.props;
    const nextTarget = this.target.nextElementSibling as HTMLDivElement;
    const prevTarget = this.target.previousElementSibling as HTMLDivElement;
    const x = (env as MouseEvent).clientX - this.startX;
    const y = (env as MouseEvent).clientY - this.startY;
    this.preSize = 0;
    this.nextSize = 0;
    if (mode === 'horizontal') {
      this.preSize = this.preWidth + x > -1 ? this.preWidth + x : 0;
      this.nextSize = this.nextWidth - x > -1 ? this.nextWidth - x : 0;
      if (this.preSize === 0 || this.nextSize === 0) {
        return;
      }
      this.preSize = (this.preSize / this.boxWidth >= 1 ? 1 : this.preSize / this.boxWidth) * 100;
      this.nextSize = (this.nextSize / this.boxWidth >= 1 ? 1 : this.nextSize / this.boxWidth) * 100;
      if (prevTarget && nextTarget) {
        prevTarget.style.width = `${this.preSize}%`;
        nextTarget.style.width = `${this.nextSize}%`;
      }
    }
    if (mode === 'vertical' && this.preHeight + y > -1 && this.nextHeight - y > -1) {
      this.preSize = this.preHeight + y > -1 ? this.preHeight + y : 0;
      this.nextSize = this.nextHeight - y > -1 ? this.nextHeight - y : 0;
      this.preSize = (this.preSize / this.boxHeight >= 1 ? 1 : this.preSize / this.boxHeight) * 100;
      this.nextSize = (this.nextSize / this.boxHeight >= 1 ? 1 : this.nextSize / this.boxHeight) * 100;
      if (this.preSize === 0 || this.nextSize === 0) {
        return;
      }
      if (prevTarget && nextTarget) {
        prevTarget.style.height = `${this.preSize}%`;
        nextTarget.style.height = `${this.nextSize}%`;
      }
    }
    onDragging && onDragging(this.preSize, this.nextSize, this.paneNumber);
  }
  onDragEnd() {
    const { onDragEnd } = this.props;
    this.move = false;
    onDragEnd && onDragEnd(this.preSize, this.nextSize, this.paneNumber);
    this.removeEvent();
    this.setState({ dragging: false });
  }
  render() {
    const { prefixCls, className, children, mode, visiable, lineBar, disable, onDragEnd, onDragging, ...other } = this.props;
    const { dragging } = this.state;
    const cls = classnames(prefixCls, className, `${prefixCls}-${mode}`, { dragging });
    const child = React.Children.toArray(children);
    return (
      <div className={cls} {...other} ref={node => this.warpper = node}>
        {React.Children.map(child, (element: any, idx: number) => {
          const props = Object.assign({}, element.props, {
            className: classnames(`${prefixCls}-pane`, element.props.className),
            style: { ...element.props.style },
          });
          const visiableBar = (visiable === true || (visiable && visiable.includes((idx + 1) as never))) || false;
          const barProps = {
            className: classnames(`${prefixCls}-bar`, {
              [`${prefixCls}-line-bar`]: lineBar,
            }),
            onMouseDown: this.onMouseDown.bind(this, idx + 1),
          };
          if (disable === true || (disable && disable.includes((idx + 1) as never))) {
            barProps.className = classnames(barProps.className, { disable });
            delete barProps.onMouseDown;
          }
          return (
            <React.Fragment>
              {idx !== 0 && visiableBar && React.createElement('div', { ...barProps })}
              {React.cloneElement(element, { ...props })}
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}
