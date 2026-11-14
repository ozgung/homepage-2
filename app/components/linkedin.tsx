"use client";

interface LinkedInProps {
  url: string;
  title?: string;
  description?: string;
}

export function LinkedInComponent({ url, title, description }: LinkedInProps) {
  // Validate LinkedIn article URL
  const isValidLinkedInUrl = (url: string) => {
    return url.includes('linkedin.com') && url.includes('/pulse/');
  };

  if (!isValidLinkedInUrl(url)) {
    return (
      <div className="my-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
        <p className="text-red-800 dark:text-red-200">
          Invalid LinkedIn URL. Please provide a valid LinkedIn article URL (must contain 'linkedin.com' and '/pulse/').
        </p>
      </div>
    );
  }

  return (
    <div className="my-6">
      <div className="bg-sky-50 dark:bg-sky-900/20 rounded-lg p-6 border border-sky-200 dark:border-sky-700 hover:shadow-lg transition-shadow">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-[#0A66C2] rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-lg">in</span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-lg mb-2">
              {title || "LinkedIn Article"}
            </h3>
            {description && (
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                {description}
              </p>
            )}
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#0A66C2] dark:text-sky-400 uppercase tracking-wide font-medium">
                LinkedIn Article
              </span>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-[#0A66C2] hover:bg-[#004182] text-white text-sm font-medium rounded-md transition-colors"
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
