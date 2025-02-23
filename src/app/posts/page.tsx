"use client";

import dynamic from "next/dynamic";

const LazyPostList = dynamic(
  () => import("@/components/table/PostList/PostList"),
  { ssr: false }
);

export default function PostsPage() {
  return <LazyPostList />;
}
