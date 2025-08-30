"use client";

import React from "react";
import { metaData, socialLinks } from "app/lib/config";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4] text-center">
      <time>© {YEAR}</time>{" "}
      <a
        className="no-underline text-blue-900 dark:text-blue-200"
        href={socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
      >
        {metaData.title}
      </a>
      <br />
      <span className="text-sm text-gray-600 dark:text-gray-400 mt-2 block">
        Built with{" "}
        <a
          href="https://vercel.com/templates/portfolio/nextfolio-a-simple-next-js-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Nextfolio Template
        </a>
      </span>
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  );
}
