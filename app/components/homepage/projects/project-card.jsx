// @flow strict

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const PLACEHOLDER = "/png/placeholder.png";

function ProjectCard({ project }) {
  return (
    <div className="relative rounded-lg bg-[#0d1224] w-full h-full flex flex-col">
      {/* Project Image */}
      <div className="relative w-full h-36 sm:h-44 md:h-48 lg:h-56 overflow-hidden rounded-t-lg">
        <Image
          src={project.image ? project.image : PLACEHOLDER}
          alt={project.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 460px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1224] via-[#0d1224]/40 to-transparent"></div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-grow px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-5">
        {/* Project Name */}
        <h3 className="text-[#16f2b3] text-base sm:text-lg lg:text-xl font-semibold mb-1.5 sm:mb-2 truncate">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-[11px] sm:text-xs lg:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
          {project.tools.map((tool, i) => (
            <span
              key={i}
              className="text-[9px] sm:text-[10px] lg:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-[#1a1443] text-violet-300 border border-violet-500/20"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {project.code && (
            <Link
              href={project.code}
              target="_blank"
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-[#1a1443] text-white text-[11px] sm:text-xs lg:text-sm font-medium border border-violet-500/30 transition-all duration-300 hover:bg-violet-600 hover:border-violet-500 active:scale-95 sm:hover:scale-105 no-underline"
            >
              <FaGithub className="text-xs sm:text-sm lg:text-base" />
              GitHub
            </Link>
          )}
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-[11px] sm:text-xs lg:text-sm font-medium transition-all duration-300 hover:opacity-90 active:scale-95 sm:hover:scale-105 no-underline"
            >
              <FaExternalLinkAlt className="text-[10px] sm:text-xs lg:text-sm" />
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
