import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { getUsers } from "../services/userService";
import type { User } from "../types/user.types";

function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const data = await getUsers();

        setUsers(data);
      } catch (error) {
        setError("Something went wrong while fetching users.");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading users...
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
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Users
        </h1>

        <p className="mt-2 text-gray-600">
          Meet our JSONPlaceholder users.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
          />
        ))}
      </div>
    </main>
  );
}

export default UsersPage;