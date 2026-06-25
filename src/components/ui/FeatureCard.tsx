import type { ReactNode } from 'react';

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
}

export function FeatureCard({ icon, title, children }: FeatureCardProps) {
  return (
    <div className="feature-card">
      {icon && <div className="feature-icon">{icon}</div>}
      <h3>{title}</h3>
      {children}
    </div>
  );
}
