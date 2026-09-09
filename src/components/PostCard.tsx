import { Link } from "react-router";

import type { Post } from "../types/post.types";

interface PostCardProps {
  post: Post;
}

function PostCard({
  post,
}: PostCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <p className="mb-2 text-sm font-medium text-blue-600">
        Post #{post.id}
      </p>

      <h2 className="mb-3 text-xl font-semibold capitalize text-gray-900">
        {post.title}
      </h2>

      <p className="mb-6 text-gray-600">
        {post.body}
      </p>

      <div className="flex flex-wrap gap-4">
        <Link
          to={`/posts/${post.id}`}
          className="font-medium text-blue-600 hover:text-blue-800"
        >
          Read
        </Link>

        <Link
          to={`/posts/${post.id}/edit`}
          className="font-medium text-amber-600 hover:text-amber-800"
        >
          Edit
        </Link>

        <Link
          to={`/posts/${post.id}/delete`}
          className="font-medium text-red-600 hover:text-red-800"
        >
          Delete
        </Link>
      </div>
    </div>
  );
}

export default PostCard;