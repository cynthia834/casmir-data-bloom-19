import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface ParticleBackgroundProps {
  count?: number;
  className?: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ 
  count = 20, 
  className = "fixed inset-0 pointer-events-none overflow-hidden" 
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const particleArray: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 12 + 6,
      duration: Math.random() * 12 + 6,
      delay: i * 0.3
    }));
    setParticles(particleArray);
  }, [count]);

  return (
    <div className={className}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute particle animate-particle-float opacity-30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            background: particle.id % 3 === 0 ? 'hsl(var(--primary))' : 
                       particle.id % 3 === 1 ? 'hsl(var(--secondary))' : 
                       'hsl(var(--accent))',
            boxShadow: particle.id % 2 === 0 ? '0 0 15px hsl(var(--primary) / 0.2)' : '0 0 10px hsl(var(--accent) / 0.15)'
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;