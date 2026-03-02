import { ReactNode, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up',
  duration = 0.6,
  threshold = 0.1,
  once = true 
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold, once });

  const getVariants = () => {
    switch (direction) {
      case 'down':
        return {
          initial: { opacity: 0, y: -60 },
          animate: { opacity: 1, y: 0 },
        };
      case 'left':
        return {
          initial: { opacity: 0, x: 60 },
          animate: { opacity: 1, x: 0 },
        };
      case 'right':
        return {
          initial: { opacity: 0, x: -60 },
          animate: { opacity: 1, x: 0 },
        };
      default:
        return {
          initial: { opacity: 0, y: 60 },
          animate: { opacity: 1, y: 0 },
        };
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={variants.initial}
      animate={isInView ? variants.animate : variants.initial}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}

interface CounterProps {
  end: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export function AnimatedCounter({ 
  end, 
  duration = 2, 
  className = '', 
  prefix = '', 
  suffix = '' 
}: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const endValue = end;
      const incrementTime = (duration * 1000) / endValue;
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === endValue) {
          clearInterval(timer);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
}

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
  delay?: number;
}

export function TypewriterEffect({ 
  text, 
  speed = 50, 
  className = '', 
  delay = 0 
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !isTyping) {
      setIsTyping(true);
      
      setTimeout(() => {
        let index = 0;
        const timer = setInterval(() => {
          if (index < text.length) {
            setDisplayText(text.slice(0, index + 1));
            index++;
          } else {
            clearInterval(timer);
          }
        }, speed);

        return () => clearInterval(timer);
      }, delay);
    }
  }, [isInView, text, speed, delay, isTyping]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-5 bg-current ml-1"
      />
    </motion.span>
  );
}

export default ScrollReveal
