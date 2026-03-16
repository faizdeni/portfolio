"use client";
// @flow strict

import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const PLACEHOLDER = "/png/placeholder.png";

const ProjectCard = ({ project }) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(prevState => !prevState);
  }
  const content = `${project.description}`;

  const shownContent = isExpanded? content: `${content.slice(0, 100)}...`;

  return (
    <div className="flex flex-col h-full p-4 md:p-6">
      {/* Project Name */}
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
        {project.name}
      </h3>


      {/* Role Badge */}
      {/*}
      <p className="text-xs sm:text-sm text-cyan-400 mb-3 md:mb-4">
        {project.role}
      </p>
      */}
    

      {/* Description */}
        <div className="text-gray-300 text-sm md:text-base mb-4 md:mb-6">
          {/*{project.description}*/}
          <p>{shownContent}</p>
          <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300" onClick={toggleExpansion}>
            {
              isExpanded ? " Show Less" : " Read More"
            }
        </button>
        </div>


      

      {/* Key Features */}
      <p className="font-medium text-green-300 text-sm md:text-base mb-4 md:mb-6 line-clamp-4">
        Key Features: {project.features}
      </p>

      {/* Tools */}
      <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
        {project.tools.map((tool, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 bg-violet-500/20 text-violet-300 rounded"
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Buttons section - at the bottom */}
      <div className="flex gap-3 mt-auto pt-4 border-t border-violet-500/20">
        {/* Code Button */}
        {project.code ? (
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-3 py-2 text-xs sm:text-sm rounded transition-colors duration-300 font-medium"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.605-2.665-.3-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Code
          </a>
        ) : (
          <button
            disabled
            className="flex-1 flex items-center justify-center gap-2 bg-gray-600 text-gray-400 px-3 py-2 text-xs sm:text-sm rounded font-medium cursor-not-allowed opacity-50"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.605-2.665-.3-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Code
          </button>
        )}

        {/* Demo Button */}
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-2 text-xs sm:text-sm rounded transition-colors duration-300 font-medium"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Demo
          </a>
        ) : (
          <button
            disabled
            className="flex-1 flex items-center justify-center gap-2 bg-gray-600 text-gray-400 px-3 py-2 text-xs sm:text-sm rounded font-medium cursor-not-allowed opacity-50"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Demo
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
