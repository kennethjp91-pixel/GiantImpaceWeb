export function Card({ className = "", ...props }) {
    return <div className={`rounded-2xl border border-gray-800 bg-gray-900 ${className}`} {...props} />;
  }
  export function CardContent({ className = "", ...props }) {
    return <div className={`p-6 ${className}`} {...props} />;
  }
  