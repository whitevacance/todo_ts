import React from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Wrapper from '../Wrapper';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 14px',
    fontSize: '1.4rem',
    fontWeight: theme.typography.fontWeightRegular,
    boxShadow: 'none !important',
    textTransform: 'capitalize',
    borderColor: theme.palette.grey[400],
    '&:hover, &:focus': {
      boxShadow: 'none !important',
      backgroundColor: theme.palette.grey[50],
    },
  },
  third: {
    border: '0 none',
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up('lg')]: {
      '&:hover, &:focus': {
        backgroundColor: theme.palette.secondary.dark,
      },
    },
  },
  fourth: {
    border: '0 none',
    color: theme.palette.grey[700],
    backgroundColor: theme.palette.grey[50],
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[50],
    },
    [theme.breakpoints.up('lg')]: {
      '&:hover, &:focus': {
        backgroundColor: '#e0e0e0',
      },
    },
  },
  fifth: {
    color: theme.palette.text.secondary,
    borderColor: theme.palette.grey[600],
    backgroundColor: theme.palette.common.white,
  },
}));

const XsmallBtn = ({ level, className, href, children, ...props }) => {
  const classes = useStyles();
  return (
    <Wrapper href={href}>
      <Button
        component={href ? 'a' : 'button'}
        variant={
          level === 'third'
            ? 'contained'
            : level === 'fourth'
            ? 'contained'
            : 'outlined'
        }
        disableRipple
        className={clsx(
          classes.root,
          {
            [classes.third]: level === 'third',
            [classes.fourth]: level === 'fourth',
            [classes.fifth]: level === 'fifth',
          },
          className
        )}
        {...props}
      >
        {children}
      </Button>
    </Wrapper>
  );
};

XsmallBtn.defaultProps = {
  level: null,
  className: null,
  href: undefined,
};

XsmallBtn.propTypes = {
  level: propTypes.string,
  className: propTypes.string,
  href: propTypes.oneOfType([propTypes.string, propTypes.object]),
  children: propTypes.any.isRequired,
};

export default XsmallBtn;
