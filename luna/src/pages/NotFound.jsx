import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-6 py-12">
      <section className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
        <p className="text-7xl font-extrabold text-blue-600">404</p>

        <h1 className="mt-4 text-2xl font-bold text-gray-900">
          Page Not Found
        </h1>

        <p className="mt-3 leading-7 text-gray-600">
          Sorry, the page you're looking for doesn't exist or may have been
          moved.
        </p>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Back to Home
          </Link>

          <Link
            to="/users"
            className="rounded-lg bg-gray-200 px-5 py-3 font-medium text-gray-800 transition hover:bg-gray-300"
          >
            Browse Users
          </Link>
        </div>
      </section>
    </main>
  );
}

export default NotFound;
