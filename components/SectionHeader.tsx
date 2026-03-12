import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export const SectionHeader = ({ title, subtitle, light = false }: SectionHeaderProps) => (
  <div className="text-center mb-16 px-6">
    <h2 className={`text-4xl md:text-6xl font-heading font-bold ${light ? 'text-white' : 'text-white'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-4 text-lg max-w-2xl mx-auto ${light ? 'text-white/60' : 'text-white/40'}`}>
        {subtitle}
      </p>
    )}
    <div className="w-24 h-1 bg-secondary mx-auto mt-6" />
  </div>
);
