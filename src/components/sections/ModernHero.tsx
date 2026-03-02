import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/components/ui';
import { 
  fadeInUp, 
  bounceIn, 
  hoverLift,
  hoverScale 
} from '@/utils/animations';

interface ModernHeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export function ModernHero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  onPrimaryClick,
  onSecondaryClick
}: ModernHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(ellipse at top, #772c2c, transparent 50%)",
              "radial-gradient(ellipse at right, #e1e2cc, transparent 50%)",
              "radial-gradient(ellipse at bottom, #772c2c, transparent 50%)",
              "radial-gradient(ellipse at left, #e1e2cc, transparent 50%)",
              "radial-gradient(ellipse at top, #772c2c, transparent 50%)"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        {/* Animated particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            initial: { opacity: 0 },
            animate: { 
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
          className="space-y-8"
        >
          {/* Logo Animation */}
          <motion.div
            variants={bounceIn}
            className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-4xl font-bold text-white"
            >
              DW
            </motion.div>
          </motion.div>

          {/* Title with Typewriter Effect */}
          <motion.div
            variants={fadeInUp}
            className="space-y-4"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {title}
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl text-white/90 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {subtitle}
            </motion.h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={onPrimaryClick}
              className="group relative px-8 py-4 bg-white text-brand font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{primaryCta}</span>
              <motion.div
                className="absolute inset-0 bg-brand/10"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                initial={{ x: -10, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.div>
            </motion.button>

            <motion.button
              onClick={onSecondaryClick}
              className="group relative px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-white hover:text-brand"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{secondaryCta}</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}