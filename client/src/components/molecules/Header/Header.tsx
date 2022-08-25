import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Avatar,
  Popover,
  IconButton,
} from "@mui/material";
import HeaderStyles from "./HeaderStyles";
import { useWunderGraph } from "../../../../components/generated/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";
const Header = () => {
  const router = useRouter();
  const { logout,fetchUser } = useWunderGraph();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [user,setUser] = React.useState<any>(null);
  //@ts-ignore
  // const user =typeof window !== "undefined"? JSON?.parse(localStorage?.getItem("user") ): null;
  const classes = HeaderStyles();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const onClick = () => {
    logout();
    router.push("/");
    // localStorage.removeItem("user");
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  
  //@ts-ignore`
  useEffect(()=>{
   const getUserDetails=async()=>{
    const userDetails=await fetchUser();
    setUser(userDetails)
   }
   getUserDetails();
  },[user])
  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        color="primary"
        elevation={3}
        className={classes.appbar}
      >
        <Toolbar disableGutters style={{ minHeight: 54.2 }}>
          <Typography sx={{ ml: 1 }}>WunderTest</Typography>
          <Grid item container justifyContent="flex-end">
            {user && (
                <Grid item>
                  <IconButton onClick={(e: any) => handleClick(e)}>
                    <Avatar src={user?.avatarUrl} sx={{ mr: 1 }} />
                  </IconButton>
                </Grid>
              )}
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2, cursor: "pointer" }} onClick={onClick}>
          Logout
        </Typography>
      </Popover>
    </React.Fragment>
  );
};
export default Header;
