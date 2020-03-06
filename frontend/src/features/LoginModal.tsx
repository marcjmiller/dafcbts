import React from 'react';
import { useStyles } from '../resources/theme';
import { useDispatch } from 'react-redux';
import { Button, Modal, TextField } from '@material-ui/core';
import { resetSignIn, signInSuccess } from '../store/reducer/slices/authSlice';
import classNames from 'classnames';


interface MyProps {
  display: boolean;
}

const LoginModal: React.FC<MyProps> = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Modal
      open={props.display}
      onClose={() => dispatch(resetSignIn())}
      style={{ top: '50%', left: '50%' }}
    >
      <div className={classNames(classes.modalBody, classes.paper, 'login--modal')}>
        <div className={'modal-text'}>
          <TextField id="username-email--input" label="Username or Email" variant="outlined"/>
        </div>
        <div className={'modal-text'}>
          <TextField id="password--input" label="Password" type="password" variant="outlined"/>
        </div>
        <Button variant="contained" color="primary"
                onClick={() => dispatch(signInSuccess({ userName: 'Billy', token: 'is logged in' }))}>
          Login
        </Button>
      </div>
    </Modal>
  );
};

export default LoginModal;