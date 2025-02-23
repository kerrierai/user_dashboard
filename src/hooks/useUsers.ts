import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@/services/services";
import { QUERY_KEYS } from "@/services/keys";

export function useUsers(searchQuery: string) {
  return useQuery({
    queryKey: [QUERY_KEYS.USERS, searchQuery],
    queryFn: () => fetchUsers(searchQuery),
  });
}
