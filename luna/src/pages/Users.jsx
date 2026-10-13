import { useEffect, useState } from "react";
import { users } from "../data";
import UserCard from "../components/UserCard";
import Loader from "../components/Loader";
import Button from "../components/Button";

function Users() {
  // Store the search input
  const [searchTerm, setSearchTerm] = useState("");

  // Store the IDs of favorite users
  const [favorites, setFavorites] = useState([]);

  // Track whether the page is loading
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading the users
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  // Search users by name, email, company, or role
  const filteredUsers = users.filter((user) => {
    const search = searchTerm.toLowerCase();

    return (
      user.name.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search) ||
      user.company.toLowerCase().includes(search) ||
      user.role.toLowerCase().includes(search)
    );
  });

  // Add or remove a user from favorites
  const toggleFavorite = (userId) => {
    setFavorites((previousFavorites) =>
      previousFavorites.includes(userId)
        ? previousFavorites.filter((id) => id !== userId)
        : [...previousFavorites, userId],
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Page Heading */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Our People
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Team Directory
          </h1>

          <p className="mt-3 text-gray-600">
            Browse team members and explore their profiles.
          </p>
        </div>

        {/* Search and Favorites Summary */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="w-full sm:max-w-md">
            <label
              htmlFor="user-search"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Search users
            </label>

            <input
              id="user-search"
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by name, email, company, or role..."
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div className="rounded-lg border border-gray-200 bg-white px-4 py-3">
            <p className="text-sm text-gray-500">Your Favorites</p>
            <p className="text-xl font-bold text-blue-600">
              {favorites.length} saved
            </p>
          </div>
        </div>

        {/* User List */}
        {isLoading ? (
          <Loader message="Loading team members..." />
        ) : (
          <>
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing {filteredUsers.length} of {users.length} users
              </p>

              {searchTerm && (
                <Button variant="secondary" onClick={() => setSearchTerm("")}>
                  Clear Search
                </Button>
              )}
            </div>

            {filteredUsers.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredUsers.map((user) => (
                  <div key={user.id} className="relative">
                    <UserCard user={user} />

                    {/* Favorite Button */}
                    <button
                      type="button"
                      onClick={() => toggleFavorite(user.id)}
                      aria-pressed={favorites.includes(user.id)}
                      aria-label={
                        favorites.includes(user.id)
                          ? `Remove ${user.name} from favorites`
                          : `Add ${user.name} to favorites`
                      }
                      className={`absolute right-4 top-4 rounded-full border px-3 py-2 text-sm font-medium transition ${
                        favorites.includes(user.id)
                          ? "border-yellow-300 bg-yellow-100 text-yellow-800"
                          : "border-gray-200 bg-white text-gray-600 hover:bg-yellow-50"
                      }`}
                    >
                      {favorites.includes(user.id) ? "★ Saved" : "☆ Favorite"}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center">
                <p className="text-lg font-semibold text-gray-800">
                  No users found
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  Try another name, email, company, or role.
                </p>

                <div className="mt-5">
                  <Button variant="secondary" onClick={() => setSearchTerm("")}>
                    Clear Search
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}

export default Users;
