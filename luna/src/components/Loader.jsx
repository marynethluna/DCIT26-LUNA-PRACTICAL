function Loader({ message = "Loading..." }) {
  return (
    <div
      className="flex flex-col items-center justify-center py-12"
      role="status"
      aria-live="polite"
    >
      {/* Loading Spinner */}
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"></div>

      {/* Loading Message */}
      <p className="mt-4 text-sm font-medium text-gray-600">{message}</p>
    </div>
  );
}

export default Loader;
