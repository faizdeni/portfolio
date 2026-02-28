import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <div
      id="projects"
      className="relative z-50 my-8 md:my-12 lg:my-24 px-4 sm:px-6 lg:px-0"
    >
      <div className="relative z-10 mb-8 md:mb-12">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-3 py-2 text-sm sm:text-base md:px-5 md:py-3 md:text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-8 md:pt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              id={`glow-card-${index + 1}`}
              key={index}
              className="group relative rounded-xl p-[2px] transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.3),0_0_60px_rgba(6,182,212,0.15)]"
            >
              {/* Animated glowing border */}
              <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-violet-600 via-cyan-400 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[3px] bg-[length:300%_300%] animate-glow-border"></div>

              {/* Border gradient (visible on hover) */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600 via-cyan-400 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:300%_300%] animate-glow-border"></div>

              {/* Static subtle border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600/30 via-cyan-400/30 to-violet-600/30 opacity-100"></div>

              {/* Card content */}
              <div className="relative bg-[#0d1224] rounded-xl h-full z-10">
                <ProjectCard project={project} />
              </div>

              {/* Corner glow effects */}
              <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-20 h-20 md:w-32 md:h-32 bg-violet-500 rounded-full opacity-0 group-hover:opacity-20 blur-2xl md:blur-3xl transition-opacity duration-700 z-0"></div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-20 h-20 md:w-32 md:h-32 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-20 blur-2xl md:blur-3xl transition-opacity duration-700 z-0"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
