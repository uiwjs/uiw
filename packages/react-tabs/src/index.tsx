import React from 'react';
import classnames from 'classnames';
import { IProps, HTMLDivProps } from '@uiw/utils';
import Pane from './Pane';
import './style/index.less';

export interface TabsProps extends IProps, HTMLDivProps {
  prefixCls?: string;
  activeKey?: string;
  type?: 'default' | 'line' | 'card';
  children?: React.ReactNode;
  onTabClick?: (key: string, item: React.ReactElement, e: React.MouseEvent) => void;
}

export interface TabsState {
  activeKey: string;
  slideStyle: {
    width: number;
    left: number;
  }
}

export default class Tabs extends React.Component<TabsProps, TabsState> {
  public static defaultProps: TabsProps = {
    prefixCls: 'w-tabs',
    type: 'default',
  }
  static Pane = Pane;
  private activeItem!: HTMLDivElement;
  constructor(props: TabsProps) {
    super(props);
    this.state = {
      activeKey: props.activeKey as string,
      slideStyle: { width: 0, left: 0 },
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps: TabsProps) {
    if (nextProps.children !== this.props.children) {
      this.calcSlideStyle();
    }
    if (nextProps.activeKey !== this.props.activeKey) {
      this.setState({
        activeKey: nextProps.activeKey as string,
      }, () => {
        this.calcSlideStyle();
      });
    }
  }
  componentDidMount() {
    this.calcSlideStyle();
  }
  calcSlideStyle() {
    const { slideStyle } = this.state;
    if (this.activeItem && this.props.type === 'line') {
      const styl = {
        width: this.activeItem.clientWidth,
        left: this.activeItem.offsetLeft,
      };
      this.setState({
        slideStyle: { ...slideStyle, ...styl },
      });
    }
  }
  onTabClick(item: React.ReactElement, key: string, e: React.MouseEvent) {
    const { onTabClick } = this.props;
    this.setState({
      activeKey: key,
    }, () => {
      this.calcSlideStyle();
      onTabClick && onTabClick(key, item, e);
    });
  }
  render() {
    const { prefixCls, className, children, type, activeKey, onTabClick, ...elementProps } = this.props;
    const cls = classnames(prefixCls, className, {
      [`${prefixCls}-${type}`]: type,
    });
    return (
      <div className={cls} {...elementProps}>
        <div className={`${prefixCls}-bar`}>
          <div className={`${prefixCls}-nav`}>
            {React.Children.map(children as React.ReactElement[], (item: React.ReactElement, key: number) => {
              if (!item) {
                return null;
              }
              const props: any = {
                key,
                className: classnames(`${prefixCls}-item`, {
                  active: item.key === this.state.activeKey,
                  disabled: item.props.disabled,
                }),
                children: item.props.label,
              };
              if (!item.props.disabled) {
                props.onClick = this.onTabClick.bind(this, item, item.key as string);
              }
              return (
                <div
                  ref={(node) => {
                    if (node && item.key === this.state.activeKey) {
                      this.activeItem = node;
                    }
                  }}
                  {...props}
                />
              );
            })}
          </div>
          <div style={this.state.slideStyle} className={`${prefixCls}-slide`}/>
        </div>
        {React.Children.map(children, (item: any) => {
          if (!item || this.state.activeKey !== item.key) {
            return null;
          }
          return React.cloneElement(item, Object.assign({}, item.props, {}));
        })}
      </div>
    );
  }
}
