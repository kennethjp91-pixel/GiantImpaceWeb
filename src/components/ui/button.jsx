import clsx from "clsx";

export function Button({ className, variant = "default", size = "md", ...props }) {
  const base =
    "inline-flex items-center justify-center font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    default: "bg-purple-600 hover:bg-purple-700 text-white",
    outline: "border border-gray-700 text-white hover:bg-gray-800",
    ghost: "text-white hover:bg-gray-800",
  };
  const sizes = {
    sm: "h-9 px-3 rounded-lg text-sm",
    md: "h-11 px-5 rounded-xl text-base",
    lg: "h-12 px-6 rounded-2xl text-lg",
  };
  return <button className={clsx(base, variants[variant], sizes[size], className)} {...props} />;
}

export default Button;
