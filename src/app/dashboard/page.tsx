import dynamic from "next/dynamic";
import { Box } from "@mui/material";
import PostList from "@/components/PostList/PostList";

const LazyUserTable = dynamic(
  () => import("@/components/table/UserTable/UserTable"),
  { ssr: false }
);

export default function DashboardPage() {
  return (
    <Box>
      <LazyUserTable />
      <Box mt={2}>
        <PostList />
        <div>hi</div>
      </Box>
    </Box>
  );
}
