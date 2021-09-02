import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Wrapper from '../Wrapper';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px 16px',
    color: theme.palette.common.white,
    fontSize: '1.6rem',
    fontWeight: theme.typography.fontWeightRegular,
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
    },
  },
  second: {
    padding: '9px 16px',
    color: theme.palette.primary.main,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.common.white,
    },
    [theme.breakpoints.up('lg')]: {
      '&:hover': {
        color: theme.palette.primary.dark,
        borderColor: theme.palette.primary.dark,
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
    },
  },
}));

const MediumBtn = forwardRef(
  ({ level, className, href, children, ...props }, ref) => {
    const classes = useStyles();
    return (
      <Wrapper href={href}>
        <Button
          ref={ref}
          href={href}
          variant={level === 'second' ? 'outlined' : 'contained'}
          color={level === 'primary' ? 'primary' : 'inherit'}
          className={clsx(
            classes.root,
            {
              [classes.primary]: level === 'primary',
              [classes.second]: level === 'second',
              [classes.third]: level === 'third',
              [classes.fourth]: level === 'fourth',
            },
            className
          )}
          {...props}
        >
          {children}
        </Button>
      </Wrapper>
    );
  }
);

MediumBtn.displayName = 'MediumBtn';

MediumBtn.defaultProps = {
  level: '',
  className: null,
  href: undefined,
};

MediumBtn.propTypes = {
  level: propTypes.string,
  className: propTypes.string,
  href: propTypes.oneOfType([propTypes.string, propTypes.object]),
  children: propTypes.any.isRequired,
};

export default MediumBtn;
