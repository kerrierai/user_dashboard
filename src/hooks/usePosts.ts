"use client";

import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/services/keys";
import { fetchPosts } from "@/services/services";

export function usePosts() {
  return useQuery({
    queryKey: [QUERY_KEYS.POSTS],
    queryFn: fetchPosts,
  });
}
