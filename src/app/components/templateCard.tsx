"use client";

import { ReactNode } from "react";

interface TemplateCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
}

export default function TemplateCard({ title, description, icon, color }: TemplateCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className={`h-32 flex items-center justify-center ${color}`}>
        <div className="text-5xl">{icon}</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href="#bundle"
          className="text-blue-600 font-medium hover:underline"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('bundle')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Get this template →
        </a>
      </div>
    </div>
  );
}
