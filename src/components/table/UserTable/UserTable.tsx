"use client";

import React from "react";
import {
  useMaterialReactTable,
  MaterialReactTable,
  MRT_ColumnDef,
  MRT_ToggleFullScreenButton,
  MRT_ToggleDensePaddingButton,
} from "material-react-table";
import { Box, Stack, Typography } from "@mui/material";
import SearchField from "../../common/SearchField/SearchField";
import { useUsers } from "../../../hooks/useUsers";
import { User } from "../../../types/user";

export default function UserTable() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const { data, error, isLoading } = useUsers(searchQuery);

  const columns: MRT_ColumnDef<User>[] = React.useMemo(
    () => [
      { accessorKey: "name", header: "Name" },
      { accessorKey: "email", header: "Email" },
      {
        accessorKey: "company.name",
        header: "Company Name",
        Cell: ({ row }) => <>{row.original.company.name}</>,
      },
    ],
    []
  );

  const tableInstance = useMaterialReactTable({
    columns,
    data: data ?? [],
    state: {
      showSkeletons: isLoading,
    },
    enablePagination: true,
    enableColumnActions: false,
    renderTopToolbar: ({ table }) => (
      <Stack
        p={2}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        flexWrap={{ xs: "wrap", sm: "nowrap" }}
      >
        <Typography variant="h5">Users</Typography>

        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          flexWrap={{ xs: "wrap", sm: "nowrap" }}
        >
          <SearchField
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <MRT_ToggleFullScreenButton table={table} />
          <MRT_ToggleDensePaddingButton table={table} />
        </Stack>
      </Stack>
    ),
  });

  if (error) {
    return (
      <Box
        sx={{
          color: "red",
          textAlign: "center",
          padding: 2,
          fontSize: "1rem",
        }}
      >
        Error loading users: {(error as Error).message}
      </Box>
    );
  }

  return (
    <Box>
      <MaterialReactTable table={tableInstance} />
    </Box>
  );
}
