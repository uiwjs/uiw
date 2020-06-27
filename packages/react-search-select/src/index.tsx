import React from 'react';
import Loader from '@uiw/react-loader';
import Dropdown from '@uiw/react-dropdown';
import Icon from '@uiw/react-icon';
import Menu from '@uiw/react-menu';
import Input from '@uiw/react-input';
import { IProps } from '@uiw/utils';

export interface SearchSelectProps
  extends IProps,
    Omit<
      React.SelectHTMLAttributes<HTMLSelectElement>,
      | 'size'
      | 'onSelect'
      | 'onMouseEnter'
      | 'defaultValue'
      | 'value'
      | 'onChange'
    > {
  size?: 'large' | 'default' | 'small';
  loading: boolean;
  isOpen?: boolean;
  showSearch?: boolean;
  allowClear: boolean;
  defaultValue?: string | number;
  value?: string | number;
  option: {
    label: string;
    value: string | number;
    key: any;
    [propName: string]: any;
  }[];
  onSelect?: (value: string | number) => void;
  onSearch?: (value: string) => void;
  onChange?: (value: string) => void;
}

export interface MenuItemData {
  label: string;
  value: string | number;
  [keyName: string]: any;
}

export interface SearchSelectState {
  innerIsOpen: boolean;
  selectedValue?: string | number;
  searchLoading: boolean;
  selectIconType: string;
  selectedLabel: string;
}

export default class SearchSelect extends React.Component<
  SearchSelectProps,
  SearchSelectState
> {
  public static defaultProps: SearchSelectProps = {
    allowClear: false,
    disabled: false,
    size: 'default',
    option: [],
    loading: false,
  };

  private divRef = React.createRef<HTMLDivElement>();

  state: SearchSelectState = {
    innerIsOpen: false,
    selectedValue: this.props.value,
    searchLoading: false,
    selectIconType: '',
    selectedLabel: '',
  };

  UNSAFE_componentWillReceiveProps(nextProps: SearchSelectProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        selectedValue: nextProps.value,
      });
    }
  }

  componentDidMount() {
    const { defaultValue, option } = this.props;
    if (defaultValue) {
      const defaultMenuItem = option.find(
        (menuItem: MenuItemData) => defaultValue === menuItem.value,
      );
      this.setState({
        selectedValue: defaultValue,
        selectedLabel: defaultMenuItem ? defaultMenuItem.label : '',
      });
    }
  }

  onVisibleChange(isOpen: boolean) {
    this.setState({ innerIsOpen: isOpen });
  }

  // 渲染icon
  renderSelectIcon = (type: string) => {
    const { allowClear } = this.props;
    const { selectedValue } = this.state;
    let selectIconType;
    if (type === 'enter' && allowClear && selectedValue) {
      selectIconType = 'close';
    } else {
      selectIconType = '';
    }
    this.setState({ selectIconType });
  };

  // handle change
  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onSearch, showSearch } = this.props;
    let innerIsOpen;
    const value = e.target.value;
    if (value) {
      innerIsOpen = true;
    } else {
      innerIsOpen = false;
    }
    this.setState({
      innerIsOpen,
      selectedLabel: value,
      selectIconType: showSearch && value ? 'loading' : '',
    });
    showSearch && onSearch && onSearch(value);
    this.handleSelectChange(value);
  };

  handleSelectChange(value: any) {
    const { onChange } = this.props;
    onChange && onChange(value);
  }

  handleItemClick(item: MenuItemData) {
    this.setState({
      selectedValue: item.value,
      selectedLabel: item.label,
      innerIsOpen: false,
    });
    this.props.onSelect && this.props.onSelect(item.value);
    // 支持form组件
    this.handleSelectChange(item.value);
  }

  // click
  // 清除选中的值
  resetSelectedValue = () => {
    this.setState({
      selectedValue: '',
      selectedLabel: '',
      selectIconType: '',
      innerIsOpen: false,
    });
    this.handleSelectChange('');
  };

  render() {
    const {
      prefixCls,
      className,
      size,
      style,
      isOpen,
      option,
      value,
      showSearch,
      loading,
      placeholder,
      disabled,
      ...others
    } = this.props;
    const {
      innerIsOpen,
      selectedValue,
      selectIconType,
      selectedLabel,
    } = this.state;
    return (
      <Dropdown
        trigger="focus"
        onVisibleChange={this.onVisibleChange.bind(this)}
        isOpen={innerIsOpen}
        disabled={option && option.length > 0 ? false : true}
        menu={
          <Loader loading={loading}>
            <Menu
              bordered
              style={{
                minHeight: 25,
                maxHeight: 280,
                overflowY: 'scroll',
                width: this.divRef.current
                  ? this.divRef.current.offsetWidth
                  : 'auto',
              }}
            >
              {option &&
                option.map((item, idx) => {
                  const active = selectedValue === item.value;
                  return (
                    <Menu.Item
                      active={active}
                      key={idx}
                      text={item.label}
                      onClick={this.handleItemClick.bind(this, item)}
                    />
                  );
                })}
            </Menu>
          </Loader>
        }
        style={{ marginTop: 5 }}
        {...others}
      >
        <div
          ref={this.divRef}
          onMouseOver={() => this.renderSelectIcon('enter')}
          onMouseLeave={() => this.renderSelectIcon('leave')}
          style={style}
        >
          <Input
            readOnly={!showSearch}
            size={size}
            disabled={disabled}
            onChange={this.handleInputChange}
            value={selectedLabel}
            placeholder={placeholder}
            addonAfter={
              (selectIconType === 'close' ||
                (selectIconType === 'loading' && loading)) && (
                <Icon
                  type={selectIconType}
                  spin={loading && selectIconType === 'loading'}
                  onClick={this.resetSelectedValue}
                />
              )
            }
          />
        </div>
      </Dropdown>
    );
  }
}
