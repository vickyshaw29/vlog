import React, { useState } from "react";
import {
  Card,
  Grid,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import PostPreviewStyles from "./PostPreviewStyles";
import { useRouter } from "next/router";
import { useMutation } from "../../../../components/generated/nextjs";

const PostPreview = ({ dataToShow }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { mutate: DeletePost, result } = useMutation.DeletePost();
  const classes = PostPreviewStyles();

  const handleDelete = (id: string) => {
    try {
      setLoading(true);
      DeletePost({ input: { postId: id } });
      if (result) {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <Card
      elevation={5}
      style={{ height: "100%" }}
      className={classes.cardContainer}
    >
      <Card
        className={classes.card}
        sx={{ minWidth: 275 }}
        style={{ height: "100%" }}
      >
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          className={classes.cardInner}
          direction="column"
          sx={{ p: 2 }}
        >
          <Grid item>
            <CardContent className={classes.title}>
              <Typography
                component="h2"
                align="center"
                className={classes.titleTxt}
                style={{ color: "#fff" }}
              >
                {dataToShow?.title}
              </Typography>
              <Typography
                variant="body2"
                component="h2"
                align="center"
                style={{ color: "#fff" }}
              >
                {dataToShow?.body}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item>
            <CardActions classes={{ spacing: classes.actionSpacer }}>
              <Button
                className={classes.saveButton}
                onClick={() =>
                  router.push({
                    pathname: "/post",
                    query: {
                      action: "edit",
                      id: dataToShow?.id,
                      title: dataToShow?.title,
                      body: dataToShow?.body,
                    },
                  })
                }
              >
                <Typography>Edit</Typography>
              </Button>
              <Button
                className={classes.deleteButton}
                onClick={() => handleDelete(dataToShow?.id)}
              >
                <Typography>Delete</Typography>
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </Card>
  );
};

export default PostPreview;
