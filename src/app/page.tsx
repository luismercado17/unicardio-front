"use client";
import {useRouter} from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/users");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
  <div />
);
}
