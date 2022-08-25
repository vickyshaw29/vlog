import React, { useState } from "react";
import { Grid,Typography ,useMediaQuery,useTheme,Button} from "@mui/material";
import { Input } from "../../atoms";
import { useRouter } from "next/router";
import { useMutation } from "../../../../components/generated/nextjs";

const EditPost = () => {
  const router = useRouter();
  const theme=useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const { mutate: UpdatePost, result } = useMutation.PostUpdate();
  const [postState, setPostState] = useState({
    postId:router.query.id,
    title: router.query.title,
    body: router.query.body,
  });
  const onChange = (e: any) => {
    setPostState({
      ...postState,
      [e.target.name]: e.target.value,
    });
  };

 const editPost=()=>{
  //@ts-ignore
  UpdatePost({input:postState});
  if(result){
    router.push("/home")
  }
 }
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
            
          >
            <Button variant="outlined" onClick={editPost}>Submit</Button>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EditPost;
