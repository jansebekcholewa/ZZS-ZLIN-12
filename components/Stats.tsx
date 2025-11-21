import React, { useState, useEffect, useRef } from 'react';
import { STATS } from '../constants';

const useCounter = (end: number, duration: number = 2000, start: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, start]);

  return count;
};

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-zzs-red text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
          {STATS.map((stat) => (
            <div key={stat.id} className="p-4">
              <div className="text-4xl md:text-5xl font-extrabold mb-2">
                <StatNumber value={stat.value} isVisible={isVisible} />
                <span>{stat.suffix}</span>
              </div>
              <div className="text-sm md:text-base font-medium opacity-90 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatNumber: React.FC<{ value: number, isVisible: boolean }> = ({ value, isVisible }) => {
  const count = useCounter(value, 2500, isVisible);
  return <span>{count}</span>;
};

export default Stats;