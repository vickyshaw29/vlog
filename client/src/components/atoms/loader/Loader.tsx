import React from 'react';
import {makeStyles} from '@mui/styles';
import {CircularProgress, Backdrop} from '@mui/material';

const useStyles = makeStyles((theme: any) => ({
  backdrop: {
    zIndex: theme?.zIndex?.drawer + 1,
    color: '#fff',
  },
}));

export default function Loader() {
  const classes = useStyles();

  return (
    <Backdrop open={true} className={classes.backdrop}>
      <CircularProgress color="primary" />
    </Backdrop>
  );
}
