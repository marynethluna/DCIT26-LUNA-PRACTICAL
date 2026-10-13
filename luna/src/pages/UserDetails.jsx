import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { users } from "../data";
import ErrorMessage from "../components/ErrorMessage";
import Button from "../components/Button";

function UserDetails() {
  const { id } = useParams();
  const user = users.find((item) => item.id === Number(id));

  useEffect(() => {
    document.title = user
      ? `${user.name} | Team Directory`
      : "User Not Found | Team Directory";
  }, [user]);

  if (!user) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-12">
        <ErrorMessage message="The requested user does not exist." />
        <div className="mt-6">
          <Link to="/users">
            <Button>Back to Users</Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/users"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back to Users
        </Link>

        <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl font-bold text-blue-600">
            {user.name.charAt(0)}
          </div>

          <h1 className="mt-5 text-3xl font-bold text-gray-900">{user.name}</h1>

          <p className="mt-2 text-lg text-blue-600">{user.role}</p>

          <div className="mt-8 space-y-4 border-t border-gray-200 pt-6">
            <div>
              <p className="text-sm text-gray-500">User ID</p>
              <p className="font-medium text-gray-900">{user.id}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="break-words font-medium text-gray-900">
                {user.email}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Company</p>
              <p className="font-medium text-gray-900">{user.company}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Role</p>
              <p className="font-medium text-gray-900">{user.role}</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default UserDetails;
