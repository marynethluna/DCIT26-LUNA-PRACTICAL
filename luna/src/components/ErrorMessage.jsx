function ErrorMessage({ message = 'Something went wrong.' }) {
  return (
    <div
      className="rounded-2xl border border-red-200 bg-red-50 p-5 text-center text-red-700 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-200"
      role="alert"
    >
      <p className="text-lg font-semibold">{message}</p>
    </div>
  );
}

export default ErrorMessage;
