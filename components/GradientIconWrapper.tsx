import React, { ReactNode } from 'react';

interface GradientIconWrapperProps {
  children: ReactNode;
  gradient: string;
}

export function GradientIconWrapper({ children, gradient }: GradientIconWrapperProps) {
  return (
    <div className={`w-14 h-14 rounded-xl ${gradient} flex items-center justify-center shadow-lg`}>
      <div className="w-7 h-7 text-white">
        {children}
      </div>
    </div>
  );
}

// Pre-configured gradient icons for easy use
export const GradientIcon = {
  Green: ({ children }: { children: ReactNode }) => (
    <GradientIconWrapper gradient="bg-linear-to-br from-green-400 to-emerald-600">
      {children}
    </GradientIconWrapper>
  ),
  Blue: ({ children }: { children: ReactNode }) => (
    <GradientIconWrapper gradient="bg-linear-to-br from-blue-400 to-blue-600">
      {children}
    </GradientIconWrapper>
  ),
  Orange: ({ children }: { children: ReactNode }) => (
    <GradientIconWrapper gradient="bg-linear-to-br from-orange-400 to-red-500">
      {children}
    </GradientIconWrapper>
  ),
  Pink: ({ children }: { children: ReactNode }) => (
    <GradientIconWrapper gradient="bg-linear-to-br from-pink-400 to-pink-600">
      {children}
    </GradientIconWrapper>
  ),
  Yellow: ({ children }: { children: ReactNode }) => (
    <GradientIconWrapper gradient="bg-linear-to-br from-yellow-400 to-orange-500">
      {children}
    </GradientIconWrapper>
  ),
  Cyan: ({ children }: { children: ReactNode }) => (
    <GradientIconWrapper gradient="bg-linear-to-br from-cyan-400 to-teal-600">
      {children}
    </GradientIconWrapper>
  ),
  Purple: ({ children }: { children: ReactNode }) => (
    <GradientIconWrapper gradient="bg-linear-to-br from-purple-400 to-purple-600">
      {children}
    </GradientIconWrapper>
  ),
  Indigo: ({ children }: { children: ReactNode }) => (
    <GradientIconWrapper gradient="bg-linear-to-br from-indigo-400 to-indigo-600">
      {children}
    </GradientIconWrapper>
  ),
  Slate: ({ children }: { children: ReactNode }) => (
    <GradientIconWrapper gradient="bg-linear-to-br from-slate-400 to-slate-700">
      {children}
    </GradientIconWrapper>
  ),
  Red: ({ children }: { children: ReactNode }) => (
    <GradientIconWrapper gradient="bg-linear-to-br from-red-400 to-pink-600">
      {children}
    </GradientIconWrapper>
  ),
  Rose: ({ children }: { children: ReactNode }) => (
    <GradientIconWrapper gradient="bg-linear-to-br from-rose-400 to-rose-600">
      {children}
    </GradientIconWrapper>
  ),
};
