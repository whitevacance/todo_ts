import React from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Wrapper from '../Wrapper';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '13px 16px',
    fontSize: '1.6rem',
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightMedium,
    boxShadow: 'none !important',
    textTransform: 'capitalize',
    '&:hover, &:focus': {
      boxShadow: 'none !important',
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up('lg')]: {
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
      '&$noLink:hover': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  second: {
    padding: '12px 16px',
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.white,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.common.white,
    },
    [theme.breakpoints.up('lg')]: {
      '&:hover': {
        color: theme.palette.primary.dark,
        borderColor: theme.palette.primary.dark,
      },
      '&$noLink:hover': {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.common.white,
      },
    },
  },
  third: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up('lg')]: {
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
      },
      '&$noLink:hover': {
        backgroundColor: theme.palette.secondary.main,
      },
    },
  },
  fourth: {
    color: theme.palette.grey[700],
    backgroundColor: theme.palette.grey[50],
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[50],
    },
    [theme.breakpoints.up('lg')]: {
      '&:hover': {
        backgroundColor: '#e0e0e0',
      },
      '&$noLink:hover': {
        backgroundColor: theme.palette.grey[50],
      },
    },
  },
  noLink: {
    cursor: 'default',
  },
}));

const DefaultBtn = ({
  level,
  className,
  href,
  noLink,
  children,
  nativeType,
  ...props
}) => {
  const classes = useStyles();
  return (
    <Wrapper href={href}>
      <Button
        type={nativeType}
        variant={level === 'second' ? 'outlined' : 'contained'}
        color={level === 'primary' ? 'primary' : 'inherit'}
        disableRipple={noLink === true}
        className={clsx(
          classes.root,
          {
            [classes.primary]: level === 'primary',
            [classes.second]: level === 'second',
            [classes.third]: level === 'third',
            [classes.fourth]: level === 'fourth',
          },
          className,
          noLink ? classes.noLink : null
        )}
        {...props}
      >
        {children}
      </Button>
    </Wrapper>
  );
};

DefaultBtn.defaultProps = {
  level: 'primary',
  className: null,
  noLink: null,
  href: undefined,
  nativeType: undefined,
};

DefaultBtn.propTypes = {
  level: propTypes.string,
  className: propTypes.string,
  noLink: propTypes.bool,
  href: propTypes.oneOfType([propTypes.string, propTypes.object]),
  children: propTypes.any.isRequired,
  nativeType: propTypes.string,
};

export default DefaultBtn;
