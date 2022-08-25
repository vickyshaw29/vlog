import React, { useEffect } from "react";
import { Header } from "../../molecules";
import { useWunderGraph } from "../../../../components/generated/nextjs";
import { useRouter } from "next/router";

const Layout = (props: any) => {
  const { user, login, logout } = useWunderGraph();
  const router = useRouter();
  useEffect(() => {
    if (user === null) {
      router.push("/");
    }
  }, [user]);
  return (
    <div className="layout">
      <Header />
      {props?.children}
    </div>
  );
};

export default Layout;
