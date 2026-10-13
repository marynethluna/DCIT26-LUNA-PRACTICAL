import { useEffect, useState } from 'react';
import { users } from '../data/users';
import UserCard from '../components/UserCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import Button from '../components/Button';

function Users({ favorites, onToggleFavorite }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    document.title = `Users (${filteredUsers.length})`;
  }, [filteredUsers.length]);

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Our People
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">
            Team Directory
          </h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Browse team members and explore their profiles.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="w-full sm:max-w-md">
            <label htmlFor="user-search" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
              Search users
            </label>
            <input
              id="user-search"
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by name..."
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-blue-400 dark:focus:ring-blue-500/20"
            />
          </div>

          <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm dark:border-slate-700 dark:bg-slate-900">
            <p className="text-slate-500 dark:text-slate-300">Favorites: {favorites.length}</p>
          </div>
        </div>

        {isLoading ? (
          <Loader message="Loading..." />
        ) : (
          <>
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Showing {filteredUsers.length} users
              </p>

              {searchTerm && (
                <Button
                  label="Clear Search"
                  variant="danger"
                  onClick={() => setSearchTerm('')}
                >
                  Clear Search
                </Button>
              )}
            </div>

            {filteredUsers.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredUsers.map((user) => (
                  <UserCard
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    company={user.company}
                    role={user.role}
                    isFavorite={favorites.includes(user.id)}
                    onToggleFavorite={onToggleFavorite}
                  />
                ))}
              </div>
            ) : (
              <ErrorMessage message="No users found." />
            )}
          </>
        )}
      </div>
    </main>
  );
}

export default Users;
