import { Link } from "react-router-dom";
import Button from "../components/Button";

function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left Side: Text */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Your people, organized
            </p>

            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              Meet Your
              <span className="block text-blue-600">Team Directory</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
              Find your teammates, explore their roles, and discover which
              companies they belong to, all in one convenient place.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/users">
                <Button>Explore Users</Button>
              </Link>

              <Link to="/about">
                <Button variant="secondary">Learn More</Button>
              </Link>
            </div>
          </div>

          {/* Right Side: Illustration */}
          <div className="rounded-3xl bg-blue-600 p-8 text-white shadow-xl sm:p-12">
            <div className="mb-8 text-6xl">👥</div>

            <h2 className="text-2xl font-bold">
              Better connections start here.
            </h2>

            <p className="mt-3 leading-7 text-blue-100">
              A simple way to browse team members and get the information you
              need.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-3xl font-bold">08</p>
                <p className="mt-1 text-sm text-blue-100">Sample Members</p>
              </div>

              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-3xl font-bold">24/7</p>
                <p className="mt-1 text-sm text-blue-100">Directory Access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Everything in One Place
            </h2>

            <p className="mt-3 text-gray-600">
              Find information about your team quickly and easily.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-xl border border-gray-200 p-6 transition hover:shadow-md">
              <div className="mb-4 text-3xl">🔎</div>

              <h3 className="text-lg font-semibold text-gray-900">
                Find Team Members
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Browse the directory to find names, email addresses, companies,
                and roles.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-xl border border-gray-200 p-6 transition hover:shadow-md">
              <div className="mb-4 text-3xl">👤</div>

              <h3 className="text-lg font-semibold text-gray-900">
                View User Profiles
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Open an individual profile to see a team member's details.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-xl border border-gray-200 p-6 transition hover:shadow-md">
              <div className="mb-4 text-3xl">🏢</div>

              <h3 className="text-lg font-semibold text-gray-900">
                Explore Companies
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                See which company each member belongs to and learn about their
                role in the team.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link to="/users">
              <Button>Browse All Users</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
