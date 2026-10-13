import { Link } from 'react-router-dom';
import Button from '../components/Button';

function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 dark:bg-slate-950">
      <section className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-700">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          Your people, organized
        </p>

        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 sm:text-5xl">
          Meet Your <span className="block text-blue-600 dark:text-blue-400">Team Directory</span>
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Find your teammates, explore their roles, and discover which companies they belong to,
          all in one convenient place.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/users">
            <Button label="Explore Users" variant="primary">
              Explore Users
            </Button>
          </Link>

          <Link to="/about">
            <Button label="Learn More" variant="primary">
              Learn More
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
