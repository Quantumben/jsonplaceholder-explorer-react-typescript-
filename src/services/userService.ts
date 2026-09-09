import type { User } from "../types/user.types";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getUsers(): Promise<User[]> {
  const response = await fetch(`${BASE_URL}/users`);

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const data: User[] = await response.json();

  return data;
}