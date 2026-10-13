function Button({
  label,
  onClick,
  variant = 'primary',
  children,
  type = 'button',
  disabled = false,
  className = '',
}) {
  const baseStyles =
    'rounded-lg px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:cursor-not-allowed disabled:opacity-50';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',
    danger: 'bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={label || (typeof children === 'string' ? children : undefined)}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`.trim()}
    >
      {children || label}
    </button>
  );
}

export default Button;
