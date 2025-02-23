import { USERS_API, POSTS_API } from "./apiEndPionts";
import { User } from "@/types/user";
import { Post } from "@/types/post";

export const fetchUsers = async (searchQuery: string): Promise<User[]> => {
  try {
    const response = await fetch(USERS_API.SEARCH(searchQuery));

    if (!response.ok) {
      throw new Error(`Failed to fetch users: ${response.statusText}`);
    }

    const data = await response.json();

    const users: User[] = data.map((user: User) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      company: {
        name: user.company.name,
      },
    }));

    return users;
  } catch (error) {
    throw new Error(
      `Error fetching users: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
};

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch(POSTS_API.LIMIT(5));
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};
