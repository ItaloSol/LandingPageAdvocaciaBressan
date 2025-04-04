"use client";

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

interface StatProps {
  endValue: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

function StatCounter({ endValue, label, prefix = "+", suffix = "", decimals = 0 }: StatProps) {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      const duration = 2000;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = easeOutQuart * endValue;

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, endValue, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="text-center"
    >
      <AnimatePresence>
        {inView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-bold text-[#C4A45F] mb-2"
          >
            {prefix}
            {decimals > 0
              ? count.toFixed(decimals)
              : Math.round(count).toLocaleString()}
            {suffix}
          </motion.div>
        )}
      </AnimatePresence>
      <p className="text-sm md:text-base text-white/80 whitespace-pre-line">{label}</p>
    </motion.div>
  );
}

export default function Stats() {
  const stats = [
    {
      value: 647,
      label: "Clientes\nConcedidos",
      prefix: "+",
      suffix: ""
    },
    {
      value: 521,
      label: "Processos\nFinalizados",
      prefix: "+",
      suffix: ""
    },
    {
      value: 360,
      label: "Benefícios\nConcedidos",
      prefix: "+",
      suffix: ""
    }
  ];

  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-[#1A1A1A] rounded-2xl border border-[#C4A45F]/20 p-8 md:p-12 shadow-xl
                       hover:border-[#C4A45F] transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <StatCounter
                key={index}
                endValue={stat.value}
                label={stat.label}
                prefix={stat.prefix}
                suffix={stat.suffix}
                decimals={0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}