import { useState } from "react";
import { Link, useNavigate } from "react-router";

import PostForm from "../components/PostForm";
import { createPost } from "../services/postService";

import type { PostFormValues, PostPayload,} from "../types/post.types";

function CreatePostPage() {
  const navigate = useNavigate();

  const [submitting, setSubmitting] =
    useState<boolean>(false);

  const [error, setError] =
    useState<string>("");

  async function handleCreate(values: PostFormValues) 
  {
    try {
      setSubmitting(true);
      setError("");

      const payload: PostPayload = {
        title: values.title,
        body: values.body,
        userId: Number(values.userId),
      };

      const createdPost =
        await createPost(payload);

      console.log("Created post:",createdPost);

      navigate("/posts");
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong"
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <Link
        to="/posts"
        className="mb-6 inline-block text-blue-600 hover:text-blue-800"
      >
        ← Back to posts
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Create Post
        </h1>

        <p className="mt-2 text-gray-600">
          Add a new post using the JSONPlaceholder API.
        </p>
      </div>

      <PostForm
        submitText="Create Post"
        submitting={submitting}
        serverError={error}
        onSubmit={handleCreate}
      />
    </main>
  );
}

export default CreatePostPage;