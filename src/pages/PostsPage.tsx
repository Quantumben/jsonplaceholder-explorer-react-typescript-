import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { getPosts } from "../services/postService";
import type { Post } from "../types/post.types";
import { Link } from "react-router";

function PostsPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        async function fetchPosts() {
            try {
                const data = await getPosts();

                setPosts(data);
            } catch (error) {
                setError("Something went wrong while fetching posts.");
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <div className="py-20 text-center text-gray-600">
                Loading posts...
            </div>
        );
    }

    if (error) {
        return (
            <div className="py-20 text-center text-red-600">
                {error}
            </div>
        );
    }

    return (
        <main className="mx-auto max-w-6xl px-6 py-10">
            <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                        Posts
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Posts fetched from JSONPlaceholder.
                    </p>
                </div>

                <Link
                    to="/posts/create"
                    className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
                >
                    + Create Post
                </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <PostCard
                        key={post.id}
                        post={post}
                    />
                ))}
            </div>
        </main>
    );
}

export default PostsPage;