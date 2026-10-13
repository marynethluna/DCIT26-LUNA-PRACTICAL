import { Link } from 'react-router-dom';
import Button from '../components/Button';

function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-6 py-12 dark:bg-slate-950">
      <section className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <p className="text-7xl font-extrabold text-blue-600 dark:text-blue-400">404</p>
        <h1 className="mt-4 text-2xl font-bold text-slate-900 dark:text-slate-100">Page Not Found</h1>
        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
          The page you are looking for does not exist.
        </p>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/">
            <Button label="Back to Home" variant="primary">
              Back to Home
            </Button>
          </Link>
          <Link to="/users">
            <Button label="Browse Users" variant="danger">
              Browse Users
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default NotFound;
