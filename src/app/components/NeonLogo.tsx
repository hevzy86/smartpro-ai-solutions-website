"use client";

import React from 'react';

interface NeonLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function NeonLogo({ width = 400, height = 200, className = "" }: NeonLogoProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 800 400"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-2xl"
      >
        <defs>
          {/* Neon gradients */}
          <linearGradient id="neonBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d4ff" />
            <stop offset="50%" stopColor="#0099cc" />
            <stop offset="100%" stopColor="#0066ff" />
          </linearGradient>
          
          <linearGradient id="neonCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffff" />
            <stop offset="50%" stopColor="#00ccdd" />
            <stop offset="100%" stopColor="#0099bb" />
          </linearGradient>
          
          <linearGradient id="neonPurple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>

          {/* Glow filters */}
          <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <filter id="strongGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Brain Icon with Neon Effect */}
        <g transform="translate(50, 100)">
          {/* Circuit board frame */}
          <rect 
            x="0" 
            y="0" 
            width="120" 
            height="120" 
            rx="20" 
            fill="none" 
            stroke="url(#neonBlue)" 
            strokeWidth="3"
            filter="url(#neonGlow)"
          />
          
          {/* Circuit nodes */}
          <circle cx="0" cy="30" r="8" fill="url(#neonCyan)" filter="url(#neonGlow)" />
          <circle cx="0" cy="90" r="8" fill="url(#neonCyan)" filter="url(#neonGlow)" />
          <circle cx="30" cy="0" r="8" fill="url(#neonCyan)" filter="url(#neonGlow)" />
          <circle cx="90" cy="0" r="8" fill="url(#neonCyan)" filter="url(#neonGlow)" />
          <circle cx="120" cy="30" r="8" fill="url(#neonCyan)" filter="url(#neonGlow)" />
          <circle cx="120" cy="90" r="8" fill="url(#neonCyan)" filter="url(#neonGlow)" />
          <circle cx="30" cy="120" r="8" fill="url(#neonCyan)" filter="url(#neonGlow)" />
          <circle cx="90" cy="120" r="8" fill="url(#neonCyan)" filter="url(#neonGlow)" />
          
          {/* Circuit lines */}
          <line x1="8" y1="30" x2="22" y2="30" stroke="url(#neonBlue)" strokeWidth="2" filter="url(#neonGlow)" />
          <line x1="8" y1="90" x2="22" y2="90" stroke="url(#neonBlue)" strokeWidth="2" filter="url(#neonGlow)" />
          <line x1="30" y1="8" x2="30" y2="22" stroke="url(#neonBlue)" strokeWidth="2" filter="url(#neonGlow)" />
          <line x1="90" y1="8" x2="90" y2="22" stroke="url(#neonBlue)" strokeWidth="2" filter="url(#neonGlow)" />
          <line x1="98" y1="30" x2="112" y2="30" stroke="url(#neonBlue)" strokeWidth="2" filter="url(#neonGlow)" />
          <line x1="98" y1="90" x2="112" y2="90" stroke="url(#neonBlue)" strokeWidth="2" filter="url(#neonGlow)" />
          <line x1="30" y1="98" x2="30" y2="112" stroke="url(#neonBlue)" strokeWidth="2" filter="url(#neonGlow)" />
          <line x1="90" y1="98" x2="90" y2="112" stroke="url(#neonBlue)" strokeWidth="2" filter="url(#neonGlow)" />
          
          {/* Brain shape */}
          <g transform="translate(20, 20)">
            {/* Left hemisphere */}
            <path 
              d="M 20 40 C 10 20, 30 10, 40 20 C 50 10, 60 20, 50 40 C 45 50, 35 50, 30 45 C 25 50, 15 50, 20 40 Z"
              fill="url(#neonCyan)"
              filter="url(#strongGlow)"
            />
            
            {/* Right hemisphere */}
            <path 
              d="M 50 40 C 60 20, 40 10, 30 20 C 20 10, 10 20, 20 40 C 25 50, 35 50, 40 45 C 45 50, 55 50, 50 40 Z"
              fill="url(#neonCyan)"
              filter="url(#strongGlow)"
              transform="translate(20, 0)"
            />
            
            {/* Brain details */}
            <path 
              d="M 25 25 Q 35 20, 45 25 Q 35 30, 25 25"
              fill="none"
              stroke="url(#neonPurple)"
              strokeWidth="2"
              filter="url(#neonGlow)"
            />
            <path 
              d="M 30 35 Q 40 30, 50 35 Q 40 40, 30 35"
              fill="none"
              stroke="url(#neonPurple)"
              strokeWidth="2"
              filter="url(#neonGlow)"
            />
          </g>
        </g>
        
        {/* SmartPro Text */}
        <text 
          x="220" 
          y="160" 
          fontSize="48" 
          fontWeight="bold" 
          fontFamily="Arial, sans-serif"
          fill="url(#neonBlue)"
          filter="url(#strongGlow)"
        >
          SmartPro
        </text>
        
        {/* AI Solutions Text */}
        <text 
          x="220" 
          y="210" 
          fontSize="36" 
          fontWeight="600" 
          fontFamily="Arial, sans-serif"
          fill="url(#neonCyan)"
          filter="url(#neonGlow)"
        >
          AI Solutions
        </text>
        
        {/* Decorative elements */}
        <g opacity="0.7">
          {/* Floating particles */}
          <circle cx="650" cy="80" r="3" fill="url(#neonPurple)" filter="url(#neonGlow)">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="680" cy="120" r="2" fill="url(#neonCyan)" filter="url(#neonGlow)">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="720" cy="90" r="4" fill="url(#neonBlue)" filter="url(#neonGlow)">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" />
          </circle>
          
          {/* Connection lines */}
          <line x1="650" y1="80" x2="680" y2="120" stroke="url(#neonPurple)" strokeWidth="1" opacity="0.5" filter="url(#neonGlow)" />
          <line x1="680" y1="120" x2="720" y2="90" stroke="url(#neonCyan)" strokeWidth="1" opacity="0.5" filter="url(#neonGlow)" />
        </g>
      </svg>
    </div>
  );
}
