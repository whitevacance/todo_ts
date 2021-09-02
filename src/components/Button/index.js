import React from 'react';
import propTypes from 'prop-types';
import Base from './Base';
import Default from './DefaultBtn';
import Medium from './MediumBtn';
import Small from './SmallBtn';
import Xsmall from './XsmallBtn';

// nativeType이란 submit과 같이 버튼 html 기본 타입
const Button = ({ type, children, nativeType, ...rest }) => {
  let Component = Default;
  if (type === 'medium') {
    Component = Medium;
  } else if (type === 'small') {
    Component = Small;
  } else if (type === 'xsmall') {
    Component = Xsmall;
  }
  const typesWithNativeType = { ...rest };
  if (nativeType) typesWithNativeType.type = nativeType;
  return <Component {...typesWithNativeType}>{children}</Component>;
};

Button.defaultProps = {
  type: 'default',
  nativeType: null,
};
Button.propTypes = {
  type: propTypes.oneOf(['default', 'medium', 'small', 'Xsmall']),
  children: propTypes.any.isRequired,
  nativeType: propTypes.string,
};
export default Button;

export { Base };
