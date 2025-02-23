"use client";

import dynamic from "next/dynamic";
import { Box } from "@mui/material";

const LazyUserTable = dynamic(
  () => import("@/components/table/UserTable/UserTable"),
  { ssr: false }
);
const LazyPostList = dynamic(
  () => import("@/components/table/PostList/PostList"),
  { ssr: false }
);

export default function MainPage() {
  return (
    <Box>
      <LazyUserTable />
      <Box mt={2}>
        <LazyPostList />
      </Box>
    </Box>
  );
}
