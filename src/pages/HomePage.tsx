import { Link } from "react-router";

function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-3xl">
        

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
          Learning React by working with a real API.
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Explore posts and users from JSONPlaceholder while
          learning React, TypeScript, API fetching, routing and
          Tailwind CSS.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            to="/posts"
            className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
          >
            View Posts
          </Link>

          <Link
            to="/users"
            className="rounded-lg border border-gray-300 px-5 py-3 font-medium text-gray-700 hover:bg-gray-100"
          >
            View Users
          </Link>
        </div>
      </div>
    </main>
  );
}

export default HomePage;