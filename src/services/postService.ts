import type { Post, PostPayload,} from "../types/post.types";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getPosts(): Promise<Post[]> {
  const response = await fetch(`${BASE_URL}/posts`);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data: Post[] = await response.json();

  return data;
}

export async function getPost(id: number): Promise<Post> {
  const response = await fetch(`${BASE_URL}/posts/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }

  const data: Post = await response.json();

  return data;
}

export async function createPost(post: PostPayload): Promise<Post> 
{
  const response = await fetch(`${BASE_URL}/posts`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(post),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to create post");
  }

  const data: Post = await response.json();

  return data;
}

export async function updatePost( id: number, post: PostPayload): Promise<Post> 
{
  const response = await fetch(`${BASE_URL}/posts/${id}`,
    {
      method: "PATCH",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(post),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update post");
  }

  const data: Post = await response.json();

  return data;
}

export async function deletePost(id: number): Promise<void> 
{
  const response = await fetch(`${BASE_URL}/posts/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete post");
  }
}