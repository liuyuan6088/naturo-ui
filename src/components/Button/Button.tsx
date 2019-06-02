import * as React from 'react';
import cx from 'classnames';
import { IButtonProps } from './type';
import './index.less';

const defaultProps: IButtonProps = {
  prefixCls: `-btn`,
}
const Button: React.FC<IButtonProps> = ({
  prefixCls,
  children,
}) => {

  const classes = cx({
    [`${prefixCls}`]: true,
    // [`${prefixCls}-${type}`]: type,
    // [`${prefixCls}-${size}`]: size,
    // [`${prefixCls}-block`]: block,
    // [className]: className,
  });

  return (
    <button
      className={classes}
    >
      {children}
    </button>
  )
}

Button.defaultProps = defaultProps;

export default Button;
