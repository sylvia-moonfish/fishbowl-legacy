import { useRouter } from "next/router";

import React from "react";

const NotFound = (props) => {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/");
  }, []);

  return <div />;
};

export default NotFound;
