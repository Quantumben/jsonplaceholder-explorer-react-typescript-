import { Link } from "react-router";

function NotFoundPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <p className="text-6xl font-bold text-blue-600">
          404
        </p>

        <h1 className="mt-4 text-3xl font-bold text-gray-900">
          Page not found
        </h1>

        <p className="mt-3 text-gray-600">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 text-white"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}

export default NotFoundPage;