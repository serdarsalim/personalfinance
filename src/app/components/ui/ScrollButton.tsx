"use client";

import { ReactNode } from 'react';

interface ScrollButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  offset?: number; // Add this new optional prop
}

export default function ScrollButton({ href, children, className, offset = 0 }: ScrollButtonProps) {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        const element = document.getElementById(href.replace('#', ''));
        if (element) {
          // Get the element's position and apply offset
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          // Scroll to the adjusted position
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }}
      className={className}
    >
      {children}
    </a>
  );
}