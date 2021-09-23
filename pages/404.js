import { useRouter } from "next/router";
import * as React from "react";

export default function NotFound(props) {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/");
  }, []);

  return <div />;
}
