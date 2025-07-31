"use client";

import React from 'react';

interface NeonLogoCompactProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function NeonLogoCompact({ width = 200, height = 50, className = "" }: NeonLogoCompactProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 400 100"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        <defs>
          {/* Neon gradients */}
          <linearGradient id="compactNeonBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d4ff" />
            <stop offset="50%" stopColor="#0099cc" />
            <stop offset="100%" stopColor="#0066ff" />
          </linearGradient>
          
          <linearGradient id="compactNeonCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffff" />
            <stop offset="50%" stopColor="#00ccdd" />
            <stop offset="100%" stopColor="#0099bb" />
          </linearGradient>

          {/* Glow filters */}
          <filter id="compactGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Compact Brain Icon */}
        <g transform="translate(10, 15)">
          {/* Circuit frame */}
          <rect 
            x="0" 
            y="0" 
            width="60" 
            height="60" 
            rx="10" 
            fill="none" 
            stroke="url(#compactNeonBlue)" 
            strokeWidth="2"
            filter="url(#compactGlow)"
          />
          
          {/* Circuit nodes */}
          <circle cx="0" cy="15" r="4" fill="url(#compactNeonCyan)" filter="url(#compactGlow)" />
          <circle cx="0" cy="45" r="4" fill="url(#compactNeonCyan)" filter="url(#compactGlow)" />
          <circle cx="15" cy="0" r="4" fill="url(#compactNeonCyan)" filter="url(#compactGlow)" />
          <circle cx="45" cy="0" r="4" fill="url(#compactNeonCyan)" filter="url(#compactGlow)" />
          <circle cx="60" cy="15" r="4" fill="url(#compactNeonCyan)" filter="url(#compactGlow)" />
          <circle cx="60" cy="45" r="4" fill="url(#compactNeonCyan)" filter="url(#compactGlow)" />
          <circle cx="15" cy="60" r="4" fill="url(#compactNeonCyan)" filter="url(#compactGlow)" />
          <circle cx="45" cy="60" r="4" fill="url(#compactNeonCyan)" filter="url(#compactGlow)" />
          
          {/* Brain shape */}
          <g transform="translate(15, 15)">
            <path 
              d="M 10 20 C 5 10, 15 5, 20 10 C 25 5, 30 10, 25 20 C 22 25, 18 25, 15 22 C 12 25, 8 25, 10 20 Z"
              fill="url(#compactNeonCyan)"
              filter="url(#compactGlow)"
            />
          </g>
        </g>
        
        {/* SmartPro Text */}
        <text 
          x="90" 
          y="40" 
          fontSize="20" 
          fontWeight="bold" 
          fontFamily="Arial, sans-serif"
          fill="url(#compactNeonBlue)"
          filter="url(#compactGlow)"
        >
          SmartPro
        </text>
        
        {/* AI Solutions Text */}
        <text 
          x="90" 
          y="60" 
          fontSize="14" 
          fontWeight="500" 
          fontFamily="Arial, sans-serif"
          fill="url(#compactNeonCyan)"
          filter="url(#compactGlow)"
        >
          AI Solutions
        </text>
      </svg>
    </div>
  );
}
