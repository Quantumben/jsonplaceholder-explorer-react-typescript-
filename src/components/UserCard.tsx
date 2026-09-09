import type { User } from "../types/user.types";

interface UserCardProps {
  user: User;
}

function UserCard({ user }: UserCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-600">
        {user.name.charAt(0)}
      </div>

      <h2 className="text-xl font-semibold text-gray-900">
        {user.name}
      </h2>

      <p className="text-sm text-gray-500">
        @{user.username}
      </p>

      <div className="mt-4 space-y-2 text-sm text-gray-600">
        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <p>
          <strong>Phone:</strong> {user.phone}
        </p>

        <p>
          <strong>City:</strong> {user.address.city}
        </p>

        <p>
          <strong>Company:</strong> {user.company.name}
        </p>
      </div>
    </div>
  );
}

export default UserCard;