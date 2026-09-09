import { Link } from "react-router";
import type { Post } from "../types/post.types";

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <p className="mb-2 text-sm font-medium text-blue-600">
        Post #{post.id}
      </p>

      <h2 className="mb-3 text-xl font-semibold capitalize text-gray-900">
        {post.title}
      </h2>

      <p className="mb-4 text-gray-600">
        {post.body}
      </p>

      <Link
        to={`/posts/${post.id}`}
        className="font-medium text-blue-600 hover:text-blue-800"
      >
        Read post →
      </Link>
    </div>
  );
}

export default PostCard;