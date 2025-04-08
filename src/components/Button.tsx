interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export function Button({ className = "", children, ...props }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors hover:bg-darkgrey-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
