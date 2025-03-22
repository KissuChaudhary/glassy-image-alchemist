import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Squares } from '@/components/ui/squares-background';
import { Image, Users, CheckCircle, HeadphonesIcon } from 'lucide-react';

const AnimatedCounter: React.FC<{ value: number; suffix?: string }> = ({ value, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      if (currentStep < steps) {
        setCount(Math.round(stepValue * currentStep));
        currentStep++;
      } else {
        setCount(value);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>{count.toLocaleString()}{suffix}</span>
  );
};

const Stats: React.FC = () => {
  const stats = [
    { icon: Image, value: 1000000, suffix: '+', label: 'Images Transformed' },
    { icon: Users, value: 50000, suffix: '+', label: 'Happy Users' },
    { icon: CheckCircle, value: 99, suffix: '%', label: 'Success Rate' },
    { icon: HeadphonesIcon, label: 'Support', customValue: '24/7' }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <Squares direction="diagonal" speed={0.3} borderColor="#333" squareSize={40} hoverFillColor="#222" className="opacity-20" />
      </div>
      <div className="absolute inset-0 bg-gradient-radial from-dark-lighter/30 to-transparent opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card backdrop-blur-xl bg-white/5 border border-white/10 p-6 rounded-xl text-center"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-4xl font-bold text-gradient mb-2">
                {stat.customValue || <AnimatedCounter value={stat.value} suffix={stat.suffix} />}
              </h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;