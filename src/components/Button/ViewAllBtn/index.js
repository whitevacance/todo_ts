import React, { forwardRef } from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 36,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2rem',
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.grey[100],
    borderRadius: 0,
    [theme.breakpoints.up('lg')]: {
      height: 28,
    },
  },
  label: {
    '&:after': {
      content: '""',
      display: 'inline-block',
      marginLeft: 6,
      width: 6,
      height: 6,
      borderLeft: `1px solid ${theme.palette.text.secondary}`,
      borderBottom: `1px solid ${theme.palette.text.secondary}`,
      transform: 'rotate(-45deg)',
    },
  },
}));
const ViewAllBtn = forwardRef(({ className, ...props }, ref) => {
  const classes = useStyles();
  return (
    <Button
      ref={ref}
      className={clsx(className, classes.root)}
      classes={{
        label: classes.label,
      }}
      {...props}
    >
      모두 보기
    </Button>
  );
});

ViewAllBtn.displayName = 'ViewAllBtn';

ViewAllBtn.defaultProps = {
  className: null,
  href: undefined,
};

ViewAllBtn.propTypes = {
  className: propTypes.string,
  href: propTypes.oneOfType([propTypes.string, propTypes.object]),
};
export default ViewAllBtn;
