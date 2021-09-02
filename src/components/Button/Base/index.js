import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import propTypes from 'prop-types';
import Wrapper from '../Wrapper';

const Base = ({ href, children, ...rest }) => (
  <Wrapper href={href}>
    <ButtonBase {...rest}>{children}</ButtonBase>
  </Wrapper>
);
Base.propTypes = {
  href: propTypes.oneOfType([propTypes.string, propTypes.object]),
  children: propTypes.node,
};
Base.defaultProps = {
  href: undefined,
  children: undefined,
};
export default Base;
