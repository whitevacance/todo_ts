import React from 'react';
import propTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MediumBtn from 'components/Button/MediumBtn';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    transformStyle: 'flat',
  },
  dialog: {
    textAlign: 'center',
    '& .MuiPaper-rounded': {
      borderRadius: '2px',
    },
  },
  maxPaper: {
    maxWidth: '364px',
    paddingTop: 30,
    borderRadius: '14px !important',
  },
  btnColumn: {
    flexWrap: 'wrap !important',
    '& > button': {
      flexBasis: '100% !important',
    },
    '& > button:not(:first-child)': {
      margin: '10px auto 0 !important',
    },
  },
});

const DialogTitle = withStyles((theme) => ({
  root: {
    fontSize: '1.6rem',
    padding: '0 42px 10px',
    '&, & *': {
      fontWeight: theme.typography.fontWeightBold,
    },
    margin: 0,
  },
}))((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h2">{children}</Typography>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    padding: '0 42px 30px !important',
    whiteSpace: 'pre-wrap',
    '& *': {
      lineHeight: '1.4',
    },
  },
}))(MuiDialogContent);

const DialogActions = withStyles({
  root: {
    padding: '0 40px 30px',
    justifyContent: 'space-between',
    '& > button': {
      margin: '0 auto',
      flexBasis: '130px',
      boxShadow: 'none',
    },
    '& > button:not(:first-child)': {
      marginLeft: '20px',
    },
  },
})(MuiDialogActions);

const Alert = ({ open, onClose, body, top, onConfirm }) => {
  const classes = useStyles();
  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="alert"
      open={open}
      PaperProps={{
        elevation: 0,
        style:
          typeof top === 'number'
            ? {
                position: 'absolute',
                top,
                marginLeft: 'auto',
                marginRight: 'auto',
              }
            : {},
      }}
      fullWidth
      className={classes.dialog}
      classes={{
        root: classes.root,
        paper: classes.maxPaper,
      }}
    >
      {body.title === undefined || body.title === null ? null : (
        <DialogTitle onClose={onClose}>{body.title}</DialogTitle>
      )}
      <DialogContent>
        <Typography variant="h3" component="p">
          {body.content}
        </Typography>
      </DialogContent>
      <DialogActions className={body.btnColumn ? classes.btnColumn : null}>
        {body.btnColumn ? (
          <>
            <MediumBtn
              autoFocus
              fullWidth
              level="primary"
              disableRipple
              onClick={() => {
                if (onConfirm) {
                  onConfirm();
                }
                onClose();
              }}
            >
              {body.confirm || '확인'}
            </MediumBtn>
            {body.cancel && (
              <MediumBtn
                fullWidth
                level="third"
                disableRipple
                onClick={onClose}
              >
                {body.cancel}
              </MediumBtn>
            )}
          </>
        ) : (
          <>
            {body.cancel && (
              <MediumBtn level="second" disableRipple onClick={onClose}>
                {body.cancel}
              </MediumBtn>
            )}
            <MediumBtn
              autoFocus
              level="primary"
              disableRipple
              onClick={() => {
                if (onConfirm) {
                  onConfirm();
                }
                onClose();
              }}
            >
              {body.confirm || '확인'}
            </MediumBtn>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
};

Alert.defaultProps = {
  open: false,
  body: {
    title: null,
    content: 'initial message',
    btnColumn: false,
    confirm: '확인',
    cancel: '취소',
  },
  onConfirm: null,
  onClose: () => {},
  top: null,
};
Alert.propTypes = {
  open: propTypes.bool,
  body: propTypes.object,
  onClose: propTypes.func,
  onConfirm: propTypes.func,
  top: propTypes.number,
};
export default Alert;
