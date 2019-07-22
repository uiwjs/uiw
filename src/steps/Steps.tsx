import React from 'react';
import classnames from 'classnames';
import { findDOMNode } from 'react-dom';
import Step, { IStepProps } from './Step';
import { IProps } from '../utils/props';

export interface IStepsProps extends IProps {
  status?: IStepProps['status'];
  progressDot?: IStepProps['progressDot'];
  direction?: 'horizontal' | 'vertical';
  /**
   * 指定当前步骤，从 `0` 开始记数。
   */
  current?: number;
}

export interface IStepsState {
  lastStepOffsetWidth: number;
}

export default class Steps extends React.Component<IStepsProps, IStepsState> {
  static Step = Step;
  public static defaultProps: IStepsProps = {
    prefixCls: 'w-steps',
    status: 'process',
    progressDot: false,
    direction: 'horizontal',
    current: 0,
  }
  constructor(props: IStepsProps) {
    super(props);
    this.state = {
      lastStepOffsetWidth: 0,
    };
  }
  componentDidMount() {
    this.calcStepOffsetWidth();
  }
  componentDidUpdate() {
    this.calcStepOffsetWidth();
  }
  // 计算每一步的宽度
  calcStepOffsetWidth() {
    const domNode = findDOMNode(this);
    if (domNode && domNode.lastChild) {
      const lastStepOffsetWidth = ((domNode.lastChild as HTMLElement).offsetWidth || 0) + 1;
      if (this.state.lastStepOffsetWidth === lastStepOffsetWidth ||
        Math.abs(this.state.lastStepOffsetWidth - lastStepOffsetWidth) <= 3) {
        return;
      }
      this.setState({ lastStepOffsetWidth });
    }
  }
  render() {
    const { prefixCls, style = {}, className, children, current, status, progressDot, direction, ...resetProps } = this.props;
    const { lastStepOffsetWidth } = this.state;
    const filteredChildren = React.Children.toArray(children).filter(c => !!c);
    const lastIndex = filteredChildren.length - 1;// 最后一个节点的索引数字
    const classString = classnames(prefixCls, `${prefixCls}-${direction}`, {
      [`${prefixCls}-dot`]: !!progressDot,
    });
    return (
      <div className={classString} style={style} {...resetProps}>
        {React.Children.map(children, (child: any, index) => {
          const childProps = {
            stepNumber: `${index + 1}`,
            prefixCls,
            progressDot,
            ...child.props,
          };
          if (index !== lastIndex && direction !== 'vertical') {
            childProps.itemWidth = `${100 / lastIndex}%`;
            childProps.adjustMarginRight = -Math.round((lastStepOffsetWidth / lastIndex) + 1);
          }

          if (progressDot && direction !== 'vertical') {
            childProps.itemWidth = `${100 / filteredChildren.length}%`;
            childProps.adjustMarginRight = 0;
          }
          // 错误前面
          if (status === 'error' && index === (current as number) - 1) {
            childProps.className = `${prefixCls}-next-error`;
          }
          if (!child.props.status) {
            if (index === current) {
              childProps.status = status;
            } else if (index < (current as number)) {
              childProps.status = 'finish';
            } else {
              childProps.status = 'wait';
            }
          }
          return React.cloneElement(child, childProps);
        })}
      </div>
    );
  }
}
