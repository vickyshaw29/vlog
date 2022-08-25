import {makeStyles} from '@mui/styles';

export default makeStyles((theme: any) => ({
  input: {
    width: '95%',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    border: '1px solid #DFDFDF',
    borderRadius: '5px',
    // padding: '0 15px',
    paddingLeft:15,
    height: '40px',
    outline: 'none',
    marginTop: 5,

    '&::before': {
      borderBottom: 'unset',
    },

    '& .MuiInput-underline::before': {
      borderBottom: 'unset',
    },
  },
  editMode: {
    background: '#f5f5f5 0% 0% no-repeat padding-box !important',
    paddingBottom: 2,
    borderBottom: '1px solid #DFDFDF',
  },
  icon: {
    height: '1.1rem',
  },
  red: {
    color: "#E22626",
  },
  fieldHeading: {
    // font: "normal normal 600 14px/19px Roboto",
    // fontSize: 13,
    "& span": {
      color: "#E22626",
    },
  },
  errorMsg: {
    color: "#DF0E0E",
    // font: "normal normal 600 12px/16px Roboto;",
    margin: 0,
    paddingTop: 2,
  },
  error: {
    border: "1px solid #E22626 !important",
  },
}));
