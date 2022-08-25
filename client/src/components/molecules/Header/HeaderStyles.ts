import { makeStyles } from "@mui/styles";

export default makeStyles((theme: any) => ({
  appbar: {
    Index: theme.zIndex.modal + 1,
    // boxShadow:' 0px 0.7px 0px #E5E9F2',
    // testing
    // backgroundColor: '#c2a688',
    zIndex: 1,
  },
  btn: {
    color: "#2c4c3b",
    fontWeight: 700,
    textTransform: "capitalize",
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    // marginTop: "1rem",
    minHeight: "31px",
    [theme.breakpoints.down("md")]: {
      marginBottom: "1.2em",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0.1em",
    },
  },
}));
