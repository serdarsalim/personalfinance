"use client";

import { useState } from 'react';

interface BlogArticleProps {
  title: string;
  date: string;
  views: string;
  likes: string;
  content: string;
}

export default function BlogArticle({ title, date, views, likes, content }: BlogArticleProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
      {/* Header - Always visible */}
      <div
        className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
              {title}
            </h2>
            <div className="flex items-center text-sm text-gray-500 space-x-4">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {date}
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {views} views
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {likes} likes
              </span>
            </div>
          </div>
          <div className="ml-4">
            <svg
              className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content - Expandable */}
      {isExpanded && (
        <div className="px-6 pb-6 border-t border-gray-100">
          <div className="pt-6 prose prose-lg max-w-none">
            {content.split('\n').map((line, index) => {
              // Skip empty lines
              if (!line.trim()) return null;

              // Handle numbered list items
              if (/^\d+\./.test(line.trim())) {
                const text = line.replace(/^\d+\.\s*/, '');
                const parts = text.split('**');
                return (
                  <div key={index} className="flex mb-3">
                    <span className="font-semibold text-blue-600 mr-3 mt-0.5">
                      {line.match(/^\d+/)?.[0]}.
                    </span>
                    <div className="text-gray-700 leading-relaxed">
                      {parts.map((part, partIndex) =>
                        partIndex % 2 === 1 ? (
                          <strong key={partIndex} className="font-semibold">{part}</strong>
                        ) : (
                          part
                        )
                      )}
                    </div>
                  </div>
                );
              }

              // Handle bold headers
              if (line.startsWith('**') && line.endsWith('**')) {
                return (
                  <h3 key={index} className="text-lg font-semibold text-gray-900 mb-3 mt-6">
                    {line.slice(2, -2)}
                  </h3>
                );
              }

              // Handle bold text within paragraphs
              if (line.includes('**')) {
                const parts = line.split('**');
                return (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {parts.map((part, partIndex) =>
                      partIndex % 2 === 1 ? (
                        <strong key={partIndex} className="font-semibold">{part}</strong>
                      ) : (
                        part
                      )
                    )}
                  </p>
                );
              }

              // Regular paragraphs
              return (
                <p key={index} className="text-gray-700 leading-relaxed mb-4">
                  {line}
                </p>
              );
            })}
          </div>

          {/* Call to action */}
          <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg border border-blue-200">
            <p className="text-center text-gray-700 mb-3">
              💡 <strong>Want to implement this strategy?</strong>
            </p>
            <div className="text-center">
              <a
                href="/app"
                className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
              >
                Try Simplify Budget Free
              </a>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}