import React from 'react';
import './style/index.less';

export interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  icon?: React.ReactNode;
  size?: number | string;
  iconProps: React.SVGProps<SVGSVGElement>;
  /** 自定义描述内容 */
  description?: React.ReactNode;
}

const Empty = (props: EmptyProps) => {
  const {
    prefixCls = 'w-empty',
    className,
    icon,
    iconProps,
    size = 64,
    description = '暂无数据',
    children,
    ...other
  } = props;

  const cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  return (
    <div className={cls} {...other}>
      <div className={`${prefixCls}-icon`}>
        {icon ? (
          icon
        ) : (
          <svg viewBox="0 0 1024 1024" width={size} height={size} {...iconProps}>
            <path d="M20.48 860.16a491.52 102.4 0 1 0 983.04 0 491.52 102.4 0 1 0-983.04 0Z" fill="#F5F5F5" />
            <path d="M225.28 409.6l573.44-8.06912 112.78336 183.296H102.4z" fill="#C4C5C7" />
            <path
              d="M266.24 61.44h491.52a40.96 40.96 0 0 1 40.96 40.96v532.48a40.96 40.96 0 0 1-40.96 40.96H266.24a40.96 40.96 0 0 1-40.96-40.96V102.4a40.96 40.96 0 0 1 40.96-40.96z"
              fill="#F5F5F7"
            />
            <path
              d="M348.16 143.36h327.68a40.96 40.96 0 0 1 40.96 40.96v122.88a40.96 40.96 0 0 1-40.96 40.96H348.16a40.96 40.96 0 0 1-40.96-40.96V184.32a40.96 40.96 0 0 1 40.96-40.96zM327.68 409.6h368.64a20.48 20.48 0 0 1 0 40.96H327.68a20.48 20.48 0 0 1 0-40.96zM327.68 491.52h368.64a20.48 20.48 0 0 1 0 40.96H327.68a20.48 20.48 0 0 1 0-40.96z"
              fill="#EBECEC"
            />
            <path
              d="M673.44384 607.58016v13.43488c0 25.14944-20.0704 45.52704-44.8512 45.52704H382.95552l-2.2528-0.06144c-23.7568-1.16736-42.63936-21.07392-42.63936-45.4656v-13.45536c0-12.55424-10.0352-22.7328-22.44608-22.7328H102.4v250.30656C102.4 860.2624 122.49088 880.64 147.29216 880.64h719.31904c24.7808 0 44.89216-20.3776 44.89216-45.50656V584.82688H695.88992c-12.3904 0-22.44608 10.17856-22.44608 22.7328z"
              fill="#E0E0E0"
            />
          </svg>
        )}
      </div>
      {description && <div className={`${prefixCls}-description`}>{description}</div>}
      <div className={`${prefixCls}-footer`}>{children}</div>
    </div>
  );
};

export default Empty;
