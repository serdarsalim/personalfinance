// src/app/components/CustomerReviews.tsx
"use client";

import React from "react";
import { ReviewSchema } from "./SchemaMarkup";

interface Review {
  id: string;
  customerName: string;
  rating: number; // 1-5
  reviewText: string;
  date: string; // ISO date string 
  productName: string;
  avatar?: string; // Optional avatar image
}

interface CustomerReviewsProps {
  reviews: Review[];
  title?: string;
}

export default function CustomerReviews({ reviews, title = "What Our Customers Say" }: CustomerReviewsProps) {
  return (
    <section className="bg-white py-16">
      {/* Add schema markup for each review */}
      {reviews.map(review => (
        <ReviewSchema
          key={review.id}
          productName={review.productName}
          reviewerName={review.customerName}
          reviewRating={review.rating}
          reviewBody={review.reviewText}
          datePublished={review.date}
        />
      ))}
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map(review => (
            <div key={review.id} className="bg-gray-50 p-6 rounded-lg shadow-md">
              {/* Star rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-700 italic mb-4">"{review.reviewText}"</p>
              
              <div className="flex items-center mt-4">
                {review.avatar ? (
                  <img 
                    src={review.avatar} 
                    alt={review.customerName} 
                    className="w-10 h-10 rounded-full mr-3" 
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                    {review.customerName.charAt(0).toUpperCase()}
                  </div>
                )}
                <div>
                  <h4 className="font-semibold text-gray-900">{review.customerName}</h4>
                  <p className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}