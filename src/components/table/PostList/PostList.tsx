"use client";

import React from "react";
import { Box, Paper, Skeleton, Typography } from "@mui/material";
import { usePosts } from "@/hooks/usePosts";

const PostList: React.FC = () => {
  const { data: posts, isLoading, isError } = usePosts();

  if (isLoading) {
    return (
      <Paper sx={{ padding: 2 }}>
        <Skeleton height={60} />
        <Skeleton height={60} />
        <Skeleton height={60} />
        <Skeleton height={60} />
      </Paper>
    );
  }

  if (isError) {
    return (
      <Box sx={{ textAlign: "center", color: "red" }}>
        <Typography variant="h6">Failed to load posts</Typography>
      </Box>
    );
  }

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Latest Posts
      </Typography>
      {posts?.map((post) => (
        <Box
          key={post.id}
          sx={{
            marginBottom: 2,
            padding: 2,
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        >
          <Typography variant="h6">{post.title}</Typography>
          <Typography variant="body2" color="textSecondary">
            {post.body}
          </Typography>
        </Box>
      ))}
    </Paper>
  );
};

export default PostList;
