import React from 'react';
import classnames from 'classnames';
import { IProps, HTMLDivProps } from '@uiw/utils';
import './style/index.less';

export interface SliderProps extends IProps, Omit<HTMLDivProps, 'onChange'> {
  value?: number | number[];
  min?: number;
  max?: number;
  marks?:
    | boolean
    | {
        [key: number]: {
          style?: React.CSSProperties;
          label?: React.ReactNode;
        };
      };
  dots?: boolean;
  range?: boolean;
  vertical?: boolean;
  step?: number;
  disabled?: boolean;
  tooltip?: boolean;
  progress?: boolean | string;
  renderMarks?: (value: number) => JSX.Element;
  onChange?: (value: number | number[]) => void;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface SliderState {
  value: number[];
}

export default class Slider extends React.Component<SliderProps, SliderState> {
  public static defaultProps: SliderProps = {
    prefixCls: 'w-slider',
    value: 0,
    min: 0,
    max: 100,
    dots: false,
    step: 1,
    disabled: false,
    progress: true,
    tooltip: false,
  };
  public state: SliderState;
  constructor(props: SliderProps) {
    super(props);
    this.state = {
      value: (Array.isArray(this.props.value)
        ? props.value
        : [props.value]) as SliderState['value'],
    };
  }
  private indexBar!: number;
  private bar = React.createRef<HTMLDivElement>();
  private slider = React.createRef<HTMLDivElement>();
  private startX!: number;
  private value!: number | number[];
  private barWidth!: number;
  private barOffsetLeft!: number;
  private move?: boolean;
  componentDidMount() {
    const { value } = this.props;
    this.setState({
      value: (Array.isArray(value) ? value : [value]) as SliderState['value'],
    });
  }
  UNSAFE_componentWillReceiveProps(nextPros: SliderProps) {
    if (nextPros.value !== this.props.value) {
      this.setState({
        value: (Array.isArray(nextPros.value)
          ? nextPros.value
          : [nextPros.value]) as SliderState['value'],
      });
    }
  }
  removeEvent() {
    window.removeEventListener('mousemove', this.onDragging, false);
    window.removeEventListener('mouseup', this.onDragEnd, false);
  }
  onHandleBtnDown(idx: number, env: React.MouseEvent<HTMLElement>) {
    const { disabled, vertical } = this.props;
    if (disabled) {
      return;
    }
    this.indexBar = idx;
    this.move = true;
    this.startX = env[vertical ? 'clientY' : 'clientX'];
    if (this.bar.current) {
      this.barWidth = this.bar.current[
        vertical ? 'clientHeight' : 'clientWidth'
      ];
      this.barOffsetLeft = this.bar.current[
        vertical ? 'offsetTop' : 'offsetLeft'
      ];
    }
    const val = this.state.value;
    if (Array.isArray(this.props.value)) {
      this.barWidth =
        (this.indexBar === 1 && val[1] > val[0]) ||
        (this.indexBar !== 1 && val[0] > val[1])
          ? this.barWidth + this.barOffsetLeft
          : this.barOffsetLeft;
    }
    window.addEventListener('mousemove', this.onDragging, true);
    window.addEventListener('mouseup', this.onDragEnd, true);
  }
  onDragging = (
    env: MouseEvent | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (!this.move) {
      return;
    }
    const { vertical } = this.props;
    const val = this.state.value;
    const value = this.getWidthToValue(
      env[vertical ? 'clientY' : 'clientX'] - this.startX + this.barWidth,
    );
    if (value !== this.value) {
      val[this.indexBar] = value;
      const barStyl = this.getStyle(val);
      if (this.bar.current) {
        this.bar.current.style[vertical ? 'top' : 'left'] = barStyl.left;
        this.bar.current.style[vertical ? 'bottom' : 'right'] = barStyl.right;
      }
      this.onChange(val);
      this.value = value;
    }
  };
  onDragEnd = () => {
    this.move = undefined;
    this.removeEvent();
  };
  getWidthToValue(width: number) {
    const { step, max, min, vertical } = this.props;

    const equal = ((max as number) - (min as number)) / (step as number);
    let percent = 0;
    if (this.slider.current) {
      percent =
        (width /
          this.slider.current[vertical ? 'clientHeight' : 'clientWidth']) *
        100;
    }

    if (percent <= 0) {
      percent = 0;
    }
    if (percent >= 100) {
      percent = 100;
    }

    const num = equal * (percent / 100) + 0.5;
    const numFloor = Math.floor(num);
    const value = numFloor * (step as number) + (min as number);
    return value;
  }
  getValueToPercent(value: number) {
    const { min, max } = this.props;
    return (
      ((value - (min as number)) * 100) / ((max as number) - (min as number))
    );
  }
  getLabelValue(value: number) {
    const { marks, renderMarks } = this.props;
    if (marks && marks !== true && marks[value] && marks[value].label) {
      return marks[value].label;
    } else if (
      marks &&
      marks !== true &&
      marks[value] &&
      typeof marks[value] === 'string'
    ) {
      return marks[value];
    } else if (
      renderMarks &&
      typeof renderMarks === 'function' &&
      renderMarks(value)
    ) {
      return renderMarks(value);
    }
    return value;
  }
  onChange(value: number[]) {
    value = this.getRangeValue(value);
    this.setState({ value }, this.handleChange.bind(this));
  }
  handleChange() {
    const { onChange } = this.props;
    const { value } = this.state;
    onChange && onChange(value.length === 1 ? value[0] : value);
  }
  onClickMark(evn: React.MouseEvent<HTMLElement>) {
    const { vertical } = this.props;
    if (this.move !== undefined) {
      return;
    }
    const markOffset = this.slider.current!.getBoundingClientRect() as DOMRect;
    const value = this.getWidthToValue(
      evn[vertical ? 'clientY' : 'clientX'] - markOffset[vertical ? 'y' : 'x'],
    );
    this.onChange(this.getRangeValue(value));
  }
  getRangeValue(val: number | number[]) {
    if (!Array.isArray(this.props.value)) {
      return Array.isArray(val) ? val : [val];
    }
    const { value } = this.state;
    const val1 = value[0];
    const val2 = value[1];
    if ((val1 < val2 && val1 > val) || (val1 > val2 && val1 < val)) {
      value[0] = val as number;
    }
    if ((val1 < val2 && val2 < val) || (val1 > val2 && val2 > val)) {
      value[1] = val as number;
    }

    if (val1 > val && val2 < val) {
      const half = val2 + (val1 - val2) / 2;
      if (half >= val) {
        value[1] = val as number;
      }
      if (half < val) {
        value[0] = val as number;
      }
    }
    if (val2 > val && val1 < val) {
      const half = val1 + (val2 - val1) / 2;
      if (half >= val) {
        value[0] = val as number;
      }
      if (half < val) {
        value[1] = val as number;
      }
    }
    return value;
  }
  stepArray() {
    const { min, max, step } = this.props;
    const equal = ((max as number) - (min as number)) / (step as number);
    const stepWidth =
      (100 * (step as number)) / ((max as number) - (min as number));
    const result = [0];
    for (let i = 1; i < equal; i += 1) {
      result.push(i * stepWidth);
    }
    result.push(100);
    return result;
  }
  getStyle(value?: number[]) {
    value = value || this.state.value;
    const barStyl = { left: '0%', right: '100%' };
    if (!Array.isArray(this.props.value)) {
      barStyl.right = `${100 - this.getValueToPercent(value[0])}%`;
    } else {
      const leftValue = value[0] > value[1] ? value[1] : value[0];
      const rightValue = value[0] > value[1] ? value[0] : value[1];
      barStyl.left = `${this.getValueToPercent(leftValue)}%`;
      barStyl.right = `${100 - this.getValueToPercent(rightValue)}%`;
    }
    return barStyl;
  }
  render(): JSX.Element {
    const {
      prefixCls,
      className,
      value,
      disabled,
      max,
      min,
      dots,
      step,
      marks,
      renderMarks,
      tooltip,
      vertical,
      progress,
      onChange,
      ...other
    } = this.props;
    const barStyl = this.getStyle();
    other.onClick = this.onClickMark.bind(this);
    if (disabled) {
      delete other.onClick;
    }
    return (
      <div
        ref={this.slider}
        className={classnames(prefixCls, className, {
          disabled,
          [`${prefixCls}-with-marks`]: marks,
          [`${prefixCls}-vertical`]: vertical,
        })}
        {...other}
      >
        <div
          className={classnames(`${prefixCls}-bar`)}
          style={{
            [vertical ? 'top' : 'left']: barStyl.left,
            [vertical ? 'bottom' : 'right']: barStyl.right,
            ...(progress !== true
              ? { backgroundColor: progress || 'initial' }
              : {}),
          }}
          ref={this.bar}
        />
        {this.state.value.map((item, idx) => {
          const lleftPostion = this.getValueToPercent(item);
          return (
            <div
              key={idx}
              className={classnames(`${prefixCls}-handle`)}
              onMouseDown={this.onHandleBtnDown.bind(this, idx)}
              style={{ [vertical ? 'top' : 'left']: `${lleftPostion}%` }}
            >
              {(tooltip || tooltip === false) && (
                <div
                  className={classnames(`${prefixCls}-tooltip`, {
                    open: tooltip,
                  })}
                >
                  {this.getLabelValue(item) as number}
                </div>
              )}
            </div>
          );
        })}
        {dots && (
          <div className={classnames(`${prefixCls}-dots`)}>
            {this.stepArray().map((val, idx) => {
              const stepValue = idx * (step as number) + (min as number);
              return (
                <div
                  key={idx}
                  style={{
                    [vertical ? 'top' : 'left']: `${val}%`,
                  }}
                  className={classnames(`${prefixCls}-mark`, {
                    'no-marks': marks && marks !== true && !marks[stepValue],
                  })}
                >
                  {marks === true && (
                    <div> {this.getLabelValue(stepValue)} </div>
                  )}
                  {marks !== true && marks && marks[stepValue] && (
                    <div style={marks[stepValue].style}>
                      {this.getLabelValue(stepValue) as number}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
