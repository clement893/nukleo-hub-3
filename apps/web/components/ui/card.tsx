import { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export function Card({ title, description, children }: CardProps) {
  return (
    <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow duration-200">
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      {children}
    </div>
  );
}

