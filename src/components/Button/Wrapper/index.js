import React from 'react';
import propTypes from 'prop-types';
import NextLink from 'next/link';

const Wrapper = ({ href, children }) =>
  href ? (
    <NextLink href={href} passHref>
      {children}
    </NextLink>
  ) : (
    children
  );

Wrapper.defaultProps = {
  href: undefined,
};
Wrapper.propTypes = {
  href: propTypes.oneOfType([propTypes.string, propTypes.object]),
  children: propTypes.node.isRequired,
};
export default Wrapper;
