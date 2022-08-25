import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CreatePost, EditPost } from "../src/components/organisms";

const Post = () => {
  const router = useRouter();
  const [pageState, setPageState] = useState(router.query?.action);

  useEffect(() => {
    setPageState(router.query?.action);
  }, [router.query?.action]);
  return pageState === "create" ? (
    <CreatePost />
  ) : pageState === "edit" ? (
    <EditPost />
  ) : (
    <div>Post</div>
  );
};

export default Post;
