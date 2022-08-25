import { NextPage } from "next";
import { useEffect } from "react";
import {
  AuthProviders,
  useWunderGraph,
  withWunderGraph,
} from "../components/generated/nextjs";
import { useRouter } from "next/router";
import { Button, Grid } from "@mui/material";

const JobsPage: NextPage = () => {
  const router = useRouter();
  const { user, login, logout } = useWunderGraph();
  const onClick = () => {
    if (user === null || user === undefined) {
      login(AuthProviders.github);
    } else {
      logout();
    }
  };
  useEffect(() => {
    if (user) {
      router.push({ pathname: "/home" });
    }
  }, [user]);
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: 200 }}
    >
      <Grid item>
        <Button onClick={onClick} variant="outlined">
          Login Using Github
        </Button>
      </Grid>
    </Grid>
  );
};

export default withWunderGraph(JobsPage);
