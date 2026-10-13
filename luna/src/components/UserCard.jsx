import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {/* User Avatar */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-600">
        {user.name.charAt(0)}
      </div>

      {/* User Information */}
      <h2 className="text-lg font-semibold text-gray-900">{user.name}</h2>

      <p className="mt-1 text-sm text-blue-600">{user.role}</p>

      <div className="mt-4 space-y-2 text-sm text-gray-600">
        <p>
          <span className="font-medium text-gray-800">Email:</span> {user.email}
        </p>

        <p>
          <span className="font-medium text-gray-800">Company:</span>{" "}
          {user.company}
        </p>
      </div>

      {/* View Details Link */}
      <Link
        to={`/users/${user.id}`}
        className="mt-5 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
}

export default UserCard;
