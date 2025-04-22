'use client'
import { useEffect, useState } from "react";

const Background = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return null
  }
  return (
    <div className="absolute inset-0 bg-black overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full w-full">
          {Array(12).fill(0).map((_, i) => (
            <div key={`col-${i}`} className="border-r border-cyan-500/10 h-full"></div>
          ))}
        </div>
        <div className="grid grid-rows-12 h-full w-full">
          {Array(12).fill(0).map((_, i) => (
            <div key={`row-${i}`} className="border-b border-cyan-500/10 w-full"></div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
   
        <div className="absolute top-1/6 left-0 w-full h-px bg-cyan-700/50"></div>
        <div className="absolute top-3/6 left-0 w-full h-px bg-cyan-700/50"></div>
        <div className="absolute top-5/6 left-0 w-full h-px bg-cyan-700/50"></div>

        <div className="absolute top-0 left-1/6 h-full w-px bg-cyan-700/50"></div>
        <div className="absolute top-0 left-3/6 h-full w-px bg-cyan-700/50"></div>
        <div className="absolute top-0 left-5/6 h-full w-px bg-cyan-700/50"></div>

  
        <div className="absolute top-1/6 left-1/6 w-1/6 h-px bg-cyan-700/50"></div>
        <div className="absolute top-1/6 left-3/6 w-1/6 h-px bg-cyan-700/50"></div>
        <div className="absolute top-3/6 left-3/6 w-1/6 h-px bg-cyan-700/50"></div>
        <div className="absolute top-5/6 left-1/6 w-1/6 h-px bg-cyan-700/50"></div>

        <div className="absolute top-1/6 left-1/6 h-1/6 w-px bg-cyan-700/50"></div>
        <div className="absolute top-3/6 left-3/6 h-1/6 w-px bg-cyan-700/50"></div>
        <div className="absolute top-1/6 left-5/6 h-2/6 w-px bg-cyan-700/50"></div>
        <div className="absolute top-3/6 left-1/6 h-2/6 w-px bg-cyan-700/50"></div>
      </div>


      <div className="absolute top-1/6 left-0 h-px w-full overflow-hidden">
        {Array(5).fill(0).map((_, i) => (
          <div
            key={`h1-pulse-${i}`}
            className="absolute h-1 w-24 bg-gradient-to-r from-cyan-500/0 via-cyan-500 to-cyan-500/0"
            style={{
              top: '-0.5px',
              left: '-24px',
              boxShadow: '0 0 10px 2px rgba(34, 211, 238, 0.7), 0 0 20px 6px rgba(34, 211, 238, 0.4)',
              animation: `flow-right 6s linear infinite`,
              animationDelay: `${i * 1.2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="absolute top-3/6 left-0 h-px w-full overflow-hidden">
        {Array(5).fill(0).map((_, i) => (
          <div
            key={`h2-pulse-${i}`}
            className="absolute h-1 w-28 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0"
            style={{
              top: '-0.5px',
              left: '-28px',
              boxShadow: '0 0 10px 2px rgba(59, 130, 246, 0.7), 0 0 20px 6px rgba(59, 130, 246, 0.4)',
              animation: `flow-right 5s linear infinite`,
              animationDelay: `${i * 1}s`
            }}
          ></div>
        ))}
      </div>

      <div className="absolute top-5/6 left-0 h-px w-full overflow-hidden">
        {Array(5).fill(0).map((_, i) => (
          <div
            key={`h3-pulse-${i}`}
            className="absolute h-1 w-24 bg-gradient-to-r from-cyan-500/0 via-cyan-500 to-cyan-500/0"
            style={{
              top: '-0.5px',
              left: '-24px',
              boxShadow: '0 0 10px 2px rgba(34, 211, 238, 0.7), 0 0 20px 6px rgba(34, 211, 238, 0.4)',
              animation: `flow-right 7s linear infinite`,
              animationDelay: `${i * 1.4}s`
            }}
          ></div>
        ))}
      </div>

     
      <div className="absolute left-1/6 top-0 w-px h-full overflow-hidden">
        {Array(5).fill(0).map((_, i) => (
          <div
            key={`v1-pulse-${i}`}
            className="absolute w-1 h-24 bg-gradient-to-b from-blue-500/0 via-blue-500 to-blue-500/0"
            style={{
              left: '-0.5px',
              top: '-24px',
              boxShadow: '0 0 10px 2px rgba(59, 130, 246, 0.7), 0 0 20px 6px rgba(59, 130, 246, 0.4)',
              animation: `flow-down 8s linear infinite`,
              animationDelay: `${i * 1.6}s`
            }}
          ></div>
        ))}
      </div>

      <div className="absolute left-3/6 top-0 w-px h-full overflow-hidden">
        {Array(5).fill(0).map((_, i) => (
          <div
            key={`v2-pulse-${i}`}
            className="absolute w-1 h-28 bg-gradient-to-b from-blue-500/0 via-blue-500 to-blue-500/0"
            style={{
              left: '-0.5px',
              top: '-28px',
              boxShadow: '0 0 10px 2px rgba(59, 130, 246, 0.7), 0 0 20px 6px rgba(59, 130, 246, 0.4)',
              animation: `flow-down 9s linear infinite`,
              animationDelay: `${i * 1.8}s`
            }}
          ></div>
        ))}
      </div>

      <div className="absolute left-5/6 top-0 w-px h-full overflow-hidden">
        {Array(5).fill(0).map((_, i) => (
          <div
            key={`v3-pulse-${i}`}
            className="absolute w-1 h-24 bg-gradient-to-b from-cyan-500/0 via-cyan-500 to-cyan-500/0"
            style={{
              left: '-0.5px',
              top: '-24px',
              boxShadow: '0 0 10px 2px rgba(34, 211, 238, 0.7), 0 0 20px 6px rgba(34, 211, 238, 0.4)',
              animation: `flow-down 7s linear infinite`,
              animationDelay: `${i * 1.4}s`
            }}
          ></div>
        ))}
      </div>

   
      <div className="absolute top-1/6 left-0 h-px w-full overflow-hidden">
        {Array(4).fill(0).map((_, i) => (
          <div
            key={`packet-h1-${i}`}
            className="absolute h-3 w-3 bg-cyan-400 rounded-full"
            style={{
              top: '-1.5px',
              left: '-3px',
              boxShadow: '0 0 10px 5px rgba(34, 211, 238, 0.9), 0 0 20px 10px rgba(34, 211, 238, 0.5)',
              animation: `packet-right 6s linear infinite`,
              animationDelay: `${i * 1.5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="absolute top-3/6 left-0 h-px w-full overflow-hidden">
        {Array(4).fill(0).map((_, i) => (
          <div
            key={`packet-h2-${i}`}
            className="absolute h-4 w-4 bg-blue-400 rounded-full"
            style={{
              top: '-2px',
              left: '-4px',
              boxShadow: '0 0 15px 8px rgba(59, 130, 246, 0.9), 0 0 25px 12px rgba(59, 130, 246, 0.5)',
              animation: `packet-right 5s linear infinite`,
              animationDelay: `${i * 1.25}s`
            }}
          ></div>
        ))}
      </div>

      <div className="absolute top-5/6 left-0 h-px w-full overflow-hidden">
        {Array(4).fill(0).map((_, i) => (
          <div
            key={`packet-h3-${i}`}
            className="absolute h-3 w-3 bg-cyan-400 rounded-full"
            style={{
              top: '-1.5px',
              left: '-3px',
              boxShadow: '0 0 10px 5px rgba(34, 211, 238, 0.9), 0 0 20px 10px rgba(34, 211, 238, 0.5)',
              animation: `packet-right 7s linear infinite`,
              animationDelay: `${i * 1.4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="absolute left-1/6 top-0 w-px h-full overflow-hidden">
        {Array(4).fill(0).map((_, i) => (
          <div
            key={`packet-v1-${i}`}
            className="absolute h-3 w-3 bg-blue-400 rounded-full"
            style={{
              left: '-1.5px',
              top: '-3px',
              boxShadow: '0 0 10px 5px rgba(59, 130, 246, 0.9), 0 0 20px 10px rgba(59, 130, 246, 0.5)',
              animation: `packet-down 8s linear infinite`,
              animationDelay: `${i * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="absolute left-5/6 top-0 w-px h-full overflow-hidden">
        {Array(4).fill(0).map((_, i) => (
          <div
            key={`packet-v2-${i}`}
            className="absolute h-4 w-4 bg-cyan-400 rounded-full"
            style={{
              left: '-2px',
              top: '-4px',
              boxShadow: '0 0 15px 8px rgba(34, 211, 238, 0.9), 0 0 25px 12px rgba(34, 211, 238, 0.5)',
              animation: `packet-down 7s linear infinite`,
              animationDelay: `${i * 1.75}s`
            }}
          ></div>
        ))}
      </div>

    
      {Array(6).fill(0).map((_, i) => {
        const positions = [
          { path: 'h', pos: '1/6', offset: `${20 + Math.random() * 60}%` },
          { path: 'h', pos: '3/6', offset: `${20 + Math.random() * 60}%` },
          { path: 'h', pos: '5/6', offset: `${20 + Math.random() * 60}%` },
          { path: 'v', pos: '1/6', offset: `${20 + Math.random() * 60}%` },
          { path: 'v', pos: '3/6', offset: `${20 + Math.random() * 60}%` },
          { path: 'v', pos: '5/6', offset: `${20 + Math.random() * 60}%` },
        ];
        const randomIdx = Math.floor(Math.random() * positions.length);
        const pos = positions[randomIdx];

        return (
          <div
            key={`lightning-${i}`}
            className={`absolute ${pos.path === 'h' ? `top-${pos.pos} left-${pos.offset}` : `left-${pos.pos} top-${pos.offset}`}`}
            style={{
              width: pos.path === 'h' ? '12px' : '1px',
              height: pos.path === 'h' ? '1px' : '12px',
              backgroundColor: 'rgba(56, 189, 248, 0.9)',
              boxShadow: '0 0 10px 5px rgba(56, 189, 248, 0.8), 0 0 20px 10px rgba(56, 189, 248, 0.4)',
              animationName: 'lightning',
              animationDuration: `${0.5 + Math.random() * 1.5}s`,
              animationTimingFunction: 'ease-out',
              animationIterationCount: 'infinite',
              animationDelay: '0.5s',
            }}
          />

        );
      })}

      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black/0 to-cyan-900/30"></div>

      <style jsx>{`
        @keyframes flow-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(100vw); }
        }
        @keyframes flow-down {
          0% { transform: translateY(0); }
          100% { transform: translateY(100vh); }
        }
        @keyframes packet-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(100vw); }
        }
        @keyframes packet-down {
          0% { transform: translateY(0); }
          100% { transform: translateY(100vh); }
        }
        @keyframes lightning {
          0% { opacity: 0; transform: scale(1); }
          5% { opacity: 1; transform: scale(2); }
          10% { opacity: 0.8; transform: scale(1.5); }
          15% { opacity: 1; transform: scale(2.5); }
          20% { opacity: 0; transform: scale(1); }
          100% { opacity: 0; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Background;