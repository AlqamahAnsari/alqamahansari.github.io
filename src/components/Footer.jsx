import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6">
      <p className="text-gray-700 dark:text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} Mohammad Alquamah Ansari. All rights reserved.
      </p>
    </footer>
  );
}
