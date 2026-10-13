import { Link } from "react-router-dom";

function About() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            About the Project
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            About Team Directory
          </h1>

          <p className="mt-5 leading-7 text-gray-600">
            The Team Directory App is a simple web application that helps users
            browse team members, search for people, and view their profile
            information in one place.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-gray-900">Features</h2>

          <ul className="mt-4 list-inside list-disc space-y-3 text-gray-600">
            <li>Browse team members and their information</li>
            <li>Search users by name, email, company, or role</li>
            <li>View individual user profiles</li>
            <li>Save favorite team members</li>
            <li>Navigate between pages using React Router</li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold text-gray-900">
            Technologies Used
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            This project uses React, React Router, Vite, and Tailwind CSS.
          </p>

          <Link
            to="/users"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Explore Team Members
          </Link>
        </section>
      </div>
    </main>
  );
}

export default About;
