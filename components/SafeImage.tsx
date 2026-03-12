'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ImageOff } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fallbackClassName?: string;
}

export function SafeImage({ src, alt, fill, width, height, className, priority, fallbackClassName }: SafeImageProps) {
  const [error, setError] = useState(false);
  
  if (error || !src) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-primary via-primary/80 to-secondary/20 ${fallbackClassName || className || ''}`}>
        <ImageOff size={32} className="text-secondary/40" />
      </div>
    );
  }
  
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={!fill ? (width ?? 800) : undefined}
      height={!fill ? (height ?? 600) : undefined}
      className={className}
      priority={priority}
      onError={() => setError(true)}
    />
  );
}
