import {
  useEffect,
  useState,
} from "react";

import {
  Link,
  useNavigate,
  useParams,
} from "react-router";

import Button from "../components/Button";

import {
  deletePost,
  getPost,
} from "../services/postService";

import type { Post } from "../types/post.types";

function DeletePostPage() {
  const { id } = useParams<{
    id: string;
  }>();

  const navigate = useNavigate();

  const [post, setPost] =
    useState<Post | null>(null);

  const [loading, setLoading] =
    useState<boolean>(true);

  const [deleting, setDeleting] =
    useState<boolean>(false);

  const [error, setError] =
    useState<string>("");

  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true);

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
            : "Unable to load post"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [id]);

  async function handleDelete() {
    try {
      if (!id) {
        return;
      }

      setDeleting(true);
      setError("");

      await deletePost(Number(id));

      navigate("/posts");
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unable to delete post"
      );
    } finally {
      setDeleting(false);
    }
  }

  if (loading) {
    return (
      <div className="py-20 text-center">
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

  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <div className="rounded-xl border border-red-200 bg-white p-8 shadow-sm">
        <p className="mb-3 font-semibold text-red-600">
          Delete Post
        </p>

        <h1 className="text-2xl font-bold capitalize text-gray-900">
          {post.title}
        </h1>

        <p className="mt-4 text-gray-600">
          Are you sure you want to delete this post?
          This action cannot be undone in a real application.
        </p>

        {error && (
          <div className="mt-6 rounded-lg bg-red-50 p-4 text-red-600">
            {error}
          </div>
        )}

        <div className="mt-8 flex gap-4">
          <Link
            to={`/posts/${post.id}`}
            className="rounded-lg border border-gray-300 bg-white px-5 py-3 font-medium text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </Link>

          <Button
            variant="danger"
            disabled={deleting}
            onClick={handleDelete}
          >
            {deleting
              ? "Deleting..."
              : "Delete Post"}
          </Button>
        </div>
      </div>
    </main>
  );
}

export default DeletePostPage;