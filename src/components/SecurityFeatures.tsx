import { useState, useEffect, useRef } from 'react';
import FeatureCard from './FeatureCard';
import FeatureImage from './FeatureImage';

import { UserCircleIcon, BeakerIcon,ArrowPathRoundedSquareIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'
const features = [
  {
    title: 'Role based access control',
    icon: <UserCircleIcon />,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    description: 'Regulate and control pipeline access across your team.'
  },
  {
    title: 'Run pipelines in the region of your choice',
    icon: <ArrowPathRoundedSquareIcon />,
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    description: 'Configure the data plane region as per your need.'
  },
  {
    title: 'Compliance that you can trust',
    icon: <ShieldCheckIcon />,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    description: 'Trustworthy compliance for your pipelines.'
  }
];

const ANIMATION_DURATION = 2500; // ms

export default function SecurityFeatures() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Progress animation logic
  useEffect(() => {
    if (!autoPlay) return;
    setProgress(0);
    intervalRef.current && clearInterval(intervalRef.current);
    const start = Date.now();
    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(elapsed / ANIMATION_DURATION, 1);
      setProgress(pct);
      if (pct === 1) {
        clearInterval(intervalRef.current!);
        setTimeout(() => {
          setActiveIdx((prev) => (prev + 1) % features.length);
        }, 200);
      }
    }, 30);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeIdx, autoPlay]);

  // Reset progress on manual card click
  const handleCardClick = (idx: number) => {
    setAutoPlay(false);
    setActiveIdx(idx);
    setProgress(1);
  };

  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between gap-8 py-12 px-4 md:px-12 bg-white">
      {/* Left Section */}
      <div className="flex-1 max-w-xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Get enterprise-grade security</h2>
        <p className="text-gray-600 mb-8">Regulate and control pipeline access across your team. Configure the data plane region as per your need.</p>
        <div className="flex flex-col gap-4">
          {features.map((feature, idx) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              active={activeIdx === idx}
              progress={activeIdx === idx ? progress : 0}
              onClick={() => handleCardClick(idx)}
            />
          ))}
        </div>
      </div>
      {/* Right Section */}
      <div className="flex-1 flex items-center justify-center w-full max-w-lg">
        <FeatureImage
          image={features[activeIdx].image}
          alt={features[activeIdx].title}
        />
      </div>
    </section>
  );
} 