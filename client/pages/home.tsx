import React from "react";
import {
  withWunderGraph,
  useLiveQuery,
} from "../components/generated/nextjs";
import { HomeTemplate } from "../src/components/templates";
import { Loader } from "../src/components/atoms";

const Home = () => {
  //@ts-ignore
  const {result: { data }} = useLiveQuery.Posts();

  return (
    <div>
      {!data && <Loader />}
      <HomeTemplate posts={data?.wunderTest_getPosts} />
    </div>
  );
};

export default withWunderGraph(Home);
