"use client";

import React from 'react';

interface NeonLogoIconProps {
  size?: number;
  className?: string;
}

export default function NeonLogoIcon({ size = 80, className = "" }: NeonLogoIconProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-xl"
      >
        <defs>
          {/* Neon gradients */}
          <linearGradient id="iconNeonBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d4ff" />
            <stop offset="50%" stopColor="#0099cc" />
            <stop offset="100%" stopColor="#0066ff" />
          </linearGradient>
          
          <linearGradient id="iconNeonCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffff" />
            <stop offset="50%" stopColor="#00ccdd" />
            <stop offset="100%" stopColor="#0099bb" />
          </linearGradient>
          
          <linearGradient id="iconNeonPurple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>

          {/* Glow filters */}
          <filter id="iconGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <filter id="iconStrongGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Brain Icon with Neon Effect */}
        <g>
          {/* Circuit board frame */}
          <rect 
            x="0" 
            y="0" 
            width="120" 
            height="120" 
            rx="20" 
            fill="none" 
            stroke="url(#iconNeonBlue)" 
            strokeWidth="3"
            filter="url(#iconGlow)"
          />
          
          {/* Circuit nodes */}
          <circle cx="0" cy="30" r="8" fill="url(#iconNeonCyan)" filter="url(#iconGlow)" />
          <circle cx="0" cy="90" r="8" fill="url(#iconNeonCyan)" filter="url(#iconGlow)" />
          <circle cx="30" cy="0" r="8" fill="url(#iconNeonCyan)" filter="url(#iconGlow)" />
          <circle cx="90" cy="0" r="8" fill="url(#iconNeonCyan)" filter="url(#iconGlow)" />
          <circle cx="120" cy="30" r="8" fill="url(#iconNeonCyan)" filter="url(#iconGlow)" />
          <circle cx="120" cy="90" r="8" fill="url(#iconNeonCyan)" filter="url(#iconGlow)" />
          <circle cx="30" cy="120" r="8" fill="url(#iconNeonCyan)" filter="url(#iconGlow)" />
          <circle cx="90" cy="120" r="8" fill="url(#iconNeonCyan)" filter="url(#iconGlow)" />
          
          {/* Circuit lines */}
          <line x1="8" y1="30" x2="22" y2="30" stroke="url(#iconNeonBlue)" strokeWidth="2" filter="url(#iconGlow)" />
          <line x1="8" y1="90" x2="22" y2="90" stroke="url(#iconNeonBlue)" strokeWidth="2" filter="url(#iconGlow)" />
          <line x1="30" y1="8" x2="30" y2="22" stroke="url(#iconNeonBlue)" strokeWidth="2" filter="url(#iconGlow)" />
          <line x1="90" y1="8" x2="90" y2="22" stroke="url(#iconNeonBlue)" strokeWidth="2" filter="url(#iconGlow)" />
          <line x1="98" y1="30" x2="112" y2="30" stroke="url(#iconNeonBlue)" strokeWidth="2" filter="url(#iconGlow)" />
          <line x1="98" y1="90" x2="112" y2="90" stroke="url(#iconNeonBlue)" strokeWidth="2" filter="url(#iconGlow)" />
          <line x1="30" y1="98" x2="30" y2="112" stroke="url(#iconNeonBlue)" strokeWidth="2" filter="url(#iconGlow)" />
          <line x1="90" y1="98" x2="90" y2="112" stroke="url(#iconNeonBlue)" strokeWidth="2" filter="url(#iconGlow)" />
          
          {/* Brain shape */}
          <g transform="translate(20, 20)">
            {/* Left hemisphere */}
            <path 
              d="M 20 40 C 10 20, 30 10, 40 20 C 50 10, 60 20, 50 40 C 45 50, 35 50, 30 45 C 25 50, 15 50, 20 40 Z"
              fill="url(#iconNeonCyan)"
              filter="url(#iconStrongGlow)"
            />
            
            {/* Right hemisphere */}
            <path 
              d="M 50 40 C 60 20, 40 10, 30 20 C 20 10, 10 20, 20 40 C 25 50, 35 50, 40 45 C 45 50, 55 50, 50 40 Z"
              fill="url(#iconNeonCyan)"
              filter="url(#iconStrongGlow)"
              transform="translate(20, 0)"
            />
            
            {/* Brain details */}
            <path 
              d="M 25 25 Q 35 20, 45 25 Q 35 30, 25 25"
              fill="none"
              stroke="url(#iconNeonPurple)"
              strokeWidth="2"
              filter="url(#iconGlow)"
            />
            <path 
              d="M 30 35 Q 40 30, 50 35 Q 40 40, 30 35"
              fill="none"
              stroke="url(#iconNeonPurple)"
              strokeWidth="2"
              filter="url(#iconGlow)"
            />
          </g>
          
          {/* Pulsing animation */}
          <circle cx="60" cy="60" r="3" fill="url(#iconNeonPurple)" filter="url(#iconGlow)">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  );
}
