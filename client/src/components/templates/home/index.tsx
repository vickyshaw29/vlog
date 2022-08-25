import React from "react";
import { Grid } from "@mui/material";
import HomeStyles from "./HomeStyles";
import { PostPreview } from "../../molecules";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

const Home = (props: any) => {
  const router = useRouter();
  const classes = HomeStyles();
  return (
    <Grid container className={classes.root} sx={{ p: 2 }} spacing={2}>
      <Grid item container justifyContent="flex-end">
        <Grid item>
          <Button
            variant="outlined"
            onClick={() =>
              router.push({ pathname: "/post", query: { action: "create" } })
            }
          >
            Create
          </Button>
        </Grid>
      </Grid>
      {props?.posts?.map((post: any) => {
        return (
          <Grid item key={post?.id} lg={3} md={6} sm={6} xs={12}>
            <PostPreview dataToShow={post} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Home;
