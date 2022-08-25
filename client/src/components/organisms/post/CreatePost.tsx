import React, { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Input } from "../../atoms";
import { useMediaQuery, useTheme } from "@mui/material";
import { useEffect } from "react";
import { useMutation } from "../../../../components/generated/nextjs";
import { useRouter } from "next/router";

const CreatePosts = () => {
  const theme = useTheme();
  const router=useRouter();
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const { mutate: CreatePost, result } = useMutation.CreatePost();
  const [postState, setPostState] = useState({
    title: "",
    body: "",
  });
  const onChange = (e: any) => {
    setPostState({
      ...postState,
      [e.target.name]: e.target.value,
    });
  };
  console.log(result);
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "70vh" }}
    >
      <Grid
        item
        container
        direction="column"
        sx={{ maxWidth: !md ? "30%" : "90%" }}
      >
        <Grid item>
          <Input
            name="title"
            label="title"
            value={postState.title}
            onChange={onChange}
          />
        </Grid>
        <Grid item>
          <Input
            name="body"
            label="body"
            value={postState.body}
            onChange={onChange}
          />
        </Grid>
        <Grid item sx={{ mt: 1 }}>
          <Typography
            align="center"
            onClick={() =>{
              CreatePost({
                input: { title: postState.title, body: postState.body },
              });
              router.push("/");
            } }
          >
            <Button variant="outlined">Submit</Button>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CreatePosts;
