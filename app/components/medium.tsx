"use client";

interface MediumProps {
  url: string;
  title?: string;
  description?: string;
}

export function MediumComponent({ url, title, description }: MediumProps) {
  // Validate Medium URL
  const isValidMediumUrl = (url: string) => {
    return url.includes('medium.com');
  };

  if (!isValidMediumUrl(url)) {
    return (
      <div className="my-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
        <p className="text-red-800 dark:text-red-200">
          Invalid Medium URL. Please provide a valid Medium article URL (must contain 'medium.com').
        </p>
      </div>
    );
  }

  return (
    <div className="my-6">
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-lg mb-2">
              {title || "Medium Article"}
            </h3>
            {description && (
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                {description}
              </p>
            )}
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wide">
                Medium Publication
              </span>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
              >
                Read Article
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
