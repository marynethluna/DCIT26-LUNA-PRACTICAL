import { Link } from 'react-router-dom';
import Button from './Button';

function UserCard({
  id,
  name,
  email,
  company,
  role,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">
          {name.charAt(0)}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{name}</h2>
          <p className="text-sm text-blue-600 dark:text-blue-400">{role}</p>
        </div>
      </div>

      <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
        <p>
          <span className="font-medium text-slate-800 dark:text-slate-200">Email:</span> {email}
        </p>
        <p>
          <span className="font-medium text-slate-800 dark:text-slate-200">Company:</span> {company}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          to={`/users/${id}`}
          className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          View Details
        </Link>

        <Button
          label={isFavorite ? 'Remove Favorite' : 'Add Favorite'}
          variant={isFavorite ? 'danger' : 'primary'}
          onClick={() => onToggleFavorite(id)}
        >
          {isFavorite ? 'Remove Favorite' : 'Add Favorite'}
        </Button>
      </div>
    </article>
  );
}

export default UserCard;
