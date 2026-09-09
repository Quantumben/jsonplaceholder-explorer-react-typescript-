import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { getPost } from "../services/postService";
import type { Post } from "../types/post.types";

function PostDetailsPage() {
    const { id } = useParams<{ id: string }>();

    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        async function fetchPost() {
            try {
                if (!id) {
                    return;
                }

                const data = await getPost(Number(id));

                setPost(data);
            } catch (error) {
                setError("Unable to fetch this post.");
            } finally {
                setLoading(false);
            }
        }

        fetchPost();
    }, [id]);

    if (loading) {
        return (
            <div className="py-20 text-center">
                Loading post...
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="py-20 text-center text-red-600">
                {error || "Post not found"}
            </div>
        );
    }

    return (
        <main className="mx-auto max-w-3xl px-6 py-12">
            <Link
                to="/posts"
                className="mb-6 inline-block text-blue-600 hover:text-blue-800"
            >
                ← Back to posts
            </Link>

            <article className="rounded-xl border bg-white p-8 shadow-sm">
                <p className="mb-3 text-sm font-semibold text-blue-600">
                    Post #{post.id}
                </p>

                <h1 className="text-3xl font-bold capitalize text-gray-900">
                    {post.title}
                </h1>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                    {post.body}
                </p>

                <div className="mt-8 flex gap-4 border-t pt-6">
                    <Link
                        to={`/posts/${post.id}/edit`}
                        className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
                    >
                        Edit Post
                    </Link>

                    <Link
                        to={`/posts/${post.id}/delete`}
                        className="rounded-lg bg-red-600 px-5 py-3 font-medium text-white hover:bg-red-700"
                    >
                        Delete Post
                    </Link>
                </div>
            </article>
        </main>
    );
}

export default PostDetailsPage;