import React from 'react';
import { baseStyles } from '../../resources/theme';
import { useDispatch } from 'react-redux';
import { Button, Modal, TextField, Typography } from '@material-ui/core';
import { resetSignIn, signInSuccess } from '../../store/reducer/slices/authSlice';
import classNames from 'classnames';

interface MyProps {
  display: boolean;
}

const LoginModal: React.FC<MyProps> = (props) => {
  const classes = baseStyles();
  const dispatch = useDispatch();

  return (
    <Modal
      open={props.display}
      onClose={() =>
        dispatch(resetSignIn())
      }
      style={{ top: '50%', left: '50%' }}
    >
      <div className={classNames(classes.modalBody, classes.paper, 'login--modal')}>
        <Typography>LOGIN</Typography>
        <div className={'modal-text'}>
          <TextField id="username-email--input" label="Username or Email" variant="outlined" autoFocus={true}/>
        </div>
        <div className={'modal-text'}>
          <TextField id="password--input" label="Password" type="password" variant="outlined"/>
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            dispatch(signInSuccess({ userName: 'Billy', token: 'is logged in' }))
          }
        >
          SUBMIT
        </Button>
      </div>
    </Modal>
  );
};

export default LoginModal;