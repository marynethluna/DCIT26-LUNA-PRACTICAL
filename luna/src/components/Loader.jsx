function Loader({ message = 'Loading...' }) {
  return (
    <div className="flex flex-col items-center justify-center py-12" role="status" aria-live="polite">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600 dark:border-slate-700 dark:border-t-blue-400" />
      <p className="mt-4 text-sm font-medium text-slate-600 dark:text-slate-300">{message}</p>
    </div>
  );
}

export default Loader;
