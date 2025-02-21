import React from "react";

import ContentLayout from "@/modules/layout";

export default function Layout({children}: {children: React.ReactNode}) {
  return <ContentLayout>{children}</ContentLayout>;
}
