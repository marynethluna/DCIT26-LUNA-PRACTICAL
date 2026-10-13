function ErrorMessage({
  message = "Something went wrong. Please try again.",
  onRetry,
}) {
  return (
    <div
      className="rounded-xl border border-red-200 bg-red-50 p-5 text-center"
      role="alert"
    >
      <div className="mb-2 text-2xl">⚠️</div>

      <h2 className="text-lg font-semibold text-red-700">
        Oops! Something went wrong.
      </h2>

      <p className="mt-2 text-sm text-red-600">{message}</p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
        >
          Try Again
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;
