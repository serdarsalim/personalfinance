import React from 'react';

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  organizationName: string;
  keywords: string[];
}

const ArticleSchema: React.FC<ArticleSchemaProps> = ({
  title,
  description,
  url,
  imageUrl,
  datePublished,
  dateModified,
  authorName,
  organizationName,
  keywords
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "image": {
      "@type": "ImageObject",
      "url": imageUrl,
      "width": 1200,
      "height": 630
    },
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": organizationName,
      "logo": {
        "@type": "ImageObject",
        "url": "https://simplifybudget.com/logo.png",
        "width": 40,
        "height": 40
      }
    },
    "keywords": keywords.join(", "),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default ArticleSchema;