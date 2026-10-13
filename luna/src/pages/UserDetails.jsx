import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { users } from '../data/users';
import ErrorMessage from '../components/ErrorMessage';
import Button from '../components/Button';

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const foundUser = users.find((item) => item.id === Number(id));
    setUser(foundUser || null);
  }, [id]);

  useEffect(() => {
    document.title = user ? user.name : 'User not found';
  }, [user]);

  if (!user) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-12">
        <ErrorMessage message="User not found." />
        <div className="mt-6">
          <Link to="/users">
            <Button label="Back" variant="primary">
              Back
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-3xl">
        <Link to="/users" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
          ← Back
        </Link>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl font-bold text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">
            {user.name.charAt(0)}
          </div>

          <h1 className="mt-5 text-3xl font-bold text-slate-900 dark:text-slate-100">{user.name}</h1>
          <p className="mt-2 text-lg text-blue-600 dark:text-blue-400">{user.role}</p>

          <div className="mt-8 space-y-4 border-t border-slate-200 pt-6 dark:border-slate-700">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
              <p className="font-medium text-slate-900 dark:text-slate-100">{user.email}</p>
            </div>

            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Company</p>
              <p className="font-medium text-slate-900 dark:text-slate-100">{user.company}</p>
            </div>

            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Role</p>
              <p className="font-medium text-slate-900 dark:text-slate-100">{user.role}</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default UserDetails;
