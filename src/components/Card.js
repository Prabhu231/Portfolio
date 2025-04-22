'use client'

import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Card = ({
  title,
  description,
  tags = [],
  githubUrl,
  deployedUrl = null
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="relative bg-black border border-cyan-500/30 rounded-md overflow-hidden h-[250px] flex flex-col justify-between"
      style={{
        boxShadow: isHovered 
          ? "0 0 15px 2px rgba(34, 211, 238, 0.4), 0 0 30px 4px rgba(34, 211, 238, 0.2)" 
          : "0 0 5px 1px rgba(34, 211, 238, 0.2)"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
    
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute inset-0">
          <div className="grid grid-cols-8 h-full w-full">
            {Array(8).fill(0).map((_, i) => (
              <div key={`col-${i}`} className="border-r border-cyan-500/20 h-full"></div>
            ))}
          </div>
          <div className="grid grid-rows-8 h-full w-full">
            {Array(8).fill(0).map((_, i) => (
              <div key={`row-${i}`} className="border-b border-cyan-500/20 w-full"></div>
            ))}
          </div>
        </div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-cyan-700/50"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-cyan-700/50"></div>
        <div className="absolute left-1/3 top-0 h-full w-px bg-cyan-700/50"></div>
        <div className="absolute left-2/3 top-0 h-full w-px bg-cyan-700/50"></div>
      </div>

      {isHovered && (
        <>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500 to-cyan-500/0"
            style={{ animation: "pulse-horizontal 2s ease-in-out infinite" }}
          ></div>
          <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-cyan-500/0 via-cyan-500 to-cyan-500/0"
            style={{ animation: "pulse-vertical 2s ease-in-out infinite", animationDelay: "0.5s" }}
          ></div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500 to-cyan-500/0"
            style={{ animation: "pulse-horizontal 2s ease-in-out infinite", animationDelay: "1s" }}
          ></div>
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-cyan-500/0 via-cyan-500 to-cyan-500/0"
            style={{ animation: "pulse-vertical 2s ease-in-out infinite", animationDelay: "1.5s" }}
          ></div>
        </>
      )}

 
      <div className="relative p-4 z-10 flex flex-col h-full">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            {deployedUrl ? (
              <a 
                href={deployedUrl}
                className="inline-block text-cyan-400 text-lg font-medium hover:text-cyan-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {title} <ExternalLink className="inline-block ml-1 h-4 w-4" />
              </a>
            ) : (
              <h3 className="text-cyan-400 text-lg font-medium">{title}</h3>
            )}
          </div>
          {githubUrl && (
            <a 
              href={githubUrl}
              className="text-blue-400 hover:text-blue-300 transition-colors p-1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
        </div>

        <p className="text-gray-300 text-sm mb-4">{description}</p>

        {tags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs bg-blue-900/30 text-cyan-300 rounded border border-cyan-500/30"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes pulse-horizontal {
          0%, 100% { transform: scaleX(0.8); opacity: 0; }
          50% { transform: scaleX(1); opacity: 1; }
        }
        @keyframes pulse-vertical {
          0%, 100% { transform: scaleY(0.8); opacity: 0; }
          50% { transform: scaleY(1); opacity: 1; }
        }
      `}</style>
    </motion.div>
  );
};

export default Card;
