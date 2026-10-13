import { Link } from 'react-router-dom';
import Button from '../components/Button';

function About() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl">
        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            About the Project
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">About Team Directory</h1>

          <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">
            The Team Directory App helps users browse teammates, search for people quickly, and view
            profile information in one simple place.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-slate-900 dark:text-slate-100">Features</h2>

          <ul className="mt-4 list-inside list-disc space-y-3 text-slate-600 dark:text-slate-300">
            <li>Browse team members and their details</li>
            <li>Search users by name</li>
            <li>View user profiles</li>
            <li>Save favorites</li>
            <li>Switch between light and dark mode</li>
          </ul>

          <div className="mt-8">
            <Link to="/users">
              <Button label="Explore Team Members" variant="primary">
                Explore Team Members
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;
