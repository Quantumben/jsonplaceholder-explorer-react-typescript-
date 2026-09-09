import { useEffect, useState,} from "react";

import {
  Link,
  useNavigate,
  useParams,
} from "react-router";

import PostForm from "../components/PostForm";

import { getPost, updatePost,} from "../services/postService";

import type { Post, PostFormValues, PostPayload,} from "../types/post.types";

function EditPostPage() {
  const { id } = useParams<{
    id: string;
  }>();

  const navigate = useNavigate();

  const [post, setPost] =
    useState<Post | null>(null);

  const [loading, setLoading] =
    useState<boolean>(true);

  const [submitting, setSubmitting] =
    useState<boolean>(false);

  const [error, setError] =
    useState<string>("");

  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true);
        setError("");

        if (!id) {
          throw new Error(
            "Post ID is missing"
          );
        }

        const data = await getPost(
          Number(id)
        );

        setPost(data);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Unable to fetch post"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [id]);

  async function handleUpdate(
    values: PostFormValues
  ) {
    try {
      if (!id) {
        return;
      }

      setSubmitting(true);
      setError("");

      const payload: PostPayload = {
        title: values.title,
        body: values.body,
        userId: Number(values.userId),
      };

      const updatedPost =
        await updatePost(
          Number(id),
          payload
        );

      console.log(
        "Updated post:",
        updatedPost
      );

      navigate(`/posts/${id}`);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unable to update post"
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className="py-20 text-center text-gray-600">
        Loading post...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="py-20 text-center text-red-600">
        {error || "Post not found"}
      </div>
    );
  }

  const initialValues: PostFormValues = {
    title: post.title,
    body: post.body,
    userId: String(post.userId),
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <Link
        to={`/posts/${post.id}`}
        className="mb-6 inline-block text-blue-600 hover:text-blue-800"
      >
        ← Back to post
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Edit Post
        </h1>

        <p className="mt-2 text-gray-600">
          Update post #{post.id}
        </p>
      </div>

      <PostForm
        initialValues={initialValues}
        submitText="Update Post"
        submitting={submitting}
        serverError={error}
        onSubmit={handleUpdate}
      />
    </main>
  );
}

export default EditPostPage;