"use client";

import dynamic from "next/dynamic";

const LazyUserTable = dynamic(
  () => import("@/components/table/UserTable/UserTable"),
  { ssr: false }
);

export default function UsersPage() {
  return <LazyUserTable />;
}
